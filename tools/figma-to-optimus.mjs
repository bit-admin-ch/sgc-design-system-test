#!/usr/bin/env node
/**
 * Maps a PrimeOne Figma plugin export (theme/ts/*.ts, PrimeUI v22 preset format)
 * onto an Optimus UI preset file.
 *
 *   npm run build:optimus      (= node tools/figma-to-optimus.mjs figma-export/theme/ts optimus/sgc-preset.ts)
 *
 * Besides the .ts file it writes dist/sgc-preset.js and dist/sgc-preset.d.ts next to it. Those are
 * the package entry points (see "exports" in package.json) for teams that install this repository
 * straight from Git: `npm install github:<org>/<repo>#v<N>`.
 *
 * Runs in CI on every Figma export, see .github/workflows/optimus-preset.yml.
 * The output is deterministic: same theme/ts + same Optimus version = same file.
 *
 * What it does:
 *  - parses the exported object literals (no code execution)
 *  - converts `light-dark(a, b)` values into Optimus' `colorScheme.light/dark` structure
 *  - keeps Aura's per-side pattern for shorthand tokens ("0 0 1px 0") where Figma can only export one length
 *  - drops components that do not exist in Optimus UI (reported, not silently ignored)
 *  - reports Optimus components the export does not cover (they fall back to Aura via definePreset)
 *  - reports token paths unknown to Optimus (harmless, but a sign of drift)
 */
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join, basename, dirname } from 'node:path';
import { pathToFileURL } from 'node:url';
import Aura from '@openng/optimus-ui-themes/aura';

// ---------- parse exported TS object literals as data ----------
function parseTokenFile(path) {
  let t = readFileSync(path, 'utf8');
  t = t.replace(/^\s*import[^\n]*\n/gm, '');
  t = t.replace('export default', '').trim();
  t = t.replace(/satisfies\s+[A-Za-z0-9_<>[\]]+\s*;?\s*$/, '');
  t = t.replace(/(\{|,)\s*([A-Za-z0-9_]+)\s*:/g, '$1 "$2":'); // quote keys
  t = t.replace(/,(\s*[}\]])/g, '$1'); // trailing commas
  return JSON.parse(t);
}

// ---------- light-dark(a, b) -> { light: a, dark: b } ----------
function splitLightDark(value) {
  const m = /^light-dark\((.*)\)$/s.exec(value.trim());
  if (!m) return null;
  let depth = 0;
  const inner = m[1];
  for (let i = 0; i < inner.length; i++) {
    const c = inner[i];
    if (c === '(') depth++;
    else if (c === ')') depth--;
    else if (c === ',' && depth === 0) {
      return { light: inner.slice(0, i).trim(), dark: inner.slice(i + 1).trim() };
    }
  }
  throw new Error('cannot split ' + value);
}

function setPath(obj, path, value) {
  let o = obj;
  for (const k of path.slice(0, -1)) o = o[k] ??= {};
  o[path.at(-1)] = value;
}

/** Splits a token tree into { common, light, dark }. light/dark are null if nothing was split. */
function splitTree(tree, stats) {
  const common = {}, light = {}, dark = {};
  let hasScheme = false;
  const walk = (node, path) => {
    for (const [k, v] of Object.entries(node)) {
      const p = [...path, k];
      if (v && typeof v === 'object' && !Array.isArray(v)) { walk(v, p); continue; }
      if (typeof v === 'string' && v.includes('light-dark(')) {
        const ld = splitLightDark(v);
        if (ld) {
          stats.lightDark++;
          setPath(light, p, ld.light);
          setPath(dark, p, ld.dark);
          hasScheme = true;
          continue;
        }
        stats.nestedLightDark.push(p.join('.') + ' = ' + v);
      }
      setPath(common, p, v);
    }
  };
  walk(tree, []);
  return { common, light: hasScheme ? light : null, dark: hasScheme ? dark : null };
}

const SINGLE_LENGTH = /^\d*\.?\d+(px|rem|em|%)?$/;

/**
 * Figma variables are single numbers, but some Optimus tokens are per-side CSS shorthands
 * (e.g. datatable.header.borderWidth = "0 0 1px 0"). An exported "1px" would turn a bottom border into
 * a full box. Where Aura uses such a pattern, re-apply the exported length to the non-zero sides only.
 */
function applySidePatterns(tree, auraByVar, stats, path = []) {
  for (const [k, v] of Object.entries(tree)) {
    const p = [...path, k];
    if (v && typeof v === 'object' && !Array.isArray(v)) { applySidePatterns(v, auraByVar, stats, p); continue; }
    if (typeof v !== 'string' || !SINGLE_LENGTH.test(v) || parseFloat(v) === 0) continue;
    const aura = auraByVar[p.join('.').replace(/\.colorScheme\.(light|dark)\./, '.')];
    if (typeof aura !== 'string') continue;
    const parts = aura.split(/\s+/);
    if (parts.length < 2 || !parts.includes('0') || parts.every((x) => x === '0')) continue;
    tree[k] = parts.map((x) => (x === '0' ? '0' : v)).join(' ');
    stats.sidePatterns.push(`${p.join('.')}: ${v} -> ${tree[k]}`);
  }
}

function flatten(o, p = '', out = {}) {
  if (o && typeof o === 'object' && !Array.isArray(o)) {
    for (const k of Object.keys(o)) flatten(o[k], p ? `${p}.${k}` : k, out);
  } else out[p] = o;
  return out;
}

/**
 * Generates the Optimus preset file from an export directory.
 * @param {string} srcDir  the export's theme/ts directory
 * @param {string} outFile the .ts file to write
 * @param {{source?: string}} [meta] provenance written into the file header
 * @returns the mapping report
 */
export function generatePreset(srcDir, outFile, meta = {}) {
  const stats = { lightDark: 0, nestedLightDark: [], sidePatterns: [], tokens: 0 };
  const files = readdirSync(srcDir).filter((f) => f.endsWith('.ts') && !['index.ts', 'extend.ts', 'base.ts'].includes(f));
  const base = parseTokenFile(join(srcDir, 'base.ts'));

  const preset = { primitive: base.primitive, semantic: {}, components: {} };

  // semantic: move light-dark into colorScheme
  {
    const { common, light, dark } = splitTree(base.semantic, stats);
    preset.semantic = { ...common, ...(light ? { colorScheme: { light, dark } } : {}) };
  }

  const optimusComponents = new Set(Object.keys(Aura.components));
  const skipped = [];
  for (const f of files) {
    const name = basename(f, '.ts');
    if (!optimusComponents.has(name)) { skipped.push(name); continue; }
    const tree = parseTokenFile(join(srcDir, f));
    const { common, light, dark } = splitTree(tree, stats);
    preset.components[name] = { ...common, ...(light ? { colorScheme: { light, dark } } : {}) };
  }
  const uncovered = [...optimusComponents].filter((c) => !(c in preset.components)).sort();

  // A token under colorScheme.light/dark yields the same CSS variable as a common one.
  const normKey = (p) => p.replace(/\.colorScheme\.(light|dark)\./, '.');
  const norm = (flat) => new Set(Object.keys(flat).map(normKey));
  const auraFlat = flatten(Aura);
  const auraByVar = Object.fromEntries(Object.entries(auraFlat).map(([k, v]) => [normKey(k), v]));
  applySidePatterns(preset.components, auraByVar, stats, ['components']);

  // Drift report on CSS-variable level.
  const outFlat = flatten(preset);
  stats.tokens = Object.keys(outFlat).length;
  const auraVars = norm(auraFlat), outVars = norm(outFlat);
  const unknown = [...outVars].filter((p) => !auraVars.has(p));
  const missing = [...auraVars].filter((p) => !outVars.has(p) && !p.endsWith('.css') && p !== 'css');

  const src = `/* eslint-disable */
// GENERATED by tools/figma-to-optimus.mjs from the PrimeOne Figma export. Do not edit by hand.
// Source: ${meta.source ?? srcDir}
import { definePreset } from '@openng/optimus-ui-themes';
import Aura from '@openng/optimus-ui-themes/aura';

/** Tokens exported from Figma, converted to the Optimus colorScheme structure. */
export const SgcTokens = ${JSON.stringify(preset, null, 2)};

/** Aura as fallback for components/tokens the Figma kit does not cover: ${uncovered.join(', ')} */
export const SgcPreset = definePreset(Aura, SgcTokens);
`;
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, src);

  // Package entry points. The generated source contains no TypeScript syntax, so it is valid
  // JavaScript as is and needs no compiler; consumers get it without a build step on install.
  const distDir = join(dirname(outFile), 'dist');
  const distName = basename(outFile, '.ts');
  mkdirSync(distDir, { recursive: true });
  writeFileSync(join(distDir, `${distName}.js`), src);
  writeFileSync(join(distDir, `${distName}.d.ts`), `// GENERATED by tools/figma-to-optimus.mjs. Do not edit by hand.
import type { Preset } from '@openng/optimus-ui-themes/types';

/** Tokens exported from Figma, converted to the Optimus colorScheme structure. */
export declare const SgcTokens: Preset;

/** SgcTokens on top of Aura, ready for providePrimeNG/usePreset. */
export declare const SgcPreset: Preset;
`);

  return {
    outFile,
    tokens: stats.tokens,
    lightDarkConverted: stats.lightDark,
    mapped: Object.keys(preset.components).length,
    skipped: skipped.sort(),
    uncovered,
    unknown,
    missing,
    unconvertedLightDark: stats.nestedLightDark,
    sidePatterns: stats.sidePatterns,
  };
}

export function printReport(r) {
  console.log(`written ${r.outFile}`);
  console.log(`tokens: ${r.tokens}, light-dark() converted: ${r.lightDarkConverted}`);
  console.log(`components mapped: ${r.mapped}`);
  console.log(`components skipped (not in Optimus): ${r.skipped.join(', ')}`);
  console.log(`Optimus components not in export (Aura fallback): ${r.uncovered.join(', ')}`);
  console.log(`token paths unknown to Optimus (${r.unknown.length}):`);
  for (const p of r.unknown) console.log('  + ' + p);
  console.log(`Optimus token paths missing in export (${r.missing.length}):`);
  for (const p of r.missing) console.log('  - ' + p);
  console.log(`per-side shorthands restored from Aura (${r.sidePatterns.length}):`);
  for (const p of r.sidePatterns) console.log('  ~ ' + p);
  if (r.unconvertedLightDark.length) {
    console.log('UNCONVERTED light-dark (nested):');
    r.unconvertedLightDark.forEach((s) => console.log('  ! ' + s));
  }
}

// ---------- CLI ----------
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const [srcDir, outFile] = process.argv.slice(2);
  if (!srcDir || !outFile) {
    console.error('usage: figma-to-optimus.mjs <theme/ts dir> <out .ts>');
    process.exit(1);
  }
  printReport(generatePreset(srcDir, outFile, { source: describeSource(srcDir) }));
}

/** Last commit that touched the export dir, so the header only changes when the tokens do. */
function describeSource(srcDir) {
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%h (%cI)', '--', srcDir], { encoding: 'utf8' }).trim();
    return out ? `${srcDir} @ ${out}` : srcDir;
  } catch {
    return srcDir;
  }
}

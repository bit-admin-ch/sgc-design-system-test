# SGC Optimus Preset

Das SGC-Theme für [Optimus UI](https://github.com/openng-org/optimus-ui), automatisch aus dem
Figma-Designsystem generiert. Das Paket heisst `sgc-optimus-preset` und wird direkt aus diesem
Git-Repository installiert, nicht aus einer npm-Registry.

## Voraussetzungen

- Lesezugriff auf dieses Repository (auch für die CI-Pipeline des UI-Projekts)
- `@openng/optimus-ui-themes` ab Version 2.0.2 im UI-Projekt (Peer-Dependency)

## Installation

```bash
npm install github:bit-admin-ch/sgc-design-system-test#v1
```

`#v1` ist der Git-Tag der gewünschten Version. In der `package.json` des UI-Projekts steht danach:

```json
"dependencies": {
  "sgc-optimus-preset": "github:bit-admin-ch/sgc-design-system-test#v1"
}
```

Falls die Kurzform an der Git-Authentifizierung scheitert, geht dieselbe Installation mit
ausgeschriebener URL:

```bash
# HTTPS
npm install "git+https://github.com/bit-admin-ch/sgc-design-system-test.git#v1"
# SSH
npm install "git+ssh://git@github.com/bit-admin-ch/sgc-design-system-test.git#v1"
```

## Verwendung

```ts
import { SgcPreset } from 'sgc-optimus-preset';
```

`SgcPreset` ist ein fertiges Optimus-Preset und kommt überall dorthin, wo die Theme-Konfiguration
der Anwendung bisher ein Preset wie `Aura` erhält. Komponenten und Tokens, die das Figma-Kit nicht
abdeckt, fallen auf Aura zurück.

Zusätzlich exportiert das Paket `SgcTokens`: die reinen Figma-Tokens ohne Aura-Fallback, zum
Beispiel als Basis für ein eigenes `definePreset(...)`.

## Auf eine neue Version aktualisieren

Die Versionen sind fortlaufend nummeriert: `v1`, `v2`, `v3`, … Alle verfügbaren Versionen stehen
unter [Tags](https://github.com/bit-admin-ch/sgc-design-system-test/tags) oder per:

```bash
git ls-remote --tags https://github.com/bit-admin-ch/sgc-design-system-test.git
```

Zum Aktualisieren die Installation mit dem neuen Tag wiederholen:

```bash
npm install github:bit-admin-ch/sgc-design-system-test#v2
```

Es gibt keine automatischen Updates und keine Versionsbereiche wie `^1.0.0`: Das UI-Projekt bleibt
auf dem eingetragenen Tag, bis er bewusst geändert wird. Jede neue Version kann Farben, Abstände
und andere Tokens ändern, deshalb nach einem Update die Oberfläche prüfen.

## Wie eine Version entsteht

1. Das Figma-Plugin pusht einen Export auf den Branch `feature/updates-from-figma`.
2. Ein Workflow generiert daraus das Preset und öffnet einen Pull Request nach `main`.
3. Nach dem Merge wird die nächste Nummer vergeben und der Commit als `v<N>` getaggt.

Die Dateien unter `optimus/` sind generiert und werden nicht von Hand bearbeitet.

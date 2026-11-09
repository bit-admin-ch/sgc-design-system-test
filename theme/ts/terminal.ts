import type { TerminalDesignTokens } from '@primeuix/themes/types/terminal';

 export default {
    root: {
        background: "{form.field.background}",
        borderColor: "{form.field.border.color}",
        color: "{form.field.color}",
        height: "16rem",
        padding: "{form.field.padding.y} {form.field.padding.x}",
        borderRadius: "{form.field.border.radius}",
        fontWeight: "{typography.font.weight}",
        fontSize: "{typography.font.size}"
    },
    prompt: {
        gap: "0.25rem"
    },
    commandResponse: {
        margin: "2px 0"
    }
} satisfies TerminalDesignTokens;
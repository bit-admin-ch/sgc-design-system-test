import type { PanelDesignTokens } from '@primeuix/themes/types/panel';

 export default {
    root: {
        background: "{content.background}",
        borderColor: "{content.border.color}",
        color: "{content.color}",
        borderRadius: "{content.border.radius}"
    },
    header: {
        background: "#00000000",
        color: "{text.color}",
        padding: "1rem",
        borderColor: "{content.border.color}",
        borderWidth: "0",
        borderRadius: "0"
    },
    toggleableHeader: {
        padding: "0.375rem 1rem"
    },
    title: {
        fontWeight: "600",
        fontSize: "{typography.font.size}"
    },
    content: {
        padding: "0 1rem 1rem"
    },
    footer: {
        padding: "0 1rem 1rem"
    }
} satisfies PanelDesignTokens;
import type { DataViewDesignTokens } from '@primeuix/themes/types/dataview';

 export default {
    root: {
        borderColor: "#00000000",
        borderWidth: "0",
        borderRadius: "0",
        padding: "0"
    },
    header: {
        background: "{content.background}",
        color: "{content.color}",
        borderColor: "{content.border.color}",
        borderWidth: "1px",
        padding: "0.625rem 0.875rem",
        borderRadius: "0"
    },
    content: {
        background: "{content.background}",
        color: "{content.color}",
        borderColor: "#00000000",
        borderWidth: "0",
        padding: "0",
        borderRadius: "0"
    },
    footer: {
        background: "{content.background}",
        color: "{content.color}",
        borderColor: "{content.border.color}",
        borderWidth: "1px",
        padding: "0.625rem 0.875rem",
        borderRadius: "0"
    },
    paginatorTop: {
        borderColor: "{content.border.color}",
        borderWidth: "1px"
    },
    paginatorBottom: {
        borderColor: "{content.border.color}",
        borderWidth: "1px"
    }
} satisfies DataViewDesignTokens;
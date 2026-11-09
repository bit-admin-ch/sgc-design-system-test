import type { ConfirmDialogDesignTokens } from '@primeuix/themes/types/confirmdialog';

 export default {
    icon: {
        size: "1.5rem",
        color: "{overlay.modal.color}"
    },
    content: {
        gap: "0.875rem"
    },
    message: {
        color: "{content.color}",
        fontWeight: "{typography.font.weight}",
        fontSize: "{typography.font.size}"
    }
} satisfies ConfirmDialogDesignTokens;
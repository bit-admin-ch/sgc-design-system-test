import type { LabelDesignTokens } from '@primeuix/themes/types/label';

 export default {
    root: {
        gap: "0.375rem",
        fontSize: "{typography.font.size}",
        fontWeight: "500",
        textColor: "{text.color}",
        disabledOpacity: "{disabled.opacity}"
    }
} satisfies LabelDesignTokens;
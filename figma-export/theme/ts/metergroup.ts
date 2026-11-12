import type { MeterGroupDesignTokens } from '@primeuix/themes/types/metergroup';

 export default {
    root: {
        borderRadius: "{content.border.radius}",
        gap: "0.875rem"
    },
    meters: {
        background: "{content.border.color}",
        size: "0.375rem"
    },
    label: {
        gap: "0.375rem"
    },
    labelMarker: {
        size: "0.375rem"
    },
    labelIcon: {
        size: "0.875rem"
    },
    labelList: {
        verticalGap: "0.375rem",
        horizontalGap: "0.875rem"
    },
    labelText: {
        fontWeight: "{typography.font.weight}",
        fontSize: "{typography.font.size}"
    }
} satisfies MeterGroupDesignTokens;
export default {
    root: {
        fontSize: "0.75rem",
        fontWeight: "700",
        padding: "0.125rem 0.375rem",
        gap: "0.25rem",
        borderRadius: "{content.border.radius}",
        roundedBorderRadius: "{border.radius.xl}"
    },
    icon: {
        size: "0.625rem"
    },
    primary: {
        background: "light-dark({primary.100}, color-mix(in srgb, {primary.500}, transparent 84%))",
        color: "light-dark({primary.700}, {primary.300})"
    },
    secondary: {
        background: "light-dark({surface.100}, {surface.800})",
        color: "light-dark({surface.600}, {surface.300})"
    },
    success: {
        background: "light-dark({green.100}, color-mix(in srgb, {green.500}, transparent 84%))",
        color: "light-dark({green.700}, {green.300})"
    },
    info: {
        background: "light-dark({sky.100}, color-mix(in srgb, {sky.500}, transparent 84%))",
        color: "light-dark({sky.700}, {sky.300})"
    },
    warn: {
        background: "light-dark({orange.100}, color-mix(in srgb, {orange.500}, transparent 84%))",
        color: "light-dark({orange.700}, {orange.300})"
    },
    danger: {
        background: "light-dark({red.100}, color-mix(in srgb, {red.500}, transparent 84%))",
        color: "light-dark({red.700}, {red.300})"
    },
    contrast: {
        background: "light-dark({surface.950}, {surface.0})",
        color: "light-dark({surface.0}, {surface.950})"
    }
}
export default {
    root: {
        background: "light-dark({surface.100}, {surface.800})",
        color: "light-dark({surface.800}, {surface.0})",
        borderRadius: "1rem",
        paddingX: "0.625rem",
        paddingY: "0.375rem",
        gap: "0.375rem",
        transitionDuration: "{transition.duration}",
        focusBackground: "light-dark({surface.200}, {surface.700})"
    },
    image: {
        width: "1.75rem",
        height: "1.75rem"
    },
    icon: {
        color: "light-dark({surface.800}, {surface.0})",
        size: "0.875rem"
    },
    removeIcon: {
        color: "light-dark({surface.800}, {surface.0})",
        size: "0.875rem",
        focusRing: {
            width: "{focus.ring.width}",
            style: "{focus.ring.style}",
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "none"
        }
    },
    label: {
        fontWeight: "{typography.font.weight}",
        fontSize: "0.75rem"
    }
}
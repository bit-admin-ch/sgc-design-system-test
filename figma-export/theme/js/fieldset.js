export default {
    root: {
        background: "{content.background}",
        borderColor: "{content.border.color}",
        borderRadius: "{content.border.radius}",
        color: "{content.color}",
        padding: "0 1rem 1rem",
        transitionDuration: "{transition.duration}"
    },
    legend: {
        background: "{content.background}",
        hoverBackground: "{content.hover.background}",
        color: "{content.color}",
        hoverColor: "{content.hover.color}",
        borderRadius: "{content.border.radius}",
        borderWidth: "1px",
        borderColor: "#00000000",
        padding: "0.375rem 0.625rem",
        gap: "0.5rem",
        fontWeight: "600",
        focusRing: {
            width: "{focus.ring.width}",
            style: "{focus.ring.style}",
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "none"
        },
        fontSize: "{typography.font.size}"
    },
    toggleIcon: {
        color: "{text.muted.color}",
        hoverColor: "{text.hover.muted.color}"
    },
    content: {
        padding: "0"
    }
}
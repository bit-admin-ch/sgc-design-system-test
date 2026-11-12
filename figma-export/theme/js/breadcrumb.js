export default {
    root: {
        padding: "0.875rem",
        background: "{content.background}",
        gap: "0.5rem",
        transitionDuration: "{transition.duration}"
    },
    item: {
        color: "{text.muted.color}",
        hoverColor: "{text.color}",
        borderRadius: "{content.border.radius}",
        gap: "{navigation.item.gap}",
        icon: {
            color: "{navigation.item.icon.color}",
            hoverColor: "{navigation.item.icon.focus.color}",
            size: "{navigation.item.icon.size}"
        },
        focusRing: {
            width: "{focus.ring.width}",
            style: "{focus.ring.style}",
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "none"
        },
        label: {
            fontWeight: "{navigation.item.label.font.weight}",
            fontSize: "{navigation.item.label.font.size}"
        }
    },
    separator: {
        color: "{navigation.item.icon.color}"
    }
}
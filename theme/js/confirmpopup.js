export default {
    root: {
        background: "{overlay.popover.background}",
        borderColor: "{overlay.popover.border.color}",
        color: "{overlay.popover.color}",
        borderRadius: "{overlay.popover.border.radius}",
        shadow: "0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a",
        gutter: "10px",
        arrowOffset: "1.125rem"
    },
    content: {
        padding: "{overlay.popover.padding}",
        gap: "0.5rem"
    },
    icon: {
        size: "1.25rem",
        color: "{overlay.popover.color}"
    },
    footer: {
        gap: "0.375rem",
        padding: "0 {overlay.popover.padding} {overlay.popover.padding}"
    },
    message: {
        color: "{content.color}",
        fontWeight: "{typography.font.weight}",
        fontSize: "{typography.font.size}"
    }
}
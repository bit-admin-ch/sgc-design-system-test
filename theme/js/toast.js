export default {
    root: {
        width: "22rem",
        borderRadius: "{content.border.radius}",
        borderWidth: "1px",
        transitionDuration: "{transition.duration}",
        blur: "light-dark(1.5px, 10px)",
        focusRing: {
            width: "{focus.ring.width}",
            style: "{focus.ring.style}",
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "none"
        }
    },
    icon: {
        size: "1rem",
        margin: "1px 0 0"
    },
    content: {
        padding: "{overlay.popover.padding}",
        gap: "0.5rem"
    },
    text: {
        gap: "0.25rem"
    },
    summary: {
        fontWeight: "500",
        fontSize: "1rem"
    },
    detail: {
        fontWeight: "500",
        fontSize: "0.75rem"
    },
    closeButton: {
        width: "1.5rem",
        height: "1.5rem",
        borderRadius: "0.75rem",
        focusRing: {
            width: "{focus.ring.width}",
            style: "{focus.ring.style}",
            offset: "{focus.ring.offset}"
        }
    },
    closeIcon: {
        size: "0.875rem"
    },
    info: {
        background: "light-dark(color-mix(in srgb, {blue.50}, transparent 5%), color-mix(in srgb, {blue.500}, transparent 84%))",
        borderColor: "light-dark({blue.200}, color-mix(in srgb, {blue.700}, transparent 64%))",
        color: "light-dark({blue.600}, {blue.500})",
        detailColor: "light-dark({surface.700}, {surface.0})",
        shadow: "0 4px 8px 0 #02050a0a",
        closeButton: {
            hoverBackground: "light-dark({blue.100}, #ffffff0d)",
            focusRing: {
                color: "light-dark({blue.600}, {blue.500})",
                shadow: "none"
            }
        }
    },
    success: {
        background: "light-dark(color-mix(in srgb, {green.50}, transparent 5%), color-mix(in srgb, {green.500}, transparent 84%))",
        borderColor: "light-dark({green.200}, color-mix(in srgb, {green.700}, transparent 64%))",
        color: "light-dark({green.600}, {green.500})",
        detailColor: "light-dark({surface.700}, {surface.0})",
        shadow: "0 4px 8px 0 #0108040a",
        closeButton: {
            hoverBackground: "light-dark({green.100}, #ffffff0d)",
            focusRing: {
                color: "light-dark({green.600}, {green.500})",
                shadow: "none"
            }
        }
    },
    warn: {
        background: "light-dark(color-mix(in srgb, {yellow.50}, transparent 5%), color-mix(in srgb, {yellow.500}, transparent 84%))",
        borderColor: "light-dark({yellow.200}, color-mix(in srgb, {yellow.700}, transparent 64%))",
        color: "light-dark({yellow.600}, {yellow.500})",
        detailColor: "light-dark({surface.700}, {surface.0})",
        shadow: "0 4px 8px 0 #0907000a",
        closeButton: {
            hoverBackground: "light-dark({yellow.100}, #ffffff0d)",
            focusRing: {
                color: "light-dark({yellow.600}, {yellow.500})",
                shadow: "none"
            }
        }
    },
    error: {
        background: "light-dark(color-mix(in srgb, {red.50}, transparent 5%), color-mix(in srgb, {red.500}, transparent 84%))",
        borderColor: "light-dark({red.200}, color-mix(in srgb, {red.700}, transparent 64%))",
        color: "light-dark({red.600}, {red.500})",
        detailColor: "light-dark({surface.700}, {surface.0})",
        shadow: "0 4px 8px 0 #0a03030a",
        closeButton: {
            hoverBackground: "light-dark({red.100}, #ffffff0d)",
            focusRing: {
                color: "light-dark({red.600}, {red.500})",
                shadow: "none"
            }
        }
    },
    secondary: {
        background: "light-dark({surface.100}, {surface.800})",
        borderColor: "light-dark({surface.200}, {surface.700})",
        color: "light-dark({surface.600}, {surface.300})",
        detailColor: "light-dark({surface.700}, {surface.0})",
        shadow: "0 4px 8px 0 #0405060a",
        closeButton: {
            hoverBackground: "light-dark({surface.200}, {surface.700})",
            focusRing: {
                color: "light-dark({surface.600}, {surface.300})",
                shadow: "none"
            }
        }
    },
    contrast: {
        background: "light-dark({surface.900}, {surface.0})",
        borderColor: "light-dark({surface.950}, {surface.100})",
        color: "light-dark({surface.50}, {surface.950})",
        detailColor: "light-dark({surface.0}, {surface.950})",
        shadow: "0 4px 8px 0 #0000010a",
        closeButton: {
            hoverBackground: "light-dark({surface.800}, {surface.100})",
            focusRing: {
                color: "light-dark({surface.50}, {surface.950})",
                shadow: "none"
            }
        }
    },
    normal: {
        background: "{content.background}",
        borderColor: "{content.border.color}",
        color: "{text.color}",
        detailColor: "{text.muted.color}",
        shadow: "0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a",
        closeButton: {
            hoverBackground: "{content.hover.background}",
            focusRing: {
                color: "light-dark({blue.600}, {blue.500})",
                shadow: "none"
            }
        }
    }
}
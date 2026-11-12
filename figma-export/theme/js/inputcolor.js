export default {
    root: {
        borderColor: "{content.border.color}"
    },
    area: {
        borderRadius: "{content.border.radius}"
    },
    slider: {
        borderRadius: "{content.border.radius}",
        size: "1rem"
    },
    handle: {
        size: "1rem",
        borderColor: "#ffffffff",
        borderWidth: "3px",
        shadow: "0 1px 0 0 #00000014, 0 1px 1px 0 #00000024",
        transitionDuration: "{transition.duration}",
        focusRing: {
            borderWidth: "2px",
            borderColor: "#ffffffff",
            outlineWidth: "2px",
            outlineColor: "#ffffff4d",
            outlineOffset: "2px"
        }
    },
    transparencyGrid: {
        color: "{surface.100}",
        background: "#ffffffff",
        tileSize: "0.5rem"
    },
    swatch: {
        size: "2.25rem",
        borderRadius: "{content.border.radius}"
    }
}
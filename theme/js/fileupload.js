export default {
    root: {
        background: "{content.background}",
        borderColor: "{content.border.color}",
        color: "{content.color}",
        borderRadius: "{content.border.radius}",
        transitionDuration: "{transition.duration}"
    },
    header: {
        background: "#00000000",
        color: "{text.color}",
        padding: "1rem",
        borderColor: "#00000000",
        borderWidth: "0",
        borderRadius: "0",
        gap: "0.5rem"
    },
    content: {
        highlightBorderColor: "{primary.color}",
        padding: "0 1rem 1rem",
        gap: "0.875rem"
    },
    file: {
        padding: "0.875rem",
        gap: "0.875rem",
        borderColor: "{content.border.color}",
        info: {
            gap: "0.125rem"
        }
    },
    fileList: {
        gap: "0.5rem"
    },
    progressbar: {
        height: "0.25rem"
    },
    basic: {
        gap: "0.5rem"
    },
    fileName: {
        color: "{text.color}",
        fontWeight: "{typography.font.weight}",
        fontSize: "{typography.font.size}"
    },
    fileSize: {
        color: "{text.muted.color}",
        fontWeight: "{typography.font.weight}",
        fontSize: "{typography.font.size}"
    }
}
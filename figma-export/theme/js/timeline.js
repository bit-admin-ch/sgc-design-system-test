export default {
    event: {
        minHeight: "4.5rem"
    },
    horizontal: {
        eventContent: {
            padding: "0.875rem 0"
        }
    },
    vertical: {
        eventContent: {
            padding: "0 0.875rem"
        }
    },
    eventMarker: {
        size: "1rem",
        borderRadius: "8px",
        borderWidth: "2px",
        background: "{content.background}",
        borderColor: "{content.border.color}",
        content: {
            borderRadius: "3px",
            size: "0.375rem",
            background: "{primary.color}",
            insetShadow: "0 1px 0 0 #0000000f, 0 1px 1px 0 #0000001f"
        }
    },
    eventConnector: {
        color: "{content.border.color}",
        size: "2px"
    }
}
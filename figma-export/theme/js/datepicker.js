export default {
    root: {
        transitionDuration: "{form.field.transition.duration}"
    },
    panel: {
        background: "{content.background}",
        borderColor: "{content.border.color}",
        color: "{content.color}",
        borderRadius: "{content.border.radius}",
        shadow: "0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a",
        padding: "{overlay.popover.padding}"
    },
    header: {
        background: "{content.background}",
        borderColor: "{content.border.color}",
        color: "{content.color}",
        padding: "0 0 0.5rem"
    },
    title: {
        gap: "0.5rem",
        fontWeight: "500",
        fontSize: "{typography.font.size}"
    },
    dropdown: {
        background: "light-dark({surface.100}, {surface.800})",
        hoverBackground: "light-dark({surface.200}, {surface.700})",
        activeBackground: "light-dark({surface.300}, {surface.600})",
        color: "light-dark({surface.600}, {surface.300})",
        hoverColor: "light-dark({surface.700}, {surface.200})",
        activeColor: "light-dark({surface.800}, {surface.100})",
        width: "2.25rem",
        sm: {
            width: "1.75rem"
        },
        lg: {
            width: "2.625rem"
        },
        borderColor: "{form.field.border.color}",
        hoverBorderColor: "{form.field.border.color}",
        activeBorderColor: "{form.field.border.color}",
        borderRadius: "{form.field.border.radius}",
        focusRing: {
            width: "{focus.ring.width}",
            style: "{focus.ring.style}",
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "none"
        }
    },
    inputIcon: {
        color: "{form.field.icon.color}"
    },
    selectMonth: {
        hoverBackground: "{content.hover.background}",
        color: "{content.color}",
        hoverColor: "{content.hover.color}",
        padding: "0.25rem 0.5rem",
        borderRadius: "{content.border.radius}",
        fontWeight: "500",
        fontSize: "{typography.font.size}"
    },
    selectYear: {
        hoverBackground: "{content.hover.background}",
        color: "{content.color}",
        hoverColor: "{content.hover.color}",
        padding: "0.25rem 0.5rem",
        borderRadius: "{content.border.radius}",
        fontWeight: "500",
        fontSize: "{typography.font.size}"
    },
    group: {
        borderColor: "{content.border.color}",
        gap: "{overlay.popover.padding}"
    },
    dayView: {
        margin: "0.5rem 0 0"
    },
    weekDay: {
        padding: "0.25rem",
        fontWeight: "500",
        color: "{content.color}",
        fontSize: "{typography.font.size}"
    },
    date: {
        hoverBackground: "{content.hover.background}",
        selectedBackground: "{primary.color}",
        rangeSelectedBackground: "{highlight.background}",
        color: "{content.color}",
        hoverColor: "{content.hover.color}",
        selectedColor: "{primary.contrast.color}",
        rangeSelectedColor: "{highlight.color}",
        width: "1.75rem",
        height: "1.75rem",
        borderRadius: "0.875rem",
        padding: "0.25rem",
        focusRing: {
            width: "{focus.ring.width}",
            style: "{focus.ring.style}",
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "none"
        },
        fontWeight: "{typography.font.weight}",
        fontSize: "{typography.font.size}"
    },
    monthView: {
        margin: "0.5rem 0 0"
    },
    month: {
        padding: "0.25rem",
        borderRadius: "{content.border.radius}"
    },
    yearView: {
        margin: "0.5rem 0 0"
    },
    year: {
        padding: "0.25rem",
        borderRadius: "{content.border.radius}"
    },
    buttonbar: {
        padding: "0.5rem 0 0",
        borderColor: "{content.border.color}"
    },
    timePicker: {
        padding: "0.5rem 0 0",
        borderColor: "{content.border.color}",
        gap: "0.5rem",
        buttonGap: "0.125rem",
        color: "{content.color}",
        fontWeight: "{typography.font.weight}",
        fontSize: "{typography.font.size}"
    },
    today: {
        background: "light-dark({surface.200}, {surface.700})",
        color: "light-dark({surface.900}, {surface.0})"
    }
}
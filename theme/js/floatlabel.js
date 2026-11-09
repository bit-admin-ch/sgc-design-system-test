export default {
    root: {
        color: "{form.field.float.label.color}",
        focusColor: "{form.field.float.label.focus.color}",
        activeColor: "{form.field.float.label.active.color}",
        invalidColor: "{form.field.float.label.invalid.color}",
        transitionDuration: "{form.field.transition.duration}",
        positionX: "{form.field.padding.x}",
        positionY: "{form.field.padding.y}",
        fontWeight: "500",
        active: {
            fontSize: "0.625rem",
            fontWeight: "400"
        },
        fontSize: "{form.field.font.size}"
    },
    over: {
        active: {
            top: "-1.125rem"
        }
    },
    in: {
        input: {
            paddingTop: "1.125rem",
            paddingBottom: "{form.field.padding.y}"
        },
        active: {
            top: "{form.field.padding.y}"
        }
    },
    on: {
        borderRadius: "{border.radius.xs}",
        active: {
            background: "{form.field.background}",
            padding: "0 0.125rem"
        }
    }
}
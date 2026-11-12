import type { ListboxDesignTokens } from '@primeuix/themes/types/listbox';

 export default {
    root: {
        background: "{form.field.background}",
        disabledBackground: "{form.field.disabled.background}",
        borderColor: "{form.field.border.color}",
        invalidBorderColor: "{form.field.invalid.border.color}",
        color: "{form.field.color}",
        disabledColor: "{form.field.disabled.color}",
        shadow: "0 1px 2px 0 #1212170d",
        borderRadius: "{form.field.border.radius}",
        transitionDuration: "{form.field.transition.duration}"
    },
    list: {
        padding: "{list.padding}",
        gap: "{list.gap}",
        header: {
            padding: "{list.header.padding}"
        }
    },
    option: {
        focusBackground: "{list.option.focus.background}",
        selectedBackground: "{list.option.selected.background}",
        selectedFocusBackground: "{list.option.selected.focus.background}",
        stripedBackground: "light-dark({surface.50}, {surface.900})",
        color: "{list.option.color}",
        focusColor: "{list.option.focus.color}",
        selectedColor: "{list.option.selected.color}",
        selectedFocusColor: "{list.option.selected.focus.color}",
        padding: "{list.option.padding}",
        borderRadius: "{list.option.border.radius}",
        fontWeight: "{list.option.font.weight}",
        fontSize: "{list.option.font.size}",
        selectedFontWeight: "{list.option.selected.font.weight}"
    },
    optionGroup: {
        background: "{list.option.group.background}",
        color: "{list.option.group.color}",
        fontWeight: "{list.option.group.font.weight}",
        padding: "{list.option.group.padding}",
        fontSize: "{list.option.group.font.size}"
    },
    checkmark: {
        color: "{list.option.color}",
        gutterStart: "-0.25rem",
        gutterEnd: "0.25rem"
    },
    emptyMessage: {
        padding: "{list.option.padding}"
    }
} satisfies ListboxDesignTokens;
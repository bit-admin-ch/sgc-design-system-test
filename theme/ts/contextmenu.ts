import type { ContextMenuDesignTokens } from '@primeuix/themes/types/contextmenu';

 export default {
    root: {
        background: "{content.background}",
        borderColor: "{content.border.color}",
        color: "{content.color}",
        borderRadius: "{content.border.radius}",
        shadow: "0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a",
        transitionDuration: "{transition.duration}"
    },
    list: {
        padding: "{navigation.list.padding}",
        gap: "{navigation.list.gap}"
    },
    item: {
        focusBackground: "{navigation.item.focus.background}",
        activeBackground: "{navigation.item.active.background}",
        color: "{navigation.item.color}",
        focusColor: "{navigation.item.focus.color}",
        activeColor: "{navigation.item.active.color}",
        padding: "{navigation.item.padding}",
        borderRadius: "{navigation.item.border.radius}",
        gap: "{navigation.item.gap}",
        icon: {
            color: "{navigation.item.icon.color}",
            focusColor: "{navigation.item.icon.focus.color}",
            activeColor: "{navigation.item.icon.active.color}",
            size: "{navigation.item.icon.size}"
        },
        label: {
            fontWeight: "{navigation.item.label.font.weight}",
            fontSize: "{navigation.item.label.font.size}"
        }
    },
    submenu: {
        mobileIndent: "1rem"
    },
    submenuIcon: {
        size: "{navigation.submenu.icon.size}",
        color: "{navigation.submenu.icon.color}",
        focusColor: "{navigation.submenu.icon.focus.color}",
        activeColor: "{navigation.submenu.icon.active.color}"
    },
    separator: {
        borderColor: "{content.border.color}"
    },
    submenuLabel: {
        padding: "{navigation.submenu.label.padding}",
        fontWeight: "{navigation.submenu.label.font.weight}",
        fontSize: "{navigation.submenu.label.font.size}",
        background: "{navigation.submenu.label.background}",
        color: "{navigation.submenu.label.color}"
    }
} satisfies ContextMenuDesignTokens;
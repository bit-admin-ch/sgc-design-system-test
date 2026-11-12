import type { SidebarDesignTokens } from '@primeuix/themes/types/sidebar';

 export default {
    root: {
        borderColor: "{content.border.color}",
        focusRing: {
            width: "{focus.ring.width}",
            style: "{focus.ring.style}",
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "none"
        }
    },
    layout: {
        background: "light-dark({surface.50}, {surface.900})"
    },
    header: {
        padding: "0.5rem",
        gap: "0.5rem"
    },
    footer: {
        padding: "0.5rem",
        gap: "0.5rem"
    },
    content: {
        gap: "0.125rem"
    },
    aside: {
        padding: "0.5rem"
    },
    panel: {
        background: "{content.background}",
        color: "{content.color}",
        floatingBorderRadius: "{content.border.radius}",
        floatingShadow: "0 1px 2px 0 #0000000d"
    },
    group: {
        padding: "0.5rem"
    },
    groupLabel: {
        padding: "0 0.5rem",
        height: "2rem",
        borderRadius: "{content.border.radius}",
        fontSize: "0.75rem",
        fontWeight: "500",
        color: "{text.muted.color}"
    },
    groupAction: {
        top: "0.875rem",
        right: "0.75rem",
        size: "1.25rem",
        borderRadius: "{content.border.radius}",
        color: "{navigation.item.icon.color}",
        focusColor: "{navigation.item.icon.focus.color}",
        focusBackground: "{navigation.item.focus.background}",
        icon: {
            size: "{navigation.item.icon.size}"
        }
    },
    menu: {
        gap: "{navigation.list.gap}"
    },
    menuButton: {
        padding: "0.25rem 0.625rem",
        gap: "{navigation.item.gap}",
        height: "2rem",
        borderRadius: "{navigation.item.border.radius}",
        fontSize: "{navigation.item.label.font.size}",
        fontWeight: "{navigation.item.label.font.weight}",
        color: "{navigation.item.color}",
        focusBackground: "{navigation.item.focus.background}",
        focusColor: "{navigation.item.focus.color}",
        activeBackground: "{navigation.item.active.background}",
        activeColor: "{navigation.item.active.color}",
        iconOnlyWidth: "2rem",
        withActionPaddingEnd: "2rem",
        icon: {
            color: "{navigation.item.icon.color}",
            focusColor: "{navigation.item.icon.focus.color}",
            size: "{navigation.item.icon.size}"
        }
    },
    menuAction: {
        top: "0.375rem",
        right: "0.25rem",
        width: "1.25rem",
        borderRadius: "{content.border.radius}",
        color: "{navigation.item.icon.color}",
        focusColor: "{navigation.item.icon.color}",
        focusBackground: "{navigation.item.focus.background}",
        icon: {
            size: "{navigation.item.icon.size}"
        }
    },
    menuBadge: {
        top: "0.375rem",
        right: "0.25rem",
        height: "1.25rem",
        minWidth: "1.25rem",
        borderRadius: "0.375rem",
        padding: "0 0.25rem",
        fontSize: "0.75rem",
        fontWeight: "500",
        background: "{content.hover.background}",
        borderColor: "{content.border.color}",
        color: "{text.muted.color}"
    },
    menuSub: {
        paddingBlock: "0.125rem",
        gap: "0.125rem",
        indentMargin: "0.875rem",
        indentPadding: "0.625rem",
        collapsibleIndent: "1.5rem",
        collapsibleTopMargin: "0.125rem",
        collapsibleBorderRadius: "0.375rem"
    },
    menuSubButton: {
        padding: "{navigation.item.padding}",
        gap: "{navigation.item.gap}",
        height: "2rem",
        borderRadius: "{navigation.item.border.radius}",
        fontSize: "{navigation.item.label.font.size}",
        fontWeight: "{navigation.item.label.font.weight}",
        color: "{navigation.item.color}",
        focusBackground: "{navigation.item.focus.background}",
        focusColor: "{navigation.item.focus.color}",
        activeBackground: "{navigation.item.active.background}",
        activeColor: "{navigation.item.active.color}",
        icon: {
            color: "{navigation.item.icon.color}",
            focusColor: "{navigation.item.icon.focus.color}",
            size: "{navigation.item.icon.size}"
        }
    },
    main: {
        background: "light-dark({surface.50}, {surface.900})",
        floatingBackground: "light-dark({surface.50}, {surface.900})",
        insetBackground: "light-dark({surface.0}, {surface.950})",
        margin: "0.5rem",
        borderRadius: "{content.border.radius}",
        shadow: "0 1px 2px 0 #0000000d"
    }
} satisfies SidebarDesignTokens;
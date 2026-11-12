import type { NavigationMenuDesignTokens } from '@primeuix/themes/types/navigationmenu';

 export default {
    root: {
        padding: "0.375rem 0.625rem",
        gap: "0.25rem"
    },
    baseItem: {
        padding: "{navigation.item.padding}",
        borderRadius: "{content.border.radius}",
        gap: "{navigation.item.gap}",
        fontSize: "{navigation.item.label.font.size}",
        fontWeight: "500",
        color: "{navigation.item.color}",
        focusColor: "{navigation.item.focus.color}",
        focusBackground: "{navigation.item.focus.background}",
        activeColor: "{navigation.item.active.color}",
        activeBackground: "{navigation.item.active.background}",
        transitionDuration: "{navigation.item.transition.duration}"
    }
} satisfies NavigationMenuDesignTokens;
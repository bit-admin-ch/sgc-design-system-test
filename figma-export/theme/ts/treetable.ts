import type { TreeTableDesignTokens } from '@primeuix/themes/types/treetable';

 export default {
    root: {
        borderColor: "light-dark({content.border.color}, {surface.800})",
        transitionDuration: "{transition.duration}"
    },
    header: {
        background: "{content.background}",
        borderColor: "{treetable.border.color}",
        color: "{content.color}",
        borderWidth: "1px",
        padding: "0.5rem 0.875rem"
    },
    headerCell: {
        background: "{content.background}",
        hoverBackground: "{content.hover.background}",
        selectedBackground: "{highlight.background}",
        borderColor: "{treetable.border.color}",
        color: "{content.color}",
        hoverColor: "{content.hover.color}",
        selectedColor: "{highlight.color}",
        gap: "0.5rem",
        padding: "0.5rem 0.875rem",
        focusRing: {
            width: "{focus.ring.width}",
            style: "{focus.ring.style}",
            color: "{focus.ring.color}",
            offset: "-1px",
            shadow: "none"
        }
    },
    columnTitle: {
        fontWeight: "600",
        fontSize: "{typography.font.size}"
    },
    row: {
        background: "{content.background}",
        hoverBackground: "{content.hover.background}",
        selectedBackground: "{highlight.background}",
        color: "{content.color}",
        hoverColor: "{content.hover.color}",
        selectedColor: "{highlight.color}",
        focusRing: {
            width: "{focus.ring.width}",
            style: "{focus.ring.style}",
            color: "{focus.ring.color}",
            offset: "-1px",
            shadow: "none"
        }
    },
    bodyCell: {
        borderColor: "{treetable.border.color}",
        selectedBorderColor: "light-dark({primary.100}, {primary.900})",
        padding: "0.5rem 0.875rem",
        gap: "0.5rem",
        fontWeight: "{typography.font.weight}",
        fontSize: "{typography.font.size}"
    },
    footerCell: {
        background: "{content.background}",
        borderColor: "{treetable.border.color}",
        color: "{content.color}",
        padding: "0.5rem 0.875rem"
    },
    columnFooter: {
        fontWeight: "600",
        fontSize: "{typography.font.size}"
    },
    footer: {
        background: "{content.background}",
        borderColor: "{treetable.border.color}",
        color: "{content.color}",
        borderWidth: "1px",
        padding: "0.5rem 0.875rem"
    },
    columnResizer: {
        width: "0.5rem"
    },
    resizeIndicator: {
        width: "1px",
        color: "{primary.color}"
    },
    sortIcon: {
        color: "{text.muted.color}",
        hoverColor: "{text.hover.muted.color}",
        size: "0.75rem"
    },
    loadingIcon: {
        size: "1.75rem"
    },
    nodeToggleButton: {
        hoverBackground: "{content.hover.background}",
        selectedHoverBackground: "{content.background}",
        color: "{text.muted.color}",
        hoverColor: "{text.color}",
        selectedHoverColor: "{primary.color}",
        size: "1.5rem",
        borderRadius: "0.75rem",
        focusRing: {
            width: "{focus.ring.width}",
            style: "{focus.ring.style}",
            color: "{focus.ring.color}",
            offset: "{focus.ring.offset}",
            shadow: "none"
        }
    },
    paginatorTop: {
        borderColor: "{content.border.color}",
        borderWidth: "1px"
    },
    paginatorBottom: {
        borderColor: "{content.border.color}",
        borderWidth: "1px"
    }
} satisfies TreeTableDesignTokens;
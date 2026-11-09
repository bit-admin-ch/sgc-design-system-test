import type { MessageDesignTokens } from '@primeuix/themes/types/message';

 export default {
    root: {
        borderRadius: "{content.border.radius}",
        borderWidth: "1px",
        transitionDuration: "{transition.duration}"
    },
    content: {
        padding: "0.375rem 0.625rem",
        gap: "0.5rem",
        sm: {
            padding: "0.25rem 0.5rem"
        },
        lg: {
            padding: "0.5rem 0.75rem"
        }
    },
    text: {
        fontSize: "1rem",
        fontWeight: "500",
        sm: {
            fontSize: "0.75rem"
        },
        lg: {
            fontSize: "1rem"
        }
    },
    icon: {
        size: "1rem",
        sm: {
            size: "0.875rem"
        },
        lg: {
            size: "1.125rem"
        }
    },
    closeButton: {
        width: "1.5rem",
        height: "1.5rem",
        borderRadius: "0.75rem",
        focusRing: {
            width: "{focus.ring.width}",
            style: "{focus.ring.style}",
            offset: "{focus.ring.offset}"
        }
    },
    closeIcon: {
        size: "0.875rem",
        sm: {
            size: "0.75rem"
        },
        lg: {
            size: "1rem"
        }
    },
    outlined: {
        root: {
            borderWidth: "1px"
        }
    },
    simple: {
        content: {
            padding: "0"
        }
    },
    info: {
        background: "light-dark(color-mix(in srgb, {blue.50}, transparent 5%), color-mix(in srgb, {blue.500}, transparent 84%))",
        borderColor: "light-dark({blue.200}, color-mix(in srgb, {blue.700}, transparent 64%))",
        color: "light-dark({blue.600}, {blue.500})",
        shadow: "0 4px 8px 0 #02050a0a",
        closeButton: {
            hoverBackground: "light-dark({blue.100}, #ffffff0d)",
            focusRing: {
                color: "light-dark({blue.600}, {blue.500})",
                shadow: "none"
            }
        },
        outlined: {
            color: "light-dark({blue.600}, {blue.500})",
            borderColor: "light-dark({blue.600}, {blue.500})"
        },
        simple: {
            color: "light-dark({blue.600}, {blue.500})"
        }
    },
    success: {
        background: "light-dark(color-mix(in srgb, {green.50}, transparent 5%), color-mix(in srgb, {green.500}, transparent 84%))",
        borderColor: "light-dark({green.200}, color-mix(in srgb, {green.700}, transparent 64%))",
        color: "light-dark({green.600}, {green.500})",
        shadow: "0 4px 8px 0 #0108040a",
        closeButton: {
            hoverBackground: "light-dark({green.100}, #ffffff0d)",
            focusRing: {
                color: "light-dark({green.600}, {green.500})",
                shadow: "none"
            }
        },
        outlined: {
            color: "light-dark({green.600}, {green.500})",
            borderColor: "light-dark({green.600}, {green.500})"
        },
        simple: {
            color: "light-dark({green.600}, {green.500})"
        }
    },
    warn: {
        background: "light-dark(color-mix(in srgb, {yellow.50}, transparent 5%), color-mix(in srgb, {yellow.500}, transparent 84%))",
        borderColor: "light-dark({yellow.200}, color-mix(in srgb, {yellow.700}, transparent 64%))",
        color: "light-dark({yellow.600}, {yellow.500})",
        shadow: "0 4px 8px 0 #0907000a",
        closeButton: {
            hoverBackground: "light-dark({yellow.100}, #ffffff0d)",
            focusRing: {
                color: "light-dark({yellow.600}, {yellow.500})",
                shadow: "none"
            }
        },
        outlined: {
            color: "light-dark({yellow.600}, {yellow.500})",
            borderColor: "light-dark({yellow.600}, {yellow.500})"
        },
        simple: {
            color: "light-dark({yellow.600}, {yellow.500})"
        }
    },
    error: {
        background: "light-dark(color-mix(in srgb, {red.50}, transparent 5%), color-mix(in srgb, {red.500}, transparent 84%))",
        borderColor: "light-dark({red.200}, color-mix(in srgb, {red.700}, transparent 64%))",
        color: "light-dark({red.600}, {red.500})",
        shadow: "0 4px 8px 0 #0a03030a",
        closeButton: {
            hoverBackground: "light-dark({red.100}, #ffffff0d)",
            focusRing: {
                color: "light-dark({red.600}, {red.500})",
                shadow: "none"
            }
        },
        outlined: {
            color: "light-dark({red.600}, {red.500})",
            borderColor: "light-dark({red.600}, {red.500})"
        },
        simple: {
            color: "light-dark({red.600}, {red.500})"
        }
    },
    secondary: {
        background: "light-dark({surface.100}, {surface.800})",
        borderColor: "light-dark({surface.200}, {surface.700})",
        color: "light-dark({surface.600}, {surface.300})",
        shadow: "0 4px 8px 0 #0405060a",
        closeButton: {
            hoverBackground: "light-dark({surface.200}, {surface.700})",
            focusRing: {
                color: "light-dark({surface.600}, {surface.300})",
                shadow: "none"
            }
        },
        outlined: {
            color: "light-dark({surface.500}, {surface.400})",
            borderColor: "light-dark({surface.500}, {surface.400})"
        },
        simple: {
            color: "light-dark({surface.500}, {surface.400})"
        }
    },
    contrast: {
        background: "light-dark({surface.900}, {surface.0})",
        borderColor: "light-dark({surface.950}, {surface.100})",
        color: "light-dark({surface.50}, {surface.950})",
        shadow: "0 4px 8px 0 #0000010a",
        closeButton: {
            hoverBackground: "light-dark({surface.800}, {surface.100})",
            focusRing: {
                color: "light-dark({surface.50}, {surface.950})",
                shadow: "none"
            }
        },
        outlined: {
            color: "light-dark({surface.950}, {surface.0})",
            borderColor: "light-dark({surface.950}, {surface.0})"
        },
        simple: {
            color: "light-dark({surface.950}, {surface.0})"
        }
    }
} satisfies MessageDesignTokens;
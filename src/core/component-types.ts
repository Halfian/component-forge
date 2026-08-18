export type ComponentTypeDefinition = {
    defaultProps: Record<string, any>;
    defaultStyles: Record<string, string | number>;
};

export type ComponentTypesMap = {
    [key: string] : ComponentTypeDefinition;
}

export const componentTypes: ComponentTypesMap = {
    button: {
        defaultProps: { text: "Button" },
        defaultStyles: {
            padding: "8px 12px",
            backgroundColor: "var(--app-card)",
            borderRadius: "6px",
            display: "inline-block",
            color: "var(--app-fg)",
            border: "1px solid var(--app-line)",
        }
    },

    text: {
        defaultProps: { text: "Text" },
        defaultStyles: {
            fontSize: "16px",
            fontWeight: "500",
            padding: "4px 6px",
            display: "inline-block",
            color: "var(--app-fg)",
            backgroundColor: "var(--app-card)",
            border: "1px solid var(--app-line)",
            borderRadius: "4px",
        }
    },

    input: {
        defaultProps: { placeholder: "Enter text" },
        defaultStyles: {
            padding: "6px 8px",
            border: "1px solid var(--app-line)",
            backgroundColor: "var(--app-card)",
            display: "inline-block",
            color: "var(--app-fg)",
        }
    },

    image: {
        defaultProps: { src: "", alt: "" },
        defaultStyles: {
            width: "200px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "6px",
            backgroundColor: "var(--app-card)",
            border: "1px solid var(--app-line)",
        }
    },

    card: {
        defaultProps: { 
            title: "Card Title", 
            description: "This is a sample card description.", 
            imageSrc: ""
        },
        defaultStyles: {
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            padding: "12px",
            width: "300px",
            backgroundColor: "var(--app-card)",
            borderRadius: "8px",
            border: "1px solid var(--app-line)",
            boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
            color: "var(--app-fg)",
        }
    },

    container: {
        defaultProps: {},
        defaultStyles: {
            display: "flex",
            flexDirection: "row",
            gap: "8px",
            padding: "8px",
            backgroundColor: "var(--app-card)",
            borderRadius: "6px",
            border: "1px solid var(--app-line)",
            width: "200px",
            height: "150px",
            color: "var(--app-fg)",
        }
    }
};
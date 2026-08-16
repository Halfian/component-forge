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
            backgroundColor: "#3b3b3b",
            borderRadius: "6px",
            display: "inline-block",
        }
    },

    text: {
        defaultProps: { text: "Text" },
        defaultStyles: {
            fontSize: "14px",
            display: "inline-block",
        }
    },

    input: {
        defaultProps: { placeholder: "Enter text" },
        defaultStyles: {
            padding: "6px 8px",
            border: "1px solid #555",
            backgroundColor: "#1a1a1a",
            display: "inline-block",
        }
    },

    image: {
        defaultProps: { src: "", alt: "" },
        defaultStyles: {
            width: "200px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "6px",
            backgroundColor: "#333333",
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
            backgroundColor: "#222222",
            borderRadius: "8px",
            border: "1px solid #444",
            boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        }
    },

    container: {
        defaultProps: {},
        defaultStyles: {
            display: "flex",
            flexDirection: "row",
            gap: "8px",
            padding: "8px",
            backgroundColor: "#222222",
            borderRadius: "6px",
            border: "1px solid #444",
            width: "200px",
            height: "150px",
        }
    }
};
export type StyleGroup = Record<string, string | number>;

export type DefaultStylesMap = {
    spacing: StyleGroup;
    appearance: StyleGroup;
    border: StyleGroup;
    layout: StyleGroup;
};

export const defaultStyles: DefaultStylesMap =  {
    spacing: {
        marginTop: "",
        marginRight: "",
        marginBottom: "",
        marginLeft: "",
        paddingTop: "",
        paddingRight: "",
        paddingBottom: "",
        paddingLeft: "",
    },
    appearance: {
        backgroundColor: "",
        color: "",
    },
    border: {
        borderWidth: "",
        borderStyle: "",
        borderColor: "",
        borderRadius: "",
    },
    layout: {
        width: "",
        height: "",
        display: "",
        flexDirection: "",
        justifyContent: "",
        alignItems: "",
        gap: "",
    }
}
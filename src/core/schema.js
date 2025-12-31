export function createNode(type, initialProps = {}) {
    return {
        id: crypto.randomUUID(),
        type,
        props: initialProps,
        styles: {},
        children: [],
    };
}
import type { Node } from "../store/canvasStore.js";

export function createNode(type: string, initialProps: Record<string, any> = {}): Node {
    return {
        id: crypto.randomUUID(),
        type,
        props: initialProps,
        styles: {},
        children: [],
    };
}
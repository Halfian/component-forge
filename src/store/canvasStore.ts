import { create } from 'zustand';

export type Node = {
    id: string;
    type: string;
    props?: Record<string, any>;
    styles?: Record<string, string | number>;
    children?: Node[];
}

export type PresentState = {
    tree: Node[];
    selectedId: string | null;
}

export interface CanvasStore {
    past: PresentState[];
    present: PresentState;
    future: PresentState[];

    saveHistory: (newPresent: PresentState) => void;
    addNode: (node: Node) => void;
    addChild: (parentId: string, childNode: Node) => void;
    updateNode: (id: string, updates: Partial<Node>) => void;
    selectNode: (id: string) => void;
    undo: () => void;
    redo: () => void;
}

export const useCanvasStore = create<CanvasStore>((set, get) => ({
    past: [],
    present: {
        tree: [],
        selectedId: null,
    },
    future: [],

    saveHistory(newPresent) {
        const { past, present } = get();
        set({
            past: [...past, present],
            present: newPresent,
            future: [],
        });
    },
    
    addNode(node){
        const { present, saveHistory } = get();
        const newPresent = {
            ...present,
            tree: [...present.tree, node],
        };
        saveHistory(newPresent);
    },

    addChild(parentId, childNode) {
        const { present, saveHistory } = get();
        const newTree = present.tree.map((n) =>
            n.id === parentId
                ? { ...n, children: [...(n.children || []), childNode]}
            : n 
        );

        saveHistory({
            ...present,
            tree: newTree,
        });
    },

    updateNode(id, updates) {
        const { present, saveHistory } = get();
        const newTree = updateNodeRecursive(present.tree, id, updates);

        saveHistory({
            ...present,
            tree: newTree,
        });
    },

    selectNode(id) {
        set(state => ({
            present: {
                ...state.present,
                selectedId: id,
            }
        }))
    },

    undo() {
        set((state) => {
            if (state.past.length === 0) return state;

            const previous = state.past[state.past.length - 1];
            const newPast = state.past.slice(0, state.past.length - 1);

            return {
            past: newPast,
            present: previous,
            future: [state.present, ...state.future],
            } as Partial<CanvasStore>;
        });
    },

    redo() {
        set((state) => {
            if (state.future.length === 0) return state;

            const next = state.future[0];
            const newFuture = state.future.slice(1);

            return {
            past: [...state.past, state.present],
            present: next,  
            future: newFuture,
            } as Partial<CanvasStore>;
        });
    }
}));

function updateNodeRecursive(tree: Node[], id: string, updates: Partial<Node>): Node[] {
    return tree.map(node => {
        if (node.id === id) {
            return { ...node, ...updates };
        }

        if (node.children) {
            return {
                ...node,
                children: updateNodeRecursive(node.children, id, updates)
            };
        }
        return node;
    })
}
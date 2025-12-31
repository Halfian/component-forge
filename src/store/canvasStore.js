import { create } from 'zustand';

export const useCanvasStore = create((set, get) => ({
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
        const { past, present, future } = get();
        if (past.length === 0) return;

        const previous = past[past.length - 1];
        const newPast = past.slice(0, past.length -1);

        set({
            past: newPast,
            present: previous,
            future: [present, ...future],
        });
    },

    redo() {
        const { past, present, future } = get();
        if (future.length === 0) return;

        const next = future[0];
        const newFuture = future.slice(1);

        set({
            past: [...past, present],
            present: next,
            future: newFuture,
        });
    }
}));

function updateNodeRecursive(tree, id, updates) {
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
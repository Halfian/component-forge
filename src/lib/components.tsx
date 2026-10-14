export type ComponentLibraryItem = {
    id: string;
    label: string,
    preview: React.ReactNode;
}

export const componentLibrary: ComponentLibraryItem[] = [
    {
        id: "button",
        label: "Button",
        preview: <button className="px-3 py-1 bg-(--app-card) border border-(--app-line) rounded text-(--app-fg)">Button</button>,
    },
    {
        id: "text",
        label: "Text",
        preview: <span className="text-sm text-(--app-fg)">Text</span>,
    },
    {
        id: "input",
        label: "Input",
        preview: <input className="px-2 py-1 bg-(--app-card) border border-(--app-line) rounded text-(--app-fg)"></input>,
    },
    {
        id: "image",
        label: "Image",
        preview: <img src="https://placehold.co/100x75?text=Image" alt="preview" className="rounded border border-(--app-line) bg-(--app-card)" />,
    },
    {
        id: "card",
        label: "Card",
        preview: (
            <div className="w-30 p-2 bg-(--app-card) border border-(--app-line) rounded shadow text-(--app-fg)">
                <img 
                    src="https://placehold.co/100x60?text=Card" 
                    alt="card preview"
                    className="rounded mb-2" 
                />
                <span className="text-xs font-semibold block">Card Title</span>
                <span className="text-[10px] opacity-70">Description</span>
            </div>
        ),
    },
    {
        id: "container",
        label: "Container",
        preview: (
            <div className="px-3 py-2 bg-(--app-card) border border-(--app-line) rounded text-xs text-(--app-fg)">
                Container
            </div>
        ),
    },
];
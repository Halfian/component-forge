import { useState } from "react";
import { componentLibrary } from "../lib/components.js";
import type { ComponentLibraryItem } from "../lib/components.js";

export interface SidebarProps {
    onDragStart: (e: React.PointerEvent<HTMLDivElement>, item: ComponentLibraryItem) => void;
}

export default function Sidebar({ onDragStart }: SidebarProps) {
    const [query, setQuery] = useState<string>("");

    const filtered = componentLibrary.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()))

    return (
        <aside className="border-r border-(--app-line) p-4 overflow-y-auto bg-(--app-card) text-(--app-fg)">
            <input 
                type="text"
                placeholder="Search components..."
                className="w-full mb-3 px-2 py-1 bg-(--app-card) border border-(--app-line) rounded text-sm text-(--app-fg)"
                value={query}
                onChange={(e) => setQuery(e.target.value)} />

            <div className="flex flex-col gap-2">
                {filtered.map((item) => (
                    <div
                        key={item.id}
                        className="p-2 bg-(--app-card) border border-(--app-line) rounded cursor-grab hover:bg-(--app-line) transition"
                        onPointerDown={(e) => onDragStart(e, item)}
                        >
                        <div className="text-xs opacity-70 mb-1">{item.label}</div>
                        <div className="text-sm">{item.preview}</div>
                    </div>
                ))}
            </div>
        </aside>
    )
};
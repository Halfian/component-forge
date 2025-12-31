import { useState } from "react";
import { componentLibrary } from "../lib/components.jsx";

export default function Sidebar({ onDragStart }) {
    const [query, setQuery] = useState("");

    const filtered = componentLibrary.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()))

    return (
        <aside className="border-r border-neutral-800 p-4 overflow-y-auto">
            <input 
                type="text"
                placeholder="Search components..."
                className="w-full mb-3 px-2 py-1 bg-neutral-800 border border-neutral-700 rounded text-sm"
                value={query}
                onChange={(e) => setQuery(e.target.value)} />

            <div className="flex flex-col gap-2">
                {filtered.map((item) => (
                    <div
                        key={item.id}
                        className="p-2 bg-neutral-800/40 border border-neutral-700 rounded cursor-grab hover:bg-neutral-700/40 transition"
                        onPointerDown={(e) => onDragStart(e, item)}
                        >
                        <div className="text-xs opacity-80/40 mb-1">{item.label}</div>
                        <div className="text-sm">{item.preview}</div>
                    </div>
                ))}
            </div>
        </aside>
    )
};
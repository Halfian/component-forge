import { useState } from "react";

export type SectionProps = {
    title: string;
    children: React.ReactNode;
};

export default function Section({ title, children }: SectionProps) {
    const [ open, setOpen ] = useState(true);

    return (
        <section className="mb-4 border border-neutral-800 rounded overflow-hidden">
            <button
                aria-expanded={open}
                className="w-full flex justify-between items-center bg-neutral-900 px-3 py-2 text-sm font-medium border-b border-neutral-800 sticky top-0 z-10"
                onClick={() => setOpen(!open)}
            >
                <span>{title}</span>
                <span className="opacity-60">{open ? "-" : "+"}</span>
            </button>
            <div className="h-px bg-neutral-800" />
            {open && (<div className="p-3 space-y-3">{children}</div>)}  
        </section>
    );
};
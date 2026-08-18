import { useState } from "react";

export type SectionProps = {
    title: string;
    children: React.ReactNode;
};

export default function Section({ title, children }: SectionProps) {
    const [ open, setOpen ] = useState(true);

    return (
        <section className="mb-4 border border-[var(--app-line)] rounded overflow-hidden bg-[var(--app-card)] text-[var(--app-fg)]">
            <button
                aria-expanded={open}
                className="w-full flex justify-between items-center bg-[var(--app-card)] px-3 py-2 text-sm font-medium border-b border-[var(--app-line)] sticky top-0 z-10"
                onClick={() => setOpen(!open)}
            >
                <span>{title}</span>
                <span className="opacity-60 cursor-pointer">{open ? "-" : "+"}</span>
            </button>
            <div className="h-px bg-[var(--app-line)]" />
            {open && (<div className="p-3 space-y-3">{children}</div>)}  
        </section>
    );
};
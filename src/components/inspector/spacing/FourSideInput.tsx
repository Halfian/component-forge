export type FourSideInputProps = {
    label: string;
    styles: Record<string, string | number>;
    onChange: (prop: string, value: string | number) => void;
};

export default function FourSideInput({ label, styles, onChange }: FourSideInputProps) {
    return (
        <div className="mb-3">
            <div className="text-xs opacity-70 mb-1 text-[var(--app-fg)]">{label}</div>
            <div className="grid grid-cols-3 gap-1 text-xs text-[var(--app-fg)]">
                <input 
                    placeholder="Top"
                    className="px-2 py-1 bg-[var(--app-card)] border border-[var(--app-line)] rounded text-[var(--app-fg)] col-span-3 hover:bg-[var(--app-line)] transition"
                    value={styles.top || ""}
                    onChange={(e) => onChange("top", e.target.value)}
                    onBlur={(e) => onChange("top", normalizePx(e.target.value))}
                />
                <input 
                    placeholder="Left"
                    className="px-2 py-1 bg-[var(--app-card)] border border-[var(--app-line)] rounded text-[var(--app-fg)] hover:bg-[var(--app-line)] transition"
                    value={styles.left || ""}
                    onChange={(e) => onChange("left", e.target.value)}
                    onBlur={(e) => onChange("left", normalizePx(e.target.value))}
                />
                <input 
                    placeholder="Right"
                    className="px-2 py-1 bg-[var(--app-card)] border border-[var(--app-line)] rounded text-[var(--app-fg)] hover:bg-[var(--app-line)] transition"
                    value={styles.right || ""}
                    onChange={(e) => onChange("right", e.target.value)}
                    onBlur={(e) => onChange("right", normalizePx(e.target.value))}
                />
                <input 
                    placeholder="Bottom"
                    className="px-2 py-1 bg-[var(--app-card)] border border-[var(--app-line)] rounded text-[var(--app-fg)] col-span-3 hover:bg-[var(--app-line)] transition"
                    value={styles.bottom || ""}
                    onChange={(e) => onChange("bottom", e.target.value)}
                    onBlur={(e) => onChange("bottom", normalizePx(e.target.value))}
                />
            </div>
        </div>
    );
};

function normalizePx(value: string): string {
    if (!value) return "";
    const trimmed = value.trim();

    if (trimmed === "auto") return "auto";

    if (trimmed.endsWith("px") || trimmed.endsWith("%") || trimmed.endsWith("rem")) {
        return trimmed;
    }

    if (!isNaN(Number(trimmed))) {
        return trimmed + "px";
    }

    return trimmed;
};
export type RadiusInputProps = {
    styles: Record<string, string | number>;
    onChange: (prop: string, value: string) => void;
};

export default function RadiusInput({ styles, onChange }: RadiusInputProps) {
    return (
        <div>
            <label className="block text-xs opacity-70 mb-1">Border Radius</label>
            <input 
                type="text" 
                className="w-full px-2 py-1 bg-[var(--app-card)] border border-[var(--app-line)] rounded text-[var(--app-fg)]"
                value={styles.borderRadius || ""}
                placeholder="e.g. 8px or 50%"
                onChange={(e) => onChange("borderRadius", e.target.value)}
            />
        </div>
    )
};
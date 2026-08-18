export type SizeInputProps = {
    styles: Record<string, string | number>;
    onChange: (prop: string, value: string | number) => void;
};

export default function SizeInput({ styles, onChange }: SizeInputProps) {
    return (
        <div className="grid grid-cols-2 gap-2">
            <div>
                <label className="block text-xs opacity-70 mb-1 text-[var(--app-fg)]">Width</label>
                <input 
                    type="text"
                    className="w-full px-2 py-1 bg-[var(--app-card)] border border-[var(--app-line)] rounded"
                    value={styles.width || ""}
                    placeholder="auto or 100px"
                    onChange={(e) => onChange("width", e.target.value)}
                />
            </div>
            <div>
                <label className="block text-xs opacity-70 mb-1 text-[var(--app-fg)]">Height</label>
                <input 
                    type="text"
                    className="w-full px-2 py-1 bg-[var(--app-card)] border border-[var(--app-line)] rounded"
                    value={styles.height || ""}
                    placeholder="auto or 100px"
                    onChange={(e) => onChange("height", e.target.value)}
                />
            </div>
        </div>
    )
};
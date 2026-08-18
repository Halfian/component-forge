export type FlexControlsProp = {
    styles: Record<string, string | number>;
    onChange: (prop: string, value: string | number) => void;
}

export default function FlexControls({ styles, onChange }: FlexControlsProp) {
    if (styles.display !== "flex") return null;

    return (
        <div className="space-y-3">
            <div>
                <label className="block text-xs opacity-70 mb-1 text-[var(--app-fg)]">Direction</label>
                <select
                    className="w-full px-2 py-1 bg-[var(--app-card)] border border-[var(--app-line)] rounded"
                    value={styles.flexDirection}
                    onChange={(e) => onChange("flexDirection", e.target.value)}
                >
                    <option value="row">Row</option>
                    <option value="column">Column</option>
                </select>
            </div>
            <div>
                <label className="block text-xs opacity-70 mb-1 text-[var(--app-fg)]">Justify</label>
                <select
                    className="w-full px-2 py-1 bg-[var(--app-card)] border border-[var(--app-line)] rounded"
                    value={styles.justifyContent || "flex-start"}
                    onChange={(e) => onChange("justifyContent", e.target.value)}
                >
                    <option value="flex-start">Start</option>
                    <option value="center">Center</option>
                    <option value="flex-end">End</option>
                    <option value="space-between">Space Between</option>
                    <option value="space-around">Space Around</option>
                </select>
            </div>
            <div>
                <label className="block text-xs opacity-70 mb-1 text-[var(--app-fg)]">Align</label>
                <select
                    className="w-full px-2 py-1 bg-[var(--app-card)] border border-[var(--app-line)] rounded"
                    value={styles.alignItems || "stretch"}
                    onChange={(e) => onChange("alignItems", e.target.value)}
                >
                    <option value="stretch">Stretch</option>
                    <option value="flex-start">Start</option>
                    <option value="center">Center</option>
                    <option value="flex-end">End</option>
                </select>
            </div>
            <div>
                <label>Gap</label>
                <input 
                    type="text"
                />
            </div>
        </div>
    )
};
export type LineHeightInputProps = {
    value: string;
    onChange: (value: string) => void;
};

export default function LineHeightInput({ value, onChange }: LineHeightInputProps) {
    return (
        <div className="mb-3">
            <label className="block text-xs opacity-70 mb-1 text-[var(--app-fg)]">Line Height</label>
            <input
                type="text"
                className="w-full px-2 py-1 bg-[var(--app-card)] border border-[var(--app-line)] rounded text-[var(--app-fg)]"
                value={value || ""}
                onChange={(e) => onChange(e.target.value)}
                placeholder="e.g. 1.5 or 20px"
            />
        </div>
    )
}
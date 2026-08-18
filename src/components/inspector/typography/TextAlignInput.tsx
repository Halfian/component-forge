export type TextAlignInputProps = {
    value: string;
    onChange: (value: string) => void;
};

export default function TextAlignInput({ value, onChange }: TextAlignInputProps) {
    return (
        <div className="mb-3">
            <label className="block text-xs opacity-70 mb-1 text-[var(--app-fg)]">Text Align</label>
            <select
                className="w-full px-2 py-1 bg-[var(--app-card)] border border-[var(--app-line)] rounded text-[var(--app-fg)]"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="">Default</option>
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
                <option value="justify">Justify</option>
            </select>
        </div>
    );
}
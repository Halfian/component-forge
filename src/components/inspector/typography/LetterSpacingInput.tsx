export type LetterSpacingInputProps = {
    value: string;
    onChange: (value: string) => void;
};

export default function LetterSpacingInput({ value, onChange }: LetterSpacingInputProps) {
    return (
        <div className="mb-3">
            <label className="block text-xs opacity-70 mb-1 text-[var(--app-fg)]">Letter Spacing</label>
            <input
                type="text"
                className="w-full px-2 py-1 bg-[var(--app-card)] border border-[var(--app-line)] rounded text-[var(--app-fg)]"
                value={value || ""}
                onChange={(e) => onChange(e.target.value)}
                placeholder="e.g. 0.5px"
            />
        </div>
    )
}
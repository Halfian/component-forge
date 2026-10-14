export type LetterSpacingInputProps = {
    value: string;
    onChange: (value: string) => void;
};

export default function LetterSpacingInput({ value, onChange }: LetterSpacingInputProps) {
    return (
        <div className="mb-3">
            <label className="block text-xs opacity-70 mb-1 text-(--app-fg)">Letter Spacing</label>
            <input
                type="text"
                className="w-full px-2 py-1 bg-(--app-card) border border-(--app-line) rounded text-(--app-fg)"
                value={value || ""}
                onChange={(e) => onChange(e.target.value)}
                placeholder="e.g. 0.5px"
            />
        </div>
    )
}
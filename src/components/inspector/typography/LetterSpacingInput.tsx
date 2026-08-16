export type LetterSpacingInputProps = {
    value: string;
    onChange: (value: string) => void;
};

export default function LetterSpacingInput({ value, onChange }: LetterSpacingInputProps) {
    return (
        <div className="mb-3">
            <label className="block text-xs opacity-70 mb-1">Letter Spacing</label>
            <input
                type="text"
                className="w-full px-2 py-1 bg-neutral-800 border border-neutral-700 rounded"
                value={value || ""}
                onChange={(e) => onChange(e.target.value)}
                placeholder="e.g. 0.5px"
            />
        </div>
    )
}
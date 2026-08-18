export type FontSizeInputProps = {
    value: string;
    onChange: (value: string) => void;
};

export default function FontSizeInput({ value, onChange }: FontSizeInputProps) {
    return (
        <div className="mb-3">
            <label className="block text-xs opacity-70 mb-1">Font Size</label>
            <input 
                type="text"
                className="w-full px-2 py-1 bg-[var(--app-card)] border border-[var(--app-line)] rounded text-[var(--app-fg)]"
                value={value || ""}
                onChange={(e) => onChange(e.target.value)}
                placeholder="e.g., 16px" 
            />
        </div>
    );
}
export type ColorInputProps = {
    label: string;
    value?: string;
    onChange: (value: string) => void;
}

export default function ColorInput({ label, value, onChange }: ColorInputProps) {
    return (
        <div className="mb-3">
            <label className="block text-xs opacity-70 mb-1 text-(--app-fg)">{label}</label>
            <div className="flex items-center gap-2">
                <input 
                    type="color"
                    className="w-8 h-8 rounded border border-(--app-line) bg-(--app-card) text-(--app-fg)"
                    value={value || "#000000"}
                    onChange={(e) => onChange(e.target.value)}  
                />
                <input 
                    type="text" 
                    className="flex-1 px-2 py-1 bg-(--app-card) border border-(--app-line) rounded text-(--app-fg)"
                    value={value || ""}
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        </div>
    )
};
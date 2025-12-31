export default function ColorInput({ label, value, onChange }) {
    return (
        <div className="mb-3">
            <label className="block text-xs opacity-70 mb-1">{label}</label>
            <div className="flex items-center gap-2">
                <input 
                    type="color"
                    className="w-8 h-8 rounded border border-neutral-700 bg-neutral-800"
                    value={value || "#000000"}
                    onChange={(e) => onChange(e.target.value)}  
                />
                <input 
                    type="text" 
                    className="flex-1 px-2 py-1 bg-neutral-800 border border-neutral-700 rounded"
                    value={value || ""}
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        </div>
    )
};
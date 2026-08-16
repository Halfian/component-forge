import ColorInput from "../appearance/ColorInput.js";

export type BorderInputProps = {
    styles: Record<string, string | number>;
    onChange: (prop: string, value: string) => void;
}

export default function BorderInput({ styles, onChange }: BorderInputProps) {
    return (
        <div className="space-y-3">
            <div>
                <label className="block text-xs opacity-70 mb-1">Border Width</label>
                <input 
                    type="number"
                    min="0"
                    className="w-full px-2 py-1 bg-neutral-800 border border-neutral-700 rounded"
                    value={parseInt(styles.borderWidth as string) || 0}
                    onChange={(e) =>
                        onChange("borderWidth", `${e.target.value}px`)
                    }
                    
                />
            </div>
            <div>
                <label className="block text-xs opacity-70 mb-1">Border Style</label>
                <select
                    className="w-full px-2 py-1 bg-neutral-800 border border-neutral-700 rounded"
                    value={styles.borderStyle || "solid"}
                    onChange={(e) => onChange("borderStyle", e.target.value)}
                >
                    <option value="solid">Solid</option>
                    <option value="dashed">Dashed</option>
                    <option value="dotted">Dotted</option>
                    <option value="double">Double</option>
                    <option value="none">None</option>
                </select>
            </div>
            <ColorInput
                label="Border Color"
                value={styles.borderColor as string}
                onChange={(val) => onChange("borderColor", val)}            
            />
        </div>
    )
};
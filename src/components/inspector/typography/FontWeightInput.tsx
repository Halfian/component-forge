export type FontWeightInputProps = {
    value: string;
    onChange: (value: string) => void;
};

export default function FontWeightInput({ value, onChange }: FontWeightInputProps) {
    return (
        <div className="mb-3">
            <label className="block text-xs opacity-70 mb-1">Font Weight</label>
            <select
                className="w-full px-2 py-1 bg-neutral-800 border border-neutral-700 rounded"
                value={value || ""}
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="">Default</option>
                <option value="100">Thin</option>
                <option value="200">Extra Light</option>
                <option value="300">Light</option>
                <option value="400">Regular</option>
                <option value="500">Medium</option>
                <option value="600">Semi Bold</option>
                <option value="700">Bold</option>
                <option value="800">Extra Bold</option>
                <option value="900">Black</option>
            </select>
        </div>
    );
}
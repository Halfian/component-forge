export default function DisplayInput({ styles, onChange }) {
    return (
        <div>
            <label className="block text-xs opacity-70 mb-1">Display</label>
            <select
                className="w-full px-2 py-1 bg-neutral-800 border border-neutral-700 rounded"
                value={styles.display}
                onChange={(e) => onChange("display", e.target.ariaValueNow)}
            >
                <option value="block">Block</option>
                <option value="inline-block">Inline Block</option>
                <option value="flex">Flex</option>
                <option value="grid">Grid</option>
                <option value="none">None</option>
            </select>
        </div>
    )
};
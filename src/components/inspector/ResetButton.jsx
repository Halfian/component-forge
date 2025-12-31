export default function ResetButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="text-xs px-2 py-1 rounded bg-neutral-800 border border-neutral-700 hover:bg-neutral-700 transition"
        >
            Reset
        </button>
    )
}
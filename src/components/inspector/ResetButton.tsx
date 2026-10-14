export type ResetButtonProps = {
    onClick: () => void;
};

export default function ResetButton({ onClick }: ResetButtonProps) {
    return (
        <button
            onClick={onClick}
            className="text-xs px-2 py-1 rounded bg-(--app-card) border border-(--app-line) text-(--app-fg) hover:bg-(--app-line) transition cursor-pointer"
        >
            Reset
        </button>
    )
}
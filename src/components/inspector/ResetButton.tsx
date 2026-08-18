export type ResetButtonProps = {
    onClick: () => void;
};

export default function ResetButton({ onClick }: ResetButtonProps) {
    return (
        <button
            onClick={onClick}
            className="text-xs px-2 py-1 rounded bg-[var(--app-card)] border border-[var(--app-line)] text-[var(--app-fg)] hover:bg-[var(--app-line)] transition cursor-pointer"
        >
            Reset
        </button>
    )
}
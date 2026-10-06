export function ProgressBar({ value, showLabel = true }: { value: number; showLabel?: boolean }) {
  const pct = Math.min(100, Math.max(0, Math.round(value)));
  return (
    <div className="flex items-center gap-4">
      <div
        role="progressbar"
        aria-label="Progress"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-200"
      >
        <div className="h-full rounded-full bg-primary-500" style={{ width: `${pct}%` }} />
      </div>
      {showLabel && <span className="text-body whitespace-nowrap text-neutral-700">{pct}% complete</span>}
    </div>
  );
}

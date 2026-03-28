interface Props { label: string }

export default function MetricBadge({ label }: Props) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono bg-[var(--surface)] border border-[var(--border)] text-[var(--text-secondary)] whitespace-nowrap">
      {label}
    </span>
  )
}

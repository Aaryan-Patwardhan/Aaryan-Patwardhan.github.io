export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[var(--bg)] flex items-center justify-center">
      <div className="w-16 h-16 rounded-full border border-[var(--accent)] animate-pulse opacity-60" />
    </div>
  )
}

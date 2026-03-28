'use client'
export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[var(--bg)]">
      <p className="font-mono text-[var(--text-secondary)]">System fault detected.</p>
      <button onClick={reset} className="text-[var(--accent)] font-mono text-sm underline underline-offset-4">
        Reinitialize
      </button>
    </div>
  )
}

'use client'
import Link from 'next/link'

export default function CaseStudyError({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen bg-[var(--bg)] flex flex-col items-center justify-center gap-4">
      <p className="font-mono text-sm text-[var(--text-secondary)]">Failed to load project.</p>
      <div className="flex gap-4">
        <button onClick={reset} className="text-xs font-mono text-[var(--accent)] underline underline-offset-2">Retry</button>
        <Link href="/#projects" className="text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent)]">← Back</Link>
      </div>
    </div>
  )
}

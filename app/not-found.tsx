import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-[var(--bg)]">
      <p className="font-mono text-[var(--text-secondary)] text-lg">404 — Node not found.</p>
      <Link href="/" className="font-mono text-[var(--accent)] text-sm hover:underline underline-offset-4">
        ← Return to base
      </Link>
    </div>
  )
}

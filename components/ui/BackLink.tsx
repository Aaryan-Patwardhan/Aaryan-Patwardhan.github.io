import Link from 'next/link'

export default function BackLink() {
  return (
    <Link
      href="/#projects"
      className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
    >
      ← All projects
    </Link>
  )
}

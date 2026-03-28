'use client'
import { PROJECT_TAGS } from '@/lib/constants'
import type { ProjectTag } from '@/types'

interface Props {
  active: ProjectTag | 'All'
  onChange: (tag: ProjectTag | 'All') => void
}

export default function FilterBar({ active, onChange }: Props) {
  return (
    <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
      {PROJECT_TAGS.map(tag => (
        <button
          key={tag}
          onClick={() => onChange(tag as ProjectTag | 'All')}
          aria-pressed={active === tag}
          className={`px-3 py-1 rounded-full text-xs font-mono border transition-all ${
            active === tag
              ? 'bg-[var(--accent)] text-[var(--bg)] border-[var(--accent)]'
              : 'bg-transparent text-[var(--text-secondary)] border-[var(--border)] hover:border-[var(--accent-dim)]'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}

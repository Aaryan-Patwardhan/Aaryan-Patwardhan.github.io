import type { ExperienceItem } from '@/types'

export default function TimelineItem({ item, isLast }: { item: ExperienceItem; isLast: boolean }) {
  return (
    <div className="relative flex gap-6">
      <div className="flex flex-col items-center">
        <div className="w-2 h-2 rounded-full bg-[var(--accent)] mt-1 shrink-0" />
        {!isLast && <div className="w-px flex-1 bg-[var(--border)] mt-1" />}
      </div>
      <div className="pb-8">
        <div className="flex items-baseline gap-3 mb-1">
          <h4 className="text-sm font-medium text-[var(--text-primary)]">{item.role}</h4>
          <span className="text-xs font-mono text-[var(--text-dim)]">{item.period}</span>
        </div>
        <p className="text-xs text-[var(--accent-dim)] font-mono mb-2">{item.org}</p>
        <ul className="space-y-1">
          {item.bullets.map((b, i) => (
            <li key={i} className="text-sm text-[var(--text-secondary)] flex gap-2">
              <span className="text-[var(--text-dim)] shrink-0">—</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

import type { PipelineStep } from '@/types'

// A project's real pipeline as a small system diagram: blue = an AI model,
// solid ink = a deterministic rule, amber = a person reviews. Steps that
// don't work yet are dashed and say so. Plain HTML: no JS, screen-reader
// friendly (an ordered list).

const kindName: Record<PipelineStep['kind'], string> = {
  input: 'input', ai: 'AI model', rule: 'rule', human: 'person', store: 'storage', service: 'service', output: 'output',
}

const kindStyle: Record<PipelineStep['kind'], string> = {
  input: 'border-line bg-surface',
  service: 'border-line bg-surface',
  store: 'border-line bg-surface',
  output: 'border-line bg-surface',
  ai: 'border-accent bg-accent-soft',
  rule: 'border-ink bg-surface',
  human: 'border-doubt bg-doubt-soft',
}

const kindText: Record<PipelineStep['kind'], string> = {
  input: 'text-muted', service: 'text-muted', store: 'text-muted', output: 'text-muted',
  ai: 'text-accent', rule: 'text-ink', human: 'text-doubt',
}

export default function SystemDiagram({ steps, size = 'md', label }: { steps: PipelineStep[]; size?: 'md' | 'lg'; label: string }) {
  const lg = size === 'lg'
  return (
    <ol aria-label={label} className={`flex flex-col gap-1.5 md:flex-row md:items-stretch ${lg ? 'md:gap-2' : 'md:gap-1.5'}`}>
      {steps.map((s, i) => (
        <li key={s.label} className="flex flex-col md:flex-1 md:flex-row md:items-center">
          <div className={`flex-1 rounded-[6px] border-[1.5px] ${s.broken ? 'border-dashed' : ''} ${kindStyle[s.kind]} ${lg ? 'px-4 py-3.5' : 'px-3 py-2.5'}`}>
            <span className={`block font-mono ${lg ? 'text-xs' : 'text-[11px]'} ${kindText[s.kind]}`}>
              {kindName[s.kind]}{s.broken ? ' · not working yet' : ''}
            </span>
            <span className={`mt-0.5 block font-medium leading-snug text-ink ${lg ? 'text-[15px] md:text-base' : 'text-sm'}`}>{s.label}</span>
          </div>
          {i < steps.length - 1 && (
            <span aria-hidden className="flex items-center justify-center text-muted md:px-1">
              <span className="md:hidden">↓</span>
              <span className="hidden md:inline">→</span>
            </span>
          )}
        </li>
      ))}
    </ol>
  )
}

export function DiagramKey() {
  const item = (cls: string, text: string) => (
    <li className="flex items-center gap-2"><span aria-hidden className={`h-3 w-3 rounded-[3px] border-[1.5px] ${cls}`} />{text}</li>
  )
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted" aria-label="Diagram key">
      {item('border-accent bg-accent-soft', 'AI model')}
      {item('border-ink bg-surface', 'Deterministic rule')}
      {item('border-doubt bg-doubt-soft', 'A person reviews')}
      {item('border-line border-dashed bg-surface', 'Not working yet')}
    </ul>
  )
}

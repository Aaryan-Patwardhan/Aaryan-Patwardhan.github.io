'use client'
import { useEffect, useState, useRef } from 'react'
import { terminalSessions } from '@/lib/terminal-logs'
import type { LogLine } from '@/types'

const TYPE_COLORS: Record<string, string> = {
  command: 'text-[var(--accent)]',
  output:  'text-[var(--text-secondary)]',
  error:   'text-[var(--error)]',
  success: 'text-[var(--success)]',
  dim:     'text-[var(--text-dim)]'
}

export default function Terminal({ projectId }: { projectId?: string }) {
  const session = projectId
    ? terminalSessions.find(s => s.projectId === projectId) ?? terminalSessions[0]
    : terminalSessions[0]

  const [visibleLines, setVisibleLines] = useState<LogLine[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setVisibleLines([])
    let lineIndex = 0
    let timeout: ReturnType<typeof setTimeout>

    function showNextLine() {
      if (lineIndex >= session.lines.length) return
      const line = session.lines[lineIndex]
      setVisibleLines(prev => [...prev, line])
      lineIndex++
      const charCount = line.text.length
      const delay = line.delay ?? Math.min(charCount * 18, 400)
      timeout = setTimeout(showNextLine, delay)
    }

    const start = setTimeout(showNextLine, 600)
    return () => { clearTimeout(start); clearTimeout(timeout) }
  }, [session])

  useEffect(() => {
    containerRef.current?.scrollTo({ top: 9999, behavior: 'smooth' })
  }, [visibleLines])

  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--bg)] overflow-hidden font-mono text-xs">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[var(--border)] bg-[var(--surface)]">
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--error)] opacity-70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 opacity-70" />
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--success)] opacity-70" />
        <span className="ml-3 text-[var(--text-dim)]">{session.title}</span>
      </div>
      <div ref={containerRef} className="p-4 h-52 overflow-y-auto space-y-1 scrollbar-thin">
        {visibleLines.map((line, i) => (
          <div key={i} className={`leading-5 ${TYPE_COLORS[line.type]}`}>
            {line.text}
            {i === visibleLines.length - 1 && (
              <span className="inline-block w-1.5 h-3 ml-0.5 bg-[var(--accent)] animate-pulse align-middle" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

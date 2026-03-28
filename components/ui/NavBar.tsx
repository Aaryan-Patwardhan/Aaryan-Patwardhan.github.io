'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useStore } from '@/store/useStore'
import { resume } from '@/lib/resume'

const NAV_ITEMS = ['About', 'Projects', 'Skills', 'Contact']

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useStore(s => s.activeSection)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--bg)]/80 backdrop-blur-md border-b border-[var(--border)]' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-mono text-sm text-[var(--text-primary)] flex items-center gap-2">
          {resume.name}
          {resume.availableForWork && (
            <span className="flex items-center gap-1 text-[10px] text-[var(--success)] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)] animate-pulse" />
              available
            </span>
          )}
        </Link>
        <div className="flex items-center gap-6">
          {NAV_ITEMS.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-xs font-mono transition-colors ${
                activeSection === item.toLowerCase()
                  ? 'text-[var(--accent)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

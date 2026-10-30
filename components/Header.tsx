'use client'
// Sticky header. Phones get a full-width menu that closes on a choice or Escape.
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { site } from '@/lib/profile'

const links = [
  { label: 'Work', href: '/#work' },
  { label: 'How I build', href: '/#approach' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Stack', href: '/#stack' },
  { label: 'Contact', href: '/#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1160px] items-center justify-between gap-6 px-5 md:px-8">
        <Link href="/" className="inline-flex min-h-12 items-center text-[17px] font-semibold tracking-tight">Aaryan Patwardhan</Link>
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="inline-flex min-h-11 items-center rounded-[6px] px-3 text-[15px] text-muted transition-colors hover:text-ink">{l.label}</a>
          ))}
          <a href={site.resume} className="ml-2 inline-flex min-h-11 items-center rounded-[6px] border-[1.5px] border-ink px-4 text-[15px] font-semibold transition-colors hover:bg-ink hover:text-bg">Resume</a>
        </nav>
        <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="phone-menu"
          className="inline-flex min-h-12 items-center rounded-[6px] border border-line px-4 text-base font-medium md:hidden">
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open && (
        <nav id="phone-menu" aria-label="Main" className="border-t border-line bg-bg px-5 pb-5 md:hidden">
          <ul>
            {links.map((l) => (
              <li key={l.href} className="border-b border-line">
                <a href={l.href} onClick={() => setOpen(false)} className="flex min-h-14 items-center text-lg">{l.label}</a>
              </li>
            ))}
          </ul>
          <a href={site.resume} className="mt-5 flex min-h-12 items-center justify-center rounded-[6px] border-[1.5px] border-ink text-base font-semibold">Resume (PDF)</a>
        </nav>
      )}
    </header>
  )
}

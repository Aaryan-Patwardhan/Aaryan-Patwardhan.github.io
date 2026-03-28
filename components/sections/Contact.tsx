'use client'
import { motion } from 'framer-motion'
import { resume } from '@/lib/resume'
import { useIntersection } from '@/hooks/useIntersection'

export default function Contact() {
  const { ref, isVisible } = useIntersection(0.15)

  const links = [
    { href: `mailto:${resume.email}`, label: resume.email, primary: true },
    { href: resume.github, label: 'GitHub ↗', primary: false },
    { href: resume.linkedin, label: 'LinkedIn ↗', primary: false },
  ]

  return (
    <section id="contact" ref={ref as React.Ref<HTMLElement>} className="py-24 max-w-6xl mx-auto px-6 border-t border-[var(--border)]">
      <motion.p
        initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.0 }}
        className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-4"
      >
        Contact
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.0, delay: 0.1 }}
        className="text-2xl font-bold text-[var(--text-primary)] mb-2"
      >
        Let&apos;s build something.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.0, delay: 0.2 }}
        className="text-[var(--text-secondary)] mb-8 max-w-md"
      >
        Available for freelance AI/ML engineering work. Response time: {resume.responseTime}.
      </motion.p>
      <div className="flex flex-wrap gap-4">
        {links.map(({ href, label, primary }, i) => (
          <motion.a
            key={href}
            href={href}
            target={primary ? undefined : '_blank'}
            rel={primary ? undefined : 'noopener noreferrer'}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.3 + i * 0.08 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className={
              primary
                ? 'px-5 py-2.5 bg-[var(--accent)] text-[var(--bg)] text-sm font-mono rounded hover:bg-[var(--accent-glow)] transition-colors'
                : 'px-5 py-2.5 border border-[var(--border)] text-[var(--text-secondary)] text-sm font-mono rounded hover:border-[var(--accent-dim)] transition-colors'
            }
          >
            {label}
          </motion.a>
        ))}
      </div>
    </section>
  )
}

'use client'
import { motion } from 'framer-motion'
import Terminal from '@/components/ui/Terminal'
import { resume } from '@/lib/resume'
import { useIntersection } from '@/hooks/useIntersection'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 1.0, delay: 0.2 + i * 0.12, ease: 'easeOut' }
  })
}

export default function About() {
  const { ref, isVisible } = useIntersection(0.1)

  return (
    <section id="about" ref={ref as React.Ref<HTMLElement>} className="py-24 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <motion.p
            custom={0} variants={fadeUp}
            initial="hidden" animate={isVisible ? 'visible' : 'hidden'}
            className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-4"
          >
            About
          </motion.p>
          <motion.h2
            custom={1} variants={fadeUp}
            initial="hidden" animate={isVisible ? 'visible' : 'hidden'}
            className="text-2xl font-bold text-[var(--text-primary)] mb-6"
          >
            Systems thinker.<br />
            Vision AI and autonomy.
          </motion.h2>
          <motion.p
            custom={2} variants={fadeUp}
            initial="hidden" animate={isVisible ? 'visible' : 'hidden'}
            className="text-[var(--text-secondary)] leading-relaxed mb-4"
          >
            {resume.bio}
          </motion.p>
          <motion.div
            custom={3} variants={fadeUp}
            initial="hidden" animate={isVisible ? 'visible' : 'hidden'}
            className="flex items-center gap-2 text-xs font-mono text-[var(--text-dim)]"
          >
            <span>{resume.location}</span>
            <span>·</span>
            <span>{resume.timezone}</span>
            <span>·</span>
            <span className="text-[var(--success)]">{resume.responseTime} response</span>
          </motion.div>
        </div>
        <motion.div
          custom={1} variants={fadeUp}
          initial="hidden" animate={isVisible ? 'visible' : 'hidden'}
        >
          <Terminal projectId="sentinel-mesh" />
        </motion.div>
      </div>
    </section>
  )
}

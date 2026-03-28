'use client'
import { motion } from 'framer-motion'
import { resume } from '@/lib/resume'
import TimelineItem from '@/components/ui/TimelineItem'
import { useIntersection } from '@/hooks/useIntersection'

export default function Experience() {
  const { ref, isVisible } = useIntersection(0.1)

  return (
    <section id="experience" ref={ref as React.Ref<HTMLElement>} className="py-24 max-w-6xl mx-auto px-6">
      <motion.p
        initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.0 }}
        className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-4"
      >
        Experience
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.0, delay: 0.1 }}
        className="text-2xl font-bold text-[var(--text-primary)] mb-12"
      >
        What I&apos;ve built
      </motion.h2>
      <div>
        {resume.experience.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -24 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.2 + i * 0.12 }}
          >
            <TimelineItem
              item={item}
              isLast={i === resume.experience.length - 1}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

'use client'
import { motion } from 'framer-motion'
import SkillCard from '@/components/ui/SkillCard'
import SkillConstellation from '@/components/ui/SkillConstellation'
import { skills } from '@/lib/skills'
import { useIntersection } from '@/hooks/useIntersection'
import type { SkillCategory } from '@/types'

const CATEGORIES: SkillCategory[] = [
  'Vision AI',
  'Machine Learning',
  'Languages',
  'Backend',
  'Systems & Infra',
  'Mobile'
]

export default function Skills() {
  const { ref, isVisible } = useIntersection(0.05)

  return (
    <section id="skills" ref={ref as React.Ref<HTMLElement>} className="py-24 max-w-6xl mx-auto px-6">
      <motion.p
        initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.0 }}
        className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-4"
      >
        Skills
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.0, delay: 0.1 }}
        className="text-2xl font-bold text-[var(--text-primary)] mb-4"
      >
        The stack
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.0, delay: 0.15 }}
        className="text-xs font-mono text-[var(--text-dim)] mb-8"
      >
        Hover the constellation nodes to explore skill co-occurrences
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }} animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.0, delay: 0.2 }}
      >
        <SkillConstellation className="mb-16 max-w-2xl mx-auto" />
      </motion.div>

      <div className="space-y-10">
        {CATEGORIES.map((cat, catIdx) => {
          const catSkills = skills.filter(s => s.category === cat)
          if (catSkills.length === 0) return null
          return (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, delay: 0.35 + catIdx * 0.08 }}
            >
              <h3 className="text-xs font-mono text-[var(--text-dim)] uppercase tracking-widest mb-4">
                {cat}
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {catSkills.map(skill => <SkillCard key={skill.id} skill={skill} />)}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

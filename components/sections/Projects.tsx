'use client'
import { AnimatePresence, motion } from 'framer-motion'
import ProjectCard from '@/components/ui/ProjectCard'
import FilterBar from '@/components/ui/FilterBar'
import { useFilter } from '@/hooks/useFilter'
import { useIntersection } from '@/hooks/useIntersection'

export default function Projects() {
  const { activeTag, setActiveTag, filtered } = useFilter()
  const { ref, isVisible } = useIntersection(0.1)

  return (
    <section id="projects" ref={ref as React.Ref<HTMLElement>} className="py-24 max-w-6xl mx-auto px-6">
      <motion.p
        initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-4"
      >
        Projects
      </motion.p>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">
          Things I&apos;ve shipped
        </h2>
        <FilterBar active={activeTag} onChange={setActiveTag} />
      </div>
      <AnimatePresence mode="popLayout">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(project => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </section>
  )
}

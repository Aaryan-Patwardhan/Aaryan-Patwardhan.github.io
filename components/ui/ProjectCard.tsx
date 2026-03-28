'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import MetricBadge from './MetricBadge'
import type { ProjectMeta } from '@/types'

export default function ProjectCard({ project }: { project: ProjectMeta }) {
  const [expanded, setExpanded] = useState(false)
  const expandId = `project-detail-${project.id}`
  const isWip = project.status === 'wip'

  return (
    <div className={`rounded-lg border border-[var(--border)] bg-[var(--surface)] overflow-hidden transition-colors hover:border-[var(--accent-dim)] ${isWip ? 'opacity-60' : ''}`}>
      {/* Cover image */}
      <div className="relative w-full h-40 bg-[var(--bg)]" style={{ position: 'relative', height: '160px' }}>
        {isWip ? (
          <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-[var(--text-dim)]">coming soon</div>
        ) : (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover opacity-60"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={project.featured}
          />
        )}
      </div>

      <div className="p-5">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] font-mono text-[var(--accent-dim)] uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>

        {/* Title + tagline */}
        <h3 className="text-base font-semibold text-[var(--text-primary)] mb-1">{project.title}</h3>
        <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{project.tagline}</p>

        {/* Metrics */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.metrics.map(m => <MetricBadge key={m} label={m} />)}
        </div>

        {/* Expandable technical details */}
        {!isWip && (
          <>
            <button
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              aria-controls={expandId}
              className="text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
            >
              <span className={`transition-transform duration-200 ${expanded ? 'rotate-90' : ''}`}>▶</span>
              Technical Details
            </button>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  id={expandId}
                  role="region"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-[var(--border)] mt-4">
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                      {project.caseStudy.architecture}
                    </p>
                    <div className="flex gap-3 mt-3">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="text-xs font-mono text-[var(--accent)] hover:underline underline-offset-2"
                      >
                        Full Case Study →
                      </Link>
                      {project.caseStudy.githubUrl && (
                        <a
                          href={project.caseStudy.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                        >
                          GitHub ↗
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </div>
  )
}

'use client'
import { motion } from 'framer-motion'
import type { Skill } from '@/types'
import { getSkillWithStats } from '@/lib/skills'

interface Props { skill: Skill }

export default function SkillCard({ skill }: Props) {
  const { projectCount, highlight } = getSkillWithStats(skill)
  return (
    <motion.div
      whileHover={{ scale: 1.03, borderColor: 'var(--accent-dim)' }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15 }}
      className="p-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] transition-colors group cursor-default"
    >
      <div className="flex items-start justify-between mb-1">
        <span className="text-sm font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
          {skill.name}
        </span>
        <span className="text-[10px] font-mono text-[var(--accent-dim)]">{projectCount}p</span>
      </div>
      <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">{highlight}</p>
    </motion.div>
  )
}

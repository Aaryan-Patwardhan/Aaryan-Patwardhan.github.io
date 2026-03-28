'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getCoOccurrenceEdges } from '@/lib/skills'
import { getAllSkillsWithStats } from '@/lib/utils/skill-queries'

const CATEGORY_CENTERS: Record<string, { x: number; y: number }> = {
  'Vision AI':        { x: 200, y: 90  },
  'Machine Learning': { x: 490, y: 160 },
  'Languages':        { x: 160, y: 360 },
  'Backend':          { x: 490, y: 420 },
  'Systems & Infra':  { x: 70,  y: 240 },
  'Mobile':           { x: 350, y: 560 },
}

const CATEGORY_COLOR: Record<string, string> = {
  'Vision AI':        '#00d4ff',
  'Machine Learning': '#a78bfa',
  'Languages':        '#34d399',
  'Backend':          '#fb923c',
  'Systems & Infra':  '#f472b6',
  'Mobile':           '#facc15',
}

// Build CSS keyframes for each node — pure CSS drift, zero JS on compositor thread
function buildDriftKeyframes(nodes: { id: string }[]): string {
  const PHI = 1.61803398875
  return nodes.map((_, i) => {
    const seed = i * PHI
    const ax = (Math.sin(seed)        * 7).toFixed(1)
    const ay = (Math.cos(seed * 1.3)  * 5).toFixed(1)
    const bx = (Math.sin(seed * 0.7)  * 5).toFixed(1)
    const by = (Math.cos(seed * 1.9)  * 7).toFixed(1)
    const dur = (3.2 + (i % 5) * 0.7).toFixed(1)
    const del = ((i % 7) * -0.6).toFixed(1)
    return `@keyframes ndrift-${i}{0%{transform:translate(0,0)}50%{transform:translate(${ax}px,${ay}px)}100%{transform:translate(${bx}px,${by}px)}}`
      + `.ndrift-${i}{animation:ndrift-${i} ${dur}s ease-in-out ${del}s infinite alternate;}`
  }).join('')
}

export default function SkillConstellation({ className }: { className?: string }) {
  const [hovered, setHovered] = useState<string | null>(null)

  const { nodes, edges, styleSheet } = useMemo(() => {
    const stats = getAllSkillsWithStats()
    const edgeData = getCoOccurrenceEdges()

    const byCategory: Record<string, typeof stats> = {}
    stats.forEach(s => {
      if (!byCategory[s.category]) byCategory[s.category] = []
      byCategory[s.category].push(s)
    })

    const nodePos = new Map<string, { x: number; y: number }>()
    type SkillWithStats = ReturnType<typeof getAllSkillsWithStats>[0]
    type NodeData = SkillWithStats & { x: number; y: number; color: string }
    const nodes: NodeData[] = []

    for (const [cat, catSkills] of Object.entries(byCategory)) {
      const center = CATEGORY_CENTERS[cat] || { x: 350, y: 310 }
      const color  = CATEGORY_COLOR[cat]  || '#00d4ff'
      catSkills.forEach((skill, i) => {
        const col = i % 2
        const row = Math.floor(i / 2)
        const x = center.x + col * 90 - 45
        const y = center.y + row * 78
        nodePos.set(skill.id, { x, y })
        nodes.push({ ...skill, x, y, color })
      })
    }

    const validEdges = edgeData
      .filter(e => nodePos.has(e.from) && nodePos.has(e.to))
      .map(e => ({
        ...e,
        fromPos: nodePos.get(e.from)!,
        toPos:   nodePos.get(e.to)!
      }))

    return { nodes, edges: validEdges, styleSheet: buildDriftKeyframes(nodes) }
  }, [])

  const hoveredNode = nodes.find(n => n.id === hovered)

  return (
    <div className={className} style={{ position: 'relative', paddingBottom: '64px' }}>
      {/* Inject CSS drift keyframes — runs 100% on compositor, zero JS per frame */}
      <style dangerouslySetInnerHTML={{ __html: styleSheet }} />

      <svg
        viewBox="0 0 700 660"
        width="100%"
        preserveAspectRatio="xMidYMid meet"
        className="overflow-visible"
      >
        {/* Edges — plain SVG, opacity via CSS transition */}
        {edges.map((edge, i) => {
          const lit = hovered && (edge.from === hovered || edge.to === hovered)
          return (
            <line
              key={`e-${i}`}
              x1={edge.fromPos.x} y1={edge.fromPos.y}
              x2={edge.toPos.x}  y2={edge.toPos.y}
              stroke="#00aaff"
              strokeWidth={lit ? 2 : 0.8}
              opacity={lit ? 0.75 : hovered ? 0.06 : 0.22}
              style={{ transition: 'opacity 0.25s, stroke-width 0.25s' }}
            />
          )
        })}

        {/* Nodes */}
        {nodes.map((node, idx) => (
          <motion.g
            key={node.id}
            className={`ndrift-${idx} cursor-pointer`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: hovered && hovered !== node.id ? 0.2 : 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 + idx * 0.04 }}
            style={{ transformOrigin: `${node.x}px ${node.y}px` }}
            onHoverStart={() => setHovered(node.id)}
            onHoverEnd={() => setHovered(null)}
          >
            {/* Glow ring */}
            <circle
              cx={node.x} cy={node.y}
              r={hovered === node.id ? 22 : 15}
              fill="none" stroke={node.color}
              strokeWidth={hovered === node.id ? 2 : 1}
              opacity={hovered === node.id ? 0.6 : 0.2}
              style={{ transition: 'r 0.2s, opacity 0.2s' }}
            />
            {/* Main dot — 14px, 18px on hover */}
            <circle
              cx={node.x} cy={node.y}
              r={hovered === node.id ? 18 : 14}
              fill={node.color}
              fillOpacity={hovered === node.id ? 1 : 0.85}
              style={{ transition: 'r 0.2s' }}
            />
            {/* Always-visible label */}
            <text
              x={node.x} y={node.y + 33}
              textAnchor="middle" fontSize="10.5"
              fill={hovered === node.id ? node.color : '#7aadbb'}
              fontFamily="monospace"
              style={{ pointerEvents: 'none', userSelect: 'none', transition: 'fill 0.2s' }}
            >
              {node.name}
            </text>
          </motion.g>
        ))}
      </svg>

      {/* Tooltip */}
      <AnimatePresence>
        {hoveredNode && (
          <motion.div
            key={hoveredNode.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.18 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[var(--surface)] border border-[var(--border)] rounded-lg px-4 py-3 text-center pointer-events-none z-10"
            style={{ minWidth: '210px' }}
          >
            <p className="text-sm font-bold font-mono" style={{ color: hoveredNode.color }}>
              {hoveredNode.name}
            </p>
            <p className="text-[11px] text-[var(--text-secondary)] mt-0.5">
              {hoveredNode.projectCount} project{hoveredNode.projectCount !== 1 ? 's' : ''} · {hoveredNode.category}
            </p>
            {hoveredNode.highlight && (
              <p className="text-[10px] text-[var(--text-dim)] mt-1.5 leading-relaxed">
                {hoveredNode.highlight}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

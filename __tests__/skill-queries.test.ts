import { describe, it, expect } from 'vitest'
import { getAllSkillsWithStats, getSkillsByCategoryWithStats } from '../lib/utils/skill-queries'
import { getCoOccurrenceEdges } from '../lib/skills'

describe('skill-queries', () => {
  it('getAllSkillsWithStats returns projectCount >= 0 for all', () => {
    const all = getAllSkillsWithStats()
    expect(all.every(s => s.projectCount >= 0)).toBe(true)
  })

  it('getSkillsByCategoryWithStats filters by category', () => {
    const visionSkills = getSkillsByCategoryWithStats('Vision AI')
    expect(visionSkills.every(s => s.category === 'Vision AI')).toBe(true)
  })

  it('getCoOccurrenceEdges returns from/to strings', () => {
    const edges = getCoOccurrenceEdges()
    expect(edges.every(e => typeof e.from === 'string' && typeof e.to === 'string')).toBe(true)
  })
})

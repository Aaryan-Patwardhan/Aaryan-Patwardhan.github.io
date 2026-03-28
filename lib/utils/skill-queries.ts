import { skills, getSkillWithStats } from '../skills'
import type { SkillCategory } from '@/types'

export function getAllSkillsWithStats() {
  return skills.map(getSkillWithStats)
}

export function getSkillsByCategoryWithStats(category: SkillCategory) {
  return skills.filter(s => s.category === category).map(getSkillWithStats)
}

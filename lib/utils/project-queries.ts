import { projects } from '../projects'
import type { ProjectMeta, ProjectTag } from '@/types'

export function getAllProjects(): ProjectMeta[] {
  return projects
    .filter(p => p.status === 'published' || p.status === 'featured' || p.status === 'wip')
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getPublishedProjects(): ProjectMeta[] {
  return projects
    .filter(p => p.status === 'published' || p.status === 'featured')
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getFeaturedProjects(): ProjectMeta[] {
  return projects.filter(p => p.featured && p.status !== 'archived')
}

export function getProjectBySlug(slug: string): ProjectMeta | undefined {
  return projects.find(p => p.slug === slug)
}

export function getProjectsByTag(tag: ProjectTag): ProjectMeta[] {
  return getAllProjects().filter(p => p.tags.includes(tag))
}

export function getRelatedProjects(currentSlug: string, limit = 2): ProjectMeta[] {
  const current = getProjectBySlug(currentSlug)
  if (!current) return []
  return getPublishedProjects()
    .filter(p => p.slug !== currentSlug)
    .filter(p => p.tags.some(t => current.tags.includes(t)))
    .slice(0, limit)
}

export function getAllSlugs(): string[] {
  return projects
    .filter(p => p.status !== 'archived' && p.status !== 'wip')
    .map(p => p.slug)
}

import { describe, it, expect } from 'vitest'
import {
  getAllProjects,
  getProjectBySlug,
  getFeaturedProjects,
  getProjectsByTag,
  getAllSlugs
} from '../lib/utils/project-queries'

describe('project-queries', () => {
  it('getAllProjects returns only published/featured/wip', () => {
    const all = getAllProjects()
    expect(all.every(p => p.status !== 'archived')).toBe(true)
  })

  it('getAllProjects is sorted newest first', () => {
    const all = getAllProjects()
    for (let i = 0; i < all.length - 1; i++) {
      expect(all[i].date >= all[i + 1].date).toBe(true)
    }
  })

  it('getProjectBySlug returns correct project', () => {
    const p = getProjectBySlug('sentinel-mesh')
    expect(p?.id).toBe('sentinel-mesh')
  })

  it('getProjectBySlug returns undefined for bad slug', () => {
    expect(getProjectBySlug('does-not-exist')).toBeUndefined()
  })

  it('getFeaturedProjects returns only featured=true', () => {
    const featured = getFeaturedProjects()
    expect(featured.every(p => p.featured)).toBe(true)
  })

  it('getProjectsByTag filters correctly', () => {
    const visionProjects = getProjectsByTag('Vision AI')
    expect(visionProjects.every(p => p.tags.includes('Vision AI'))).toBe(true)
  })

  it('getAllSlugs returns strings', () => {
    const slugs = getAllSlugs()
    expect(slugs.every(s => typeof s === 'string')).toBe(true)
  })
})

'use client'
import { useState, useMemo } from 'react'
import { getAllProjects } from '@/lib/utils/project-queries'
import type { ProjectTag } from '@/types'

export function useFilter() {
  const [activeTag, setActiveTag] = useState<ProjectTag | 'All'>('All')
  const allProjects = getAllProjects()

  const filtered = useMemo(() => {
    if (activeTag === 'All') return allProjects
    return allProjects.filter(p => p.tags.includes(activeTag))
  }, [activeTag, allProjects])

  return { activeTag, setActiveTag, filtered }
}

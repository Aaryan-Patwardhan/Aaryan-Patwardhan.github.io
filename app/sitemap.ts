import type { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/utils/project-queries'

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllSlugs()
  const projectUrls = slugs.map(slug => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8
  }))

  return [
    { url: process.env.NEXT_PUBLIC_SITE_URL ?? '/', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    ...projectUrls
  ]
}

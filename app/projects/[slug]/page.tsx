import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BackLink from '@/components/ui/BackLink'
import MetricBadge from '@/components/ui/MetricBadge'
import { getProjectBySlug, getAllSlugs, getRelatedProjects } from '@/lib/utils/project-queries'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: 'Not Found' }
  return {
    title: `${project.title} — Aaryan Patwardhan`,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.caseStudy.results,
      images: [`/projects/${slug}/og.png`]
    }
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const related = getRelatedProjects(slug, 2)

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <BackLink />

        <div className="mt-10 mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(t => (
              <span key={t} className="text-xs font-mono text-[var(--accent-dim)] uppercase tracking-wider">{t}</span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-3">{project.title}</h1>
          <p className="text-lg text-[var(--text-secondary)]">{project.tagline}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.metrics.map(m => <MetricBadge key={m} label={m} />)}
          </div>
          <div className="flex gap-4 mt-6">
            {project.caseStudy.githubUrl && (
              <a href={project.caseStudy.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-[var(--accent)] hover:underline underline-offset-2">GitHub ↗</a>
            )}
            {project.caseStudy.demoUrl && (
              <a href={project.caseStudy.demoUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-[var(--accent)] hover:underline underline-offset-2">Demo ↗</a>
            )}
          </div>
        </div>

        {[
          { label: 'The Problem', content: project.caseStudy.problem },
          { label: 'Approach',    content: project.caseStudy.approach },
          { label: 'Architecture', content: project.caseStudy.architecture },
          { label: 'Results',     content: project.caseStudy.results }
        ].map(({ label, content }) => (
          <div key={label} className="mb-10">
            <h2 className="text-xs font-mono text-[var(--text-dim)] uppercase tracking-widest mb-3">{label}</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">{content}</p>
          </div>
        ))}

        {project.caseStudy.diagrams.length > 0 && (
          <div className="space-y-6 mb-12">
            {project.caseStudy.diagrams.map((d, i) => (
              <figure key={i}>
                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-[var(--border)] bg-[var(--surface)]" style={{ position: 'relative' }}>
                  <Image src={d.path} alt={d.caption} fill className="object-contain" />
                </div>
                <figcaption className="text-xs font-mono text-[var(--text-dim)] mt-2 text-center">{d.caption}</figcaption>
              </figure>
            ))}
          </div>
        )}

        {related.length > 0 && (
          <div className="border-t border-[var(--border)] pt-10">
            <p className="text-xs font-mono text-[var(--text-dim)] uppercase tracking-widest mb-5">Related</p>
            <div className="flex flex-col gap-3">
              {related.map(r => (
                <Link key={r.id} href={`/projects/${r.slug}`} className="group flex items-center justify-between p-4 rounded-lg border border-[var(--border)] hover:border-[var(--accent-dim)] transition-colors">
                  <div>
                    <p className="text-sm font-medium text-[var(--text-primary)]">{r.title}</p>
                    <p className="text-xs text-[var(--text-secondary)] mt-0.5">{r.tagline}</p>
                  </div>
                  <span className="text-[var(--text-dim)] group-hover:text-[var(--accent)] transition-colors">→</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

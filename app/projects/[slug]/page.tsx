import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getProjectBySlug, getAllSlugs } from '@/lib/utils/project-queries'
import SystemDiagram, { DiagramKey } from '@/components/SystemDiagram'
import { StagePill } from '@/components/sections/Work'

interface Props { params: Promise<{ slug: string }> }

// Only the projects in lib/projects.ts exist; any other slug is a real 404.
export const dynamicParams = false

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProjectBySlug((await params).slug)
  if (!p) return { title: 'Not Found' }
  return { title: `${p.title} — Aaryan Patwardhan`, description: p.tagline, openGraph: { title: p.title, description: p.caseStudy.results, images: [`/projects/${p.slug}/og.png`] } }
}

const link = 'inline-flex min-h-12 items-center font-semibold underline decoration-line underline-offset-4 hover:decoration-ink'

export default async function CaseStudyPage({ params }: Props) {
  const p = getProjectBySlug((await params).slug)
  if (!p) notFound()
  const blocks = [['The problem', p.caseStudy.problem], ['Approach', p.caseStudy.approach], ['Architecture', p.caseStudy.architecture], ['Results and limits', p.caseStudy.results]]
  return (
    <article className="mx-auto max-w-[1160px] px-5 py-14 md:px-8 md:py-20">
      <Link href="/#work" className={link}>← All work</Link>
      <div className="mt-8 flex flex-wrap items-center gap-3"><StagePill stage={p.stage} /><span className="text-sm text-muted">{p.tags.join(' · ')}</span></div>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">{p.title}</h1>
      <p className="mt-4 max-w-[60ch] text-xl text-muted">{p.tagline}</p>
      <div className="mt-6 flex flex-wrap gap-x-6">
        {p.caseStudy.liveUrl && <a href={p.caseStudy.liveUrl} target="_blank" rel="noopener noreferrer" className={link}>Live site</a>}
        {p.caseStudy.githubUrl && <a href={p.caseStudy.githubUrl} target="_blank" rel="noopener noreferrer" className={link}>Code</a>}
        {!p.caseStudy.githubUrl && !p.caseStudy.liveUrl && <span className="inline-flex min-h-12 items-center text-muted">Code is private — demo on request</span>}
      </div>
      <figure className="mt-12 rounded-[8px] border border-line bg-surface p-5 md:p-7">
        <figcaption className="mb-5 flex flex-wrap items-baseline justify-between gap-3"><span className="font-semibold">Pipeline</span><DiagramKey /></figcaption>
        <SystemDiagram steps={p.pipeline} size="lg" label={`${p.title} pipeline`} />
      </figure>
      <ul className="mt-8 flex flex-wrap gap-2">{p.metrics.map(m => <li key={m} className="rounded-[6px] bg-surface px-3 py-1.5 text-sm">{m}</li>)}</ul>
      <div className="mt-12 space-y-10">
        {blocks.map(([t, b]) => (
          <section key={t} className="grid gap-3 md:grid-cols-[220px_1fr] md:gap-12">
            <h2 className="text-lg font-semibold">{t}</h2>
            <p className="max-w-[70ch] text-muted">{b}</p>
          </section>
        ))}
      </div>
      {p.caseStudy.diagrams.length > 0 && (
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {p.caseStudy.diagrams.map(d => (
            <figure key={d.path}>
              <div className="overflow-hidden rounded-[6px] border border-line"><Image src={d.path} alt={d.caption} width={1200} height={750} sizes="(min-width: 768px) 560px, 100vw" className="h-auto w-full" /></div>
              <figcaption className="mt-2 text-sm text-muted">{d.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </article>
  )
}

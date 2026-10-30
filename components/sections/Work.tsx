import Image from 'next/image'
import Link from 'next/link'
import { getAllProjects } from '@/lib/utils/project-queries'
import { projects as ordered } from '@/lib/projects'
import SystemDiagram from '@/components/SystemDiagram'

const textLink = 'inline-flex min-h-11 items-center font-semibold underline decoration-line underline-offset-4 hover:decoration-ink'

export function StagePill({ stage }: { stage: string }) {
  const live = /^live|pilot/i.test(stage)
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium ${live ? 'border-ok text-ok' : 'border-line text-muted'}`}>
      <span aria-hidden className={`h-2 w-2 rounded-full ${live ? 'bg-ok' : 'border border-muted'}`} />
      {stage}
    </span>
  )
}

export default function Work() {
  // The order in lib/projects.ts is deliberate (most important first).
  const visible = new Set(getAllProjects().map((p) => p.id))
  const list = ordered.filter((p) => visible.has(p.id))
  return (
    <section id="work" aria-labelledby="work-title" className="border-b border-line">
      <div className="mx-auto max-w-[1160px] px-5 py-16 md:px-8 md:py-24">
        <h2 id="work-title" className="text-3xl font-semibold tracking-tight md:text-4xl">Selected work</h2>
        <p className="mt-3 max-w-[60ch] text-muted">Each project with its real pipeline, its honest stage, and only numbers I&apos;ve measured.</p>

        <ol className="mt-12 space-y-6">
          {list.map((p, i) => {
            const shot = i < 2 ? p.caseStudy.diagrams.find((d) => d.type === 'screenshot') : undefined
            const cover = i < 2 ? (shot?.path ?? p.coverImage) : undefined
            return (
              <li key={p.id} className="rounded-[8px] border border-line bg-surface p-5 md:p-8">
                <div className={`grid gap-8 ${cover ? 'lg:grid-cols-[1.15fr_1fr]' : ''}`}>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <StagePill stage={p.stage} />
                      <span className="text-sm text-muted">{p.tags.join(' · ')}</span>
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">{p.title}</h3>
                    <p className="mt-2 max-w-[60ch] text-muted">{p.tagline}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {p.metrics.map((m) => <li key={m} className="rounded-[6px] bg-bg px-3 py-1.5 text-sm">{m}</li>)}
                    </ul>
                  </div>
                  {cover && (
                    <Link href={`/projects/${p.slug}`} className="block overflow-hidden rounded-[6px] border border-line" tabIndex={-1} aria-hidden>
                      <Image src={cover} alt="" width={1200} height={750} sizes="(min-width: 1024px) 480px, 100vw" className="h-auto w-full object-cover" />
                    </Link>
                  )}
                </div>
                <div className="mt-7">
                  <SystemDiagram steps={p.pipeline} label={`${p.title} pipeline`} />
                </div>
                <div className="mt-6 flex flex-wrap gap-x-6">
                  <Link href={`/projects/${p.slug}`} className={textLink}>Case study<span className="sr-only">: {p.title}</span></Link>
                  {p.caseStudy.liveUrl && <a href={p.caseStudy.liveUrl} target="_blank" rel="noopener noreferrer" className={textLink}>Live site</a>}
                  {p.caseStudy.githubUrl && <a href={p.caseStudy.githubUrl} target="_blank" rel="noopener noreferrer" className={textLink}>Code</a>}
                  {!p.caseStudy.githubUrl && !p.caseStudy.liveUrl && <span className="inline-flex min-h-11 items-center text-muted">Private code — demo on request</span>}
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

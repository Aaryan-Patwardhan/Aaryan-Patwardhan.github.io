import { resume } from '@/lib/resume'
import { site } from '@/lib/profile'
import SystemDiagram, { DiagramKey } from '@/components/SystemDiagram'

// The pattern every system on this page follows.
const pattern = [
  { label: 'Documents and data', kind: 'input' as const },
  { label: 'AI reads and proposes', kind: 'ai' as const },
  { label: 'Rules verify the result', kind: 'rule' as const },
  { label: 'Doubts go to a person', kind: 'human' as const },
  { label: 'Saved, sent or acted on', kind: 'output' as const },
]

const btn = 'inline-flex min-h-12 items-center justify-center rounded-[6px] px-5 text-base font-semibold transition-colors'

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="drawing-grid border-b border-line">
      <div className="mx-auto max-w-[1160px] px-5 pb-16 pt-16 md:px-8 md:pb-24 md:pt-24">
        <p className="text-[15px] text-muted">{resume.title} · {resume.location}</p>
        <h1 id="hero-title" className="mt-4 max-w-[16ch] text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.025em] sm:text-6xl lg:text-7xl">
          I build AI systems that check their own work.
        </h1>
        <p className="mt-7 max-w-[56ch] text-lg text-muted md:text-xl">
          I&apos;m Aaryan Patwardhan. The AI does the reading, fixed rules check the result, and anything uncertain goes to a person — tested, measured and shipped to real users.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="#work" className={`${btn} bg-accent text-surface hover:opacity-90`}>See my work</a>
          <a href={site.resume} className={`${btn} border-[1.5px] border-ink hover:bg-ink hover:text-bg`}>Resume (PDF)</a>
          <a href={`mailto:${resume.email}`} className={`${btn} text-ink underline decoration-line underline-offset-4 hover:decoration-ink`}>{resume.email}</a>
        </div>

        <figure className="mt-16 rounded-[8px] border border-line bg-bg/80 p-5 backdrop-blur md:p-7">
          <figcaption className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
            <span className="font-semibold">How my systems work</span>
            <DiagramKey />
          </figcaption>
          <SystemDiagram steps={pattern} size="lg" label="How my systems work: documents and data, AI reads and proposes, rules verify, doubts go to a person, then saved or acted on" />
        </figure>
      </div>
    </section>
  )
}

import { learning, stack } from '@/lib/profile'

export default function Stack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="border-b border-line">
      <div className="mx-auto max-w-[1160px] px-5 py-16 md:px-8 md:py-24">
        <h2 id="stack-title" className="text-3xl font-semibold tracking-tight md:text-4xl">Stack</h2>
        <p className="mt-3 max-w-[60ch] text-muted">What I&apos;ve used in the projects on this page — and what I&apos;m learning next.</p>
        <div className="mt-10 grid gap-px overflow-hidden rounded-[8px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((g) => (
            <div key={g.group} className="bg-surface p-6">
              <h3 className="font-semibold">{g.group}</h3>
              <ul className="mt-3 space-y-1.5 text-[15px] text-muted">{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-[8px] border border-dashed border-accent p-6">
          <h3 className="font-semibold">Learning now</h3>
          <p className="mt-1 text-sm text-muted">From my six-month plan — being learned, not claimed.</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {learning.map((l) => <li key={l} className="rounded-[6px] bg-accent-soft px-3 py-1.5 text-[15px] text-ink">{l}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}

import { principles } from '@/lib/profile'

export default function Approach() {
  return (
    <section id="approach" aria-labelledby="approach-title" className="border-b border-line">
      <div className="mx-auto grid max-w-[1160px] gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <div>
          <h2 id="approach-title" className="text-3xl font-semibold tracking-tight md:text-4xl">How I build</h2>
          <p className="mt-3 text-muted">Four rules I hold every system to. You can check each one in the projects above.</p>
        </div>
        <ul className="grid gap-px overflow-hidden rounded-[8px] border border-line bg-line sm:grid-cols-2">
          {principles.map((p) => (
            <li key={p.title} className="bg-surface p-6">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-muted">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

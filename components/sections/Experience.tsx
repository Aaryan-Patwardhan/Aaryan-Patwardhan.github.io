import { resume } from '@/lib/resume'
import { certifications, hackathons } from '@/lib/profile'

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-b border-line">
      <div className="mx-auto max-w-[1160px] px-5 py-16 md:px-8 md:py-24">
        <h2 id="experience-title" className="text-3xl font-semibold tracking-tight md:text-4xl">Experience</h2>
        <ol className="mt-10 divide-y divide-line border-y border-line">
          {resume.experience.map((e) => (
            <li key={e.role + e.org} className="grid gap-4 py-8 md:grid-cols-[240px_1fr] md:gap-12">
              <div>
                <p className="font-semibold">{e.org}</p>
                <p className="text-sm text-muted">{e.period}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">{e.role}</h3>
                <ul className="mt-3 space-y-2 text-muted">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-3"><span aria-hidden className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" /><span>{b}</span></li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-semibold">Education</h3>
            {resume.education.map((e) => (
              <p key={e.degree} className="mt-3 text-muted"><span className="text-ink">{e.degree}</span><br />{e.institution}<br /><span className="text-sm">{e.period}</span></p>
            ))}
          </div>
          <div>
            <h3 className="font-semibold">Hackathons</h3>
            <ul className="mt-3 space-y-2 text-muted">{hackathons.map((h) => <li key={h}>{h}</li>)}</ul>
          </div>
          <div>
            <h3 className="font-semibold">Certifications</h3>
            <ul className="mt-3 space-y-2 text-muted">{certifications.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  )
}

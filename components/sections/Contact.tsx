import { resume } from '@/lib/resume'
import { site } from '@/lib/profile'

const link = 'inline-flex min-h-12 items-center font-semibold underline decoration-line underline-offset-4 hover:decoration-ink'

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="mx-auto max-w-[1160px] px-5 py-16 md:px-8 md:py-24">
        <h2 id="contact-title" className="max-w-[20ch] text-3xl font-semibold tracking-tight md:text-5xl">Let&apos;s build something that works.</h2>
        <p className="mt-4 max-w-[58ch] text-lg text-muted">
          Open to applied AI and backend internships, and to QuantaSharp projects. I reply within {resume.responseTime.replace('< ', '')}.
        </p>
        <p className="mt-8"><a href={`mailto:${resume.email}`} className="text-2xl font-semibold text-accent underline decoration-2 underline-offset-[6px] md:text-3xl">{resume.email}</a></p>
        <p className="mt-6 flex flex-wrap gap-x-8">
          <a href={resume.linkedin} target="_blank" rel="noopener noreferrer" className={link}>LinkedIn</a>
          <a href={resume.github} target="_blank" rel="noopener noreferrer" className={link}>GitHub</a>
          <a href={site.resume} className={link}>Resume (PDF)</a>
          <a href={site.quantasharp} target="_blank" rel="noopener noreferrer" className={link}>QuantaSharp</a>
        </p>
      </div>
    </section>
  )
}

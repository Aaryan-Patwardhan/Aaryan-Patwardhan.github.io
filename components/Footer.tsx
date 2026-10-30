import { resume } from '@/lib/resume'
import { site } from '@/lib/profile'

export default function Footer() {
  const link = 'inline-flex min-h-10 items-center hover:text-ink'
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1160px] flex-col gap-3 px-5 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8">
        <p>© {new Date().getFullYear()} {resume.name} · {resume.location}</p>
        <p className="flex flex-wrap gap-x-6">
          <a className={link} href={`mailto:${resume.email}`}>Email</a>
          <a className={link} href={resume.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className={link} href={resume.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className={link} href={site.quantasharp} target="_blank" rel="noopener noreferrer">QuantaSharp</a>
        </p>
      </div>
    </footer>
  )
}

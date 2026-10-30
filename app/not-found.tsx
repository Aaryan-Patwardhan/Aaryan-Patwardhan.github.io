import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[1160px] px-5 py-24 md:px-8">
      <p className="text-muted">Page not found</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">This page doesn&apos;t exist.</h1>
      <p className="mt-6"><Link href="/#work" className="inline-flex min-h-12 items-center font-semibold underline underline-offset-4">See my work</Link></p>
    </div>
  )
}

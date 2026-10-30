'use client'

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto max-w-[1160px] px-5 py-24 md:px-8">
      <h1 className="text-3xl font-semibold tracking-tight">Something went wrong loading this page.</h1>
      <button onClick={reset} className="mt-6 inline-flex min-h-12 items-center rounded-[6px] border-[1.5px] border-ink px-5 font-semibold">Try again</button>
    </div>
  )
}

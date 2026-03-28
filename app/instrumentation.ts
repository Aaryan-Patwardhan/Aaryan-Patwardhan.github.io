export async function register() {
  if (!process.env.NEXT_PUBLIC_SITE_URL) {
    console.error('[instrumentation] NEXT_PUBLIC_SITE_URL is not set')
  }
  if (process.env.NODE_ENV === 'production') {
    console.error(`[instrumentation] Portfolio live at ${process.env.NEXT_PUBLIC_SITE_URL}`)
  }
}

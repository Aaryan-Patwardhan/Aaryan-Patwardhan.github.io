import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import './globals.css'
import CursorDot from '@/components/layout/CursorDot'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Aaryan Patwardhan — AI Systems Engineer',
  description: 'I build systems that see, decide, and heal themselves. Computer vision, autonomous agents, and edge AI.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://localhost:3000'),
  openGraph: {
    title: 'Aaryan Patwardhan — AI Systems Engineer',
    description: 'I build systems that see, decide, and heal themselves.',
    images: ['/og-image.png'],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aaryan Patwardhan — AI Systems Engineer',
    images: ['/og-image.png']
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {process.env.NEXT_PUBLIC_UMAMI_ID ? <script defer src="https://analytics.umami.is/script.js" data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID} /> : null}
      </head>
      <body className="bg-[var(--bg)] text-[var(--text-primary)] antialiased overflow-x-hidden">
        <CursorDot />
        {children}
      </body>
    </html>
  )
}

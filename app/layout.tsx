import type { Metadata } from 'next'
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex-sans',
  display: 'swap'
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Aaryan Patwardhan — Applied AI Systems Engineer',
  description: 'Applied AI Systems Engineer and founder of QuantaSharp. I build AI systems that take repetitive work off people\'s plates — and show you anything they aren\'t sure about.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://localhost:3000'),
  openGraph: {
    title: 'Aaryan Patwardhan — Applied AI Systems Engineer',
    description: 'AI systems that take repetitive work off people\'s plates — and show you anything they aren\'t sure about.',
    images: ['/og-image.png'],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aaryan Patwardhan — Applied AI Systems Engineer',
    images: ['/og-image.png']
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`}>
      <head>
        {process.env.NEXT_PUBLIC_UMAMI_ID ? <script defer src="https://analytics.umami.is/script.js" data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID} /> : null}
      </head>
      <body className="antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-[6px] focus:bg-accent focus:px-4 focus:py-3 focus:text-surface">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

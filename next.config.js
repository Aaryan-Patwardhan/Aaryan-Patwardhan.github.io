/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://analytics.umami.is",
      "worker-src blob:",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob:",
      "connect-src 'self' https://analytics.umami.is"
    ].join('; ')
  }
]

const nextConfig = {
  experimental: {
    optimizePackageImports: ['three', '@react-three/fiber', '@react-three/drei', '@react-three/postprocessing']
  },
  transpilePackages: ['three'],
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920]
  },
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }]
  }
}

module.exports = nextConfig

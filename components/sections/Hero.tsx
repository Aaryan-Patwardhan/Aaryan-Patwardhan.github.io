'use client'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { resume } from '@/lib/resume'
import { useDeviceTier } from '@/hooks/useDeviceTier'
import NeuralNetworkFallback from '@/components/canvas/NeuralNetworkFallback'
import SceneLoader from '@/components/canvas/SceneLoader'
import AmbientBackground from '@/components/canvas/AmbientBackground'

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false })

export default function Hero() {
  const tier = useDeviceTier()

  return (
    <section id="hero" className="relative h-screen flex items-center overflow-hidden">
      {/* Ambient particle field — always visible, behind everything */}
      <div className="absolute inset-0">
        <AmbientBackground />
      </div>
      {/* 3D neural network or fallback */}
      <div className="absolute inset-0">
        {tier === 'low' ? (
          <NeuralNetworkFallback />
        ) : (
          <Suspense fallback={<SceneLoader />}>
            <Scene tier={tier} />
          </Suspense>
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/60 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.2 }}
        >
          <p className="font-mono text-xs text-[var(--accent)] tracking-widest mb-4 uppercase">
            AI Systems Engineer
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] leading-tight mb-4">
            {resume.name}
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-md leading-relaxed mb-8">
            {resume.tagline}
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-5 py-2.5 bg-[var(--accent)] text-[var(--bg)] text-sm font-mono rounded hover:bg-[var(--accent-glow)] transition-colors"
            >
              View Projects
            </a>
            <a
              href={resume.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-[var(--border)] text-[var(--text-secondary)] text-sm font-mono rounded hover:border-[var(--accent-dim)] hover:text-[var(--text-primary)] transition-colors"
            >
              GitHub ↗
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-10 bg-gradient-to-b from-[var(--accent)] to-transparent mx-auto"
        />
      </div>
    </section>
  )
}

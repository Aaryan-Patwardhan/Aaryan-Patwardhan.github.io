'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function PageLoader() {
  const [done, setDone] = useState(false)
  useEffect(() => { const t = setTimeout(() => setDone(true), 900); return () => clearTimeout(t) }, [])
  if (done) return null
  return (
    <motion.div
      className="fixed inset-0 z-[9998] bg-[var(--bg)] flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="font-mono text-xs text-[var(--text-dim)] tracking-widest animate-pulse">
        INITIALIZING
      </div>
    </motion.div>
  )
}

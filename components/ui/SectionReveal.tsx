'use client'
import { motion } from 'framer-motion'
import { useIntersection } from '@/hooks/useIntersection'

interface Props {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function SectionReveal({ children, delay = 0, className }: Props) {
  const { ref, isVisible } = useIntersection(0.1)

  return (
    <motion.section
      ref={ref as React.Ref<HTMLElement>}
      initial={{ opacity: 0, y: 24 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

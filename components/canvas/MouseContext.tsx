'use client'
import { createContext, useContext, useRef, useEffect } from 'react'

type MouseRef = React.MutableRefObject<{ x: number; y: number }>
const MouseContext = createContext<MouseRef | null>(null)

export function MouseProvider({ children }: { children: React.ReactNode }) {
  const mouseRef = useRef({ x: 0, y: 0 })
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      // Normalize bounds for Three.js (-1 to +1)
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])
  return <MouseContext.Provider value={mouseRef}>{children}</MouseContext.Provider>
}

export function useMouseRef() {
  const ctx = useContext(MouseContext)
  if (!ctx) throw new Error('useMouseRef must be used inside MouseProvider')
  return ctx
}

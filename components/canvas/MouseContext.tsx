'use client'
import { createContext, useContext, useRef } from 'react'

type MouseRef = React.MutableRefObject<{ x: number; y: number }>
const MouseContext = createContext<MouseRef | null>(null)

export function MouseProvider({ children }: { children: React.ReactNode }) {
  const mouseRef = useRef({ x: 0, y: 0 })
  return <MouseContext.Provider value={mouseRef}>{children}</MouseContext.Provider>
}

export function useMouseRef() {
  const ctx = useContext(MouseContext)
  if (!ctx) throw new Error('useMouseRef must be used inside MouseProvider')
  return ctx
}

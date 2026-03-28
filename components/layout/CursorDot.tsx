'use client'
import { useEffect, useRef, useState } from 'react'

export default function CursorDot() {
  const [isPointerFine, setIsPointerFine] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsPointerFine(window.matchMedia('(pointer: fine)').matches)
  }, [])

  useEffect(() => {
    if (!isPointerFine) return

    // Direct assignment in mousemove — fastest possible DOM update
    const onMove = (e: MouseEvent) => {
      // Use translate3d to force GPU compositing on its own layer
      dotRef.current!.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0)`
    }

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      setIsHovering(!!(el.closest('a,button,[role="button"]')))
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [isPointerFine])

  if (!isPointerFine) return null

  return (
    <div
      ref={dotRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        // Offset so dot is centred on pointer tip
        marginLeft: isHovering ? -10 : -5,
        marginTop:  isHovering ? -10 : -5,
        width:  isHovering ? 20 : 10,
        height: isHovering ? 20 : 10,
        borderRadius: '50%',
        // Solid ring style — NO mix-blend-mode so browser can GPU-layer this element
        backgroundColor: 'transparent',
        border: '2px solid #00d4ff',
        boxShadow: '0 0 6px #00d4ff88',
        pointerEvents: 'none',
        zIndex: 9999,
        // Force own GPU compositor layer — eliminates repaint cost entirely
        willChange: 'transform',
        transform: 'translate3d(-100px,-100px,0)',
        // Only size/border transitions, never position
        transition: 'width 0.1s, height 0.1s, margin 0.1s',
      }}
    />
  )
}

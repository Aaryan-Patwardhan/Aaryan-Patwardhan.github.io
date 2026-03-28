'use client'
import { useEffect, useRef, useState } from 'react'

export default function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null)
  const [isPointerFine, setIsPointerFine] = useState(false)

  useEffect(() => {
    setIsPointerFine(window.matchMedia('(pointer: fine)').matches)
  }, [])

  useEffect(() => {
    if (!isPointerFine) return

    let x = -100, y = -100
    let hovering = false
    let rafId: number

    const onMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
    }

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      hovering = !!(el.closest('a,button,[role="button"]'))
    }

    const tick = () => {
      const el = dotRef.current
      if (el) {
        const size   = hovering ? 20 : 10
        const offset = size / 2
        el.style.transform = `translate3d(${x - offset}px,${y - offset}px,0)`
        el.style.width      = `${size}px`
        el.style.height     = `${size}px`
      }
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(rafId)
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
        width: 10,
        height: 10,
        borderRadius: '50%',
        backgroundColor: 'transparent',
        border: '2px solid #00d4ff',
        boxShadow: '0 0 6px #00d4ff88',
        pointerEvents: 'none',
        zIndex: 9999,
        willChange: 'transform',
        transform: 'translate3d(-100px,-100px,0)',
        transition: 'width 0.1s, height 0.1s',
      }}
    />
  )
}

'use client'
import { useEffect, useRef } from 'react'

// Lightweight canvas-based ambient particle field — runs at 60fps via RAF
// No React state updates after mount, so it never re-renders
export default function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = canvas.offsetWidth
    let H = canvas.offsetHeight
    canvas.width  = W
    canvas.height = H

    const onResize = () => {
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width  = W
      canvas.height = H
      init()
    }
    window.addEventListener('resize', onResize)

    // Particle type
    type P = {
      x: number; y: number; vx: number; vy: number
      r: number; alpha: number; da: number
    }

    const COUNT = 35
    let particles: P[] = []

    const rand = (min: number, max: number) => Math.random() * (max - min) + min

    const PROX = 100  // reduced from 130 → fewer pairs checked

    const init = () => {
      particles = Array.from({ length: COUNT }, () => ({
        x:     rand(0, W),
        y:     rand(0, H),
        vx:    rand(-0.18, 0.18),
        vy:    rand(-0.12, 0.12),
        r:     rand(1, 2.5),
        alpha: rand(0.1, 0.5),
        da:    rand(-0.002, 0.002),
      }))
    }
    init()

    let rafId: number
    const ACCENT = '0, 212, 255'   // --accent #00d4ff components
    const DIM    = '0, 170, 255'   // slightly dimmer variant

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      // Draw connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < PROX) {
            const opacity = (1 - dist / PROX) * 0.12
            ctx.strokeStyle = `rgba(${DIM}, ${opacity})`
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        p.x  += p.vx
        p.y  += p.vy
        p.alpha += p.da
        if (p.alpha < 0.05 || p.alpha > 0.55) p.da *= -1
        if (p.x < -10) p.x = W + 10
        if (p.x > W + 10) p.x = -10
        if (p.y < -10) p.y = H + 10
        if (p.y > H + 10) p.y = -10

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${ACCENT}, ${p.alpha})`
        ctx.fill()
      }

      rafId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}

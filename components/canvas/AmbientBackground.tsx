'use client'
import { useEffect, useRef } from 'react'

// Lightweight canvas-based ambient particle field
// Optimised: spatial grid proximity check (O(n) vs O(n²)), throttled to 30fps
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

    type P = {
      x: number; y: number; vx: number; vy: number
      r: number; alpha: number; da: number
    }

    // Reduced particle count for perf — still looks great
    const COUNT = 24
    const PROX  = 90
    let particles: P[] = []

    const rand = (min: number, max: number) => Math.random() * (max - min) + min

    const init = () => {
      particles = Array.from({ length: COUNT }, () => ({
        x:     rand(0, W),
        y:     rand(0, H),
        vx:    rand(-0.15, 0.15),
        vy:    rand(-0.10, 0.10),
        r:     rand(1, 2),
        alpha: rand(0.1, 0.45),
        da:    rand(-0.0015, 0.0015),
      }))
    }
    init()

    let rafId: number
    let lastTime = 0
    const FRAME_MS = 1000 / 30   // cap at 30fps — invisible at this scale

    const ACCENT = '0, 212, 255'
    const DIM    = '0, 170, 255'

    // Spatial grid for O(n) proximity — cells sized to PROX
    const buildGrid = () => {
      const cellSize = PROX
      const cols = Math.ceil(W / cellSize) + 1
      const grid: P[][] = Array.from({ length: cols * Math.ceil(H / cellSize + 1) }, () => [])
      particles.forEach(p => {
        const ci = Math.floor(p.x / cellSize)
        const ri = Math.floor(p.y / cellSize)
        const idx = ri * cols + ci
        if (idx >= 0 && idx < grid.length) grid[idx].push(p)
      })
      return { grid, cols, cellSize }
    }

    const draw = (now: number) => {
      rafId = requestAnimationFrame(draw)
      if (now - lastTime < FRAME_MS) return
      lastTime = now

      ctx.clearRect(0, 0, W, H)

      // Move particles first
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.alpha += p.da
        if (p.alpha < 0.05 || p.alpha > 0.5) p.da *= -1
        if (p.x < -10) p.x = W + 10
        if (p.x > W + 10) p.x = -10
        if (p.y < -10) p.y = H + 10
        if (p.y > H + 10) p.y = -10
      }

      // Spatial grid proximity lines
      const { grid, cols, cellSize } = buildGrid()
      const checked = new Set<string>()

      for (const p of particles) {
        const ci = Math.floor(p.x / cellSize)
        const ri = Math.floor(p.y / cellSize)
        // Only check adjacent cells — O(n * 9) max
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            const ni = (ri + dr) * cols + (ci + dc)
            if (ni < 0 || ni >= grid.length) continue
            for (const q of grid[ni]) {
              if (q === p) continue
              const key = p < q
                ? `${particles.indexOf(p)}-${particles.indexOf(q)}`
                : `${particles.indexOf(q)}-${particles.indexOf(p)}`
              if (checked.has(key)) continue
              checked.add(key)
              const dx = p.x - q.x, dy = p.y - q.y
              const dist = Math.sqrt(dx * dx + dy * dy)
              if (dist < PROX) {
                const opacity = (1 - dist / PROX) * 0.10
                ctx.strokeStyle = `rgba(${DIM}, ${opacity})`
                ctx.lineWidth = 0.5
                ctx.beginPath()
                ctx.moveTo(p.x, p.y)
                ctx.lineTo(q.x, q.y)
                ctx.stroke()
              }
            }
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${ACCENT}, ${p.alpha})`
        ctx.fill()
      }
    }

    rafId = requestAnimationFrame(draw)

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

'use client'
import { Canvas, type CanvasProps } from '@react-three/fiber'
import { Suspense } from 'react'
import NeuralNetwork from './NeuralNetwork'
import Effects from './Effects'
import { MouseProvider } from './MouseContext'
import { CanvasErrorBoundary } from './CanvasErrorBoundary'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import type { DeviceTier } from '@/types'

interface Props {
  tier: DeviceTier
}

export default function Scene({ tier }: Props) {
  const reducedMotion = useReducedMotion()

  const canvasProps: Partial<CanvasProps> = {
    camera: { fov: 60, position: [0, 0, 8], near: 0.1, far: 100 },
    // Cap DPR at 1.5 even on high-tier — retina 2x doubles GPU load for negligible gain
    dpr: [1, tier === 'low' ? 1 : 1.5],
    frameloop: reducedMotion ? 'never' : 'always',
    // Increase min performance headroom — R3F will auto-scale DPR down faster under load
    performance: { min: 0.6 },
    // Disable antialias — bloom makes it invisible but AA adds ~10-15% GPU cost
    gl: { antialias: false, powerPreference: 'high-performance' },
  }

  return (
    <MouseProvider>
      <CanvasErrorBoundary>
        <Canvas
          {...canvasProps}
          role="img"
          aria-label="Interactive neural network visualization representing AI system architecture"
          className="absolute inset-0 pointer-events-none"
        >
          <fog attach="fog" args={['#050a0f', 10, 20]} />
          <ambientLight intensity={0.2} />
          <pointLight position={[0, 0, 5]} intensity={1} color="#00d4ff" />
          <Suspense fallback={null}>
            {!reducedMotion && <NeuralNetwork />}
            {tier !== 'low' && !reducedMotion && <Effects />}
          </Suspense>
        </Canvas>
      </CanvasErrorBoundary>
    </MouseProvider>
  )
}

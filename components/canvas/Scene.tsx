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
    dpr: tier === 'high' ? [1, 2] : [1, 1],
    frameloop: reducedMotion ? 'never' : 'always',
    performance: { min: tier === 'mid' ? 0.5 : 0.75 }
  }

  return (
    <MouseProvider>
      <CanvasErrorBoundary>
        <Canvas
          {...canvasProps}
          role="img"
          aria-label="Interactive neural network visualization representing AI system architecture"
          className="absolute inset-0"
        >
          <fog attach="fog" args={['#050a0f', 10, 20]} />
          <ambientLight intensity={0.2} />
          <pointLight position={[0, 0, 5]} intensity={1} color="#00d4ff" />
          <Suspense fallback={null}>
            {!reducedMotion && <NeuralNetwork />}
            {tier === 'high' && !reducedMotion && <Effects />}
          </Suspense>
        </Canvas>
      </CanvasErrorBoundary>
    </MouseProvider>
  )
}

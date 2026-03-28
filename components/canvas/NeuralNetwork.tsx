'use client'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Group } from 'three'
import { generateNodes, computeKNearestEdges } from '@/lib/neural-graph'
import { NEURAL } from '@/lib/constants'
import NeuralNodes from './NeuralNodes'
import NeuralEdges from './NeuralEdges'
import MouseRepulsion from './MouseRepulsion'
import type { Node3D } from '@/types'

export default function NeuralNetwork() {
  const groupRef = useRef<Group>(null)

  const { initialNodes, edges } = useMemo(() => {
    const initialNodes = generateNodes(NEURAL.NODE_COUNT, NEURAL.SPHERE_RADIUS)
    const edges = computeKNearestEdges(initialNodes, NEURAL.K_NEAREST)
    return { initialNodes, edges }
  }, [])

  const nodesRef = useRef<Node3D[]>(initialNodes)

  // Slow ambient rotation around Y axis
  useFrame(({ clock }) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.08
    groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.04) * 0.15
  })

  return (
    <group ref={groupRef}>
      <NeuralNodes nodesRef={nodesRef} count={NEURAL.NODE_COUNT} />
      <NeuralEdges nodesRef={nodesRef} edges={edges} />
      <MouseRepulsion nodesRef={nodesRef} />
    </group>
  )
}

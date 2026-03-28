'use client'
import { useMemo } from 'react'
import { BufferGeometry } from 'three/src/core/BufferGeometry.js'
import { Float32BufferAttribute } from 'three/src/core/BufferAttribute.js'
import { useFrame } from '@react-three/fiber'
import type { Node3D, Edge3D } from '@/types'

interface Props {
  nodesRef: React.MutableRefObject<Node3D[]>
  edges: Edge3D[]
}

export default function NeuralEdges({ nodesRef, edges }: Props) {
  const geometry = useMemo(() => {
    const g = new BufferGeometry()
    const positions = new Float32Array(edges.length * 6)
    g.setAttribute('position', new Float32BufferAttribute(positions, 3))
    return g
  }, [edges])

  useFrame(() => {
    const positions = geometry.attributes.position.array as Float32Array
    const nodes = nodesRef.current
    edges.forEach((edge, i) => {
      const from = nodes[edge.from].position
      const to = nodes[edge.to].position
      const offset = i * 6
      positions[offset]     = from[0]; positions[offset + 1] = from[1]; positions[offset + 2] = from[2]
      positions[offset + 3] = to[0];   positions[offset + 4] = to[1];   positions[offset + 5] = to[2]
    })
    geometry.attributes.position.needsUpdate = true
  })

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color="#00aaff" transparent opacity={0.25} />
    </lineSegments>
  )
}

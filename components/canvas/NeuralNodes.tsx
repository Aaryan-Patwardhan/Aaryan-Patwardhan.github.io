'use client'
import { useRef } from 'react'
import { InstancedMesh } from 'three/src/objects/InstancedMesh.js'
import { Matrix4 } from 'three/src/math/Matrix4.js'
import { useFrame } from '@react-three/fiber'
import type { Node3D } from '@/types'
import { NEURAL } from '@/lib/constants'

interface Props {
  nodesRef: React.MutableRefObject<Node3D[]>
  count: number
}

const matrix = new Matrix4()

export default function NeuralNodes({ nodesRef, count }: Props) {
  const meshRef = useRef<InstancedMesh>(null)

  useFrame(() => {
    const mesh = meshRef.current
    if (!mesh) return
    nodesRef.current.forEach((node, i) => {
      matrix.setPosition(...node.position)
      mesh.setMatrixAt(i, matrix)
    })
    mesh.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[NEURAL.NODE_SIZE, 8, 8]} />
      <meshStandardMaterial
        color="#00d4ff"
        emissive="#00d4ff"
        emissiveIntensity={2}
        roughness={0}
        metalness={0.5}
      />
    </instancedMesh>
  )
}

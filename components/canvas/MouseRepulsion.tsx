'use client'
import { useFrame, useThree } from '@react-three/fiber'
import { Vector2 } from 'three/src/math/Vector2.js'
import { Vector3 } from 'three/src/math/Vector3.js'
import { Raycaster } from 'three/src/core/Raycaster.js'
import type { Node3D } from '@/types'
import { NEURAL } from '@/lib/constants'
import { useMouseRef } from './MouseContext'

interface Props {
  nodesRef: React.MutableRefObject<Node3D[]>
}

const raycaster = new Raycaster()
const rayOrigin = new Vector3()
const rayDir = new Vector3()
const nodePos = new Vector3()
const repulsion = new Vector3()
const mouseVec = new Vector2()

export default function MouseRepulsion({ nodesRef }: Props) {
  const { camera } = useThree()
  const mouseRef = useMouseRef()

  useFrame(() => {
    mouseVec.set(mouseRef.current.x, mouseRef.current.y)
    raycaster.setFromCamera(mouseVec, camera)
    raycaster.ray.origin.toArray(rayOrigin.toArray())
    raycaster.ray.direction.toArray(rayDir.toArray())
    
    nodesRef.current.forEach(node => {
      nodePos.set(...node.position)
      const t = nodePos.clone().sub(raycaster.ray.origin).dot(raycaster.ray.direction)
      const closest = raycaster.ray.origin.clone().add(raycaster.ray.direction.clone().multiplyScalar(t))
      const dist = nodePos.distanceTo(closest)

      if (dist < NEURAL.REPULSION_RADIUS) {
        const force = (NEURAL.REPULSION_RADIUS - dist) / NEURAL.REPULSION_RADIUS
        repulsion.copy(nodePos).sub(closest).normalize().multiplyScalar(force * 0.8)
        node.position[0] += repulsion.x
        node.position[1] += repulsion.y
        node.position[2] += repulsion.z
      }

      node.position[0] += (node.origin[0] - node.position[0]) * NEURAL.LERP_SPEED
      node.position[1] += (node.origin[1] - node.position[1]) * NEURAL.LERP_SPEED
      node.position[2] += (node.origin[2] - node.position[2]) * NEURAL.LERP_SPEED
    })
  })

  return null
}

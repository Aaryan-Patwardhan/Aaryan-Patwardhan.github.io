import type { Node3D, Edge3D } from '@/types'

export function generateNodes(count: number, radius: number): Node3D[] {
  const nodes: Node3D[] = []
  let attempts = 0
  const maxAttempts = count * 20

  while (nodes.length < count && attempts < maxAttempts) {
    const x = (Math.random() * 2 - 1) * radius
    const y = (Math.random() * 2 - 1) * radius
    const z = (Math.random() * 2 - 1) * radius

    if (x * x + y * y + z * z <= radius * radius) {
      const id = nodes.length
      nodes.push({
        id,
        position: [x, y, z],
        origin: [x, y, z]
      })
    }
    attempts++
  }

  return nodes
}

export function computeKNearestEdges(nodes: Node3D[], k: number): Edge3D[] {
  const edges: Edge3D[] = []
  const edgeSet = new Set<string>()

  for (let i = 0; i < nodes.length; i++) {
    const distances: { index: number; dist: number }[] = []

    for (let j = 0; j < nodes.length; j++) {
      if (i === j) continue
      const [x1, y1, z1] = nodes[i].position
      const [x2, y2, z2] = nodes[j].position
      const dist = Math.sqrt(
        (x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2
      )
      distances.push({ index: j, dist })
    }

    distances.sort((a, b) => a.dist - b.dist)
    const kNearest = distances.slice(0, k)

    for (const neighbor of kNearest) {
      const edgeKey = [Math.min(i, neighbor.index), Math.max(i, neighbor.index)].join('-')
      if (!edgeSet.has(edgeKey)) {
        edgeSet.add(edgeKey)
        edges.push({ from: i, to: neighbor.index })
      }
    }
  }

  return edges
}

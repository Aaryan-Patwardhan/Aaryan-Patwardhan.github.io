'use client'
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { Vector2 } from 'three/src/math/Vector2.js'
import { NEURAL } from '@/lib/constants'

export default function Effects() {
  return (
    <EffectComposer>
      <Bloom
        intensity={NEURAL.BLOOM_INTENSITY}
        luminanceThreshold={0.1}
        luminanceSmoothing={0.9}
        blendFunction={BlendFunction.ADD}
      />
      <ChromaticAberration
        blendFunction={BlendFunction.NORMAL}
        offset={new Vector2(0.0005, 0.0005)}
      />
    </EffectComposer>
  )
}

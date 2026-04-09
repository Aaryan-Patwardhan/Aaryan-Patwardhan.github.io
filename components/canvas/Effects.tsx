'use client'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { NEURAL } from '@/lib/constants'

// ChromaticAberration removed — expensive post-process pass with minimal visual benefit.
// Bloom retained at reduced intensity.
export default function Effects() {
  return (
    <EffectComposer multisampling={0}>
      <Bloom
        intensity={NEURAL.BLOOM_INTENSITY}
        luminanceThreshold={0.15}
        luminanceSmoothing={0.9}
        blendFunction={BlendFunction.ADD}
        mipmapBlur
      />
    </EffectComposer>
  )
}

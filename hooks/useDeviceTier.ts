'use client'
import { useEffect, useState } from 'react'
import type { DeviceTier } from '@/types'

export function useDeviceTier(): DeviceTier {
  const [tier, setTier] = useState<DeviceTier>('high')

  useEffect(() => {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') as WebGLRenderingContext | null
    const renderer = (gl?.getParameter(gl.RENDERER) as string | undefined) ?? ''
    const cores = navigator.hardwareConcurrency ?? 4
    const isMobile = window.innerWidth < 768 || 'ontouchstart' in window

    const isLowGPU = /intel|adreno 5|mali-4|mali-t/i.test(renderer)
    const isHighGPU = /rtx|rx [5-9]|gtx 10[6-9]|gtx [2-9]/i.test(renderer)

    if (isMobile && isLowGPU) setTier('low')
    else if (isMobile || (cores <= 4 && !isHighGPU)) setTier('mid')
    else setTier('high')
  }, [])

  return tier
}

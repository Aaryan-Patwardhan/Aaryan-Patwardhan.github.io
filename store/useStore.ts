'use client'
import { create } from 'zustand'

interface StoreState {
  activeSection: string
  setActiveSection: (section: string) => void
}

export const useStore = create<StoreState>((set) => ({
  activeSection: 'hero',
  setActiveSection: (section) => set({ activeSection: section })
}))

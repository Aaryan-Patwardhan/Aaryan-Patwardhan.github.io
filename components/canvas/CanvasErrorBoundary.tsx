'use client'
import { Component, type ReactNode } from 'react'

interface Props { children: ReactNode }
interface State { hasError: boolean }

export class CanvasErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    console.error('[CanvasErrorBoundary] WebGL context error:', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex items-center justify-center opacity-20">
          <NeuralNetworkFallbackSVG />
        </div>
      )
    }
    return this.props.children
  }
}

// Inline SVG fallback — static neural net snapshot
function NeuralNetworkFallbackSVG() {
  return (
    <svg viewBox="0 0 400 400" className="w-64 h-64 opacity-40">
      <circle cx="200" cy="100" r="4" fill="#00d4ff" />
      <circle cx="120" cy="200" r="4" fill="#00d4ff" />
      <circle cx="280" cy="200" r="4" fill="#00d4ff" />
      <circle cx="160" cy="300" r="4" fill="#00d4ff" />
      <circle cx="240" cy="300" r="4" fill="#00d4ff" />
      <line x1="200" y1="100" x2="120" y2="200" stroke="#00d4ff" strokeWidth="0.5" opacity="0.4" />
      <line x1="200" y1="100" x2="280" y2="200" stroke="#00d4ff" strokeWidth="0.5" opacity="0.4" />
      <line x1="120" y1="200" x2="160" y2="300" stroke="#00d4ff" strokeWidth="0.5" opacity="0.4" />
      <line x1="280" y1="200" x2="240" y2="300" stroke="#00d4ff" strokeWidth="0.5" opacity="0.4" />
    </svg>
  )
}

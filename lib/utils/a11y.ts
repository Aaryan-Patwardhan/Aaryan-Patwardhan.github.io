export function trapFocus(element: HTMLElement) {
  const focusable = element.querySelectorAll<HTMLElement>(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
  const first = focusable[0]
  const last = focusable[focusable.length - 1]

  function handleKeydown(e: KeyboardEvent) {
    if (e.key !== 'Tab') return
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault()
        last.focus()
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
  }

  element.addEventListener('keydown', handleKeydown)
  return () => element.removeEventListener('keydown', handleKeydown)
}

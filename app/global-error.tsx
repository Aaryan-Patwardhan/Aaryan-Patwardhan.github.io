'use client'
export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body style={{ background: '#050a0f', color: '#e8f4f8', fontFamily: 'monospace', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#5a8a99', marginBottom: '16px' }}>Root system fault.</p>
          <button onClick={reset} style={{ color: '#00d4ff', cursor: 'pointer', background: 'none', border: 'none', fontSize: '14px', textDecoration: 'underline' }}>
            Reinitialize
          </button>
        </div>
      </body>
    </html>
  )
}

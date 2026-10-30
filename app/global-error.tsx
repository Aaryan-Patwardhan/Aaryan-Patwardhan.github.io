'use client'
export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ background: '#F4F6F9', color: '#0B1220', fontFamily: 'system-ui, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>Something went wrong loading this page.</p>
          <button onClick={reset} style={{ minHeight: '48px', padding: '0 20px', border: '1.5px solid #0B1220', borderRadius: '6px', background: 'transparent', fontWeight: 600, cursor: 'pointer' }}>
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}

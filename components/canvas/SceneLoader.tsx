export default function SceneLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full border border-[var(--accent)] opacity-20 animate-ping" />
        <div className="absolute inset-2 rounded-full border border-[var(--accent)] opacity-40 animate-pulse" />
      </div>
    </div>
  )
}

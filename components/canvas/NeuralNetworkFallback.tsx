export default function NeuralNetworkFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <svg viewBox="-5 -5 10 10" className="w-[min(80vw,600px)] h-[min(80vw,600px)] opacity-25">
        {[
          [0,0],[2,1],[-2,1],[1,-2],[-1,-2],[2,-1],[-2,-1],[0,2],[0,-3],[3,0],[-3,0]
        ].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r="0.12" fill="#00d4ff" />
        ))}
        {[
          [[0,0],[2,1]],[[0,0],[-2,1]],[[0,0],[1,-2]],[[0,0],[-1,-2]],
          [[2,1],[3,0]],[[2,1],[0,2]],[[-2,1],[-3,0]],[[-2,1],[0,2]],
          [[1,-2],[0,-3]],[[-1,-2],[0,-3]]
        ].map(([[x1,y1],[x2,y2]],i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#00d4ff" strokeWidth="0.02" opacity="0.4" />
        ))}
      </svg>
    </div>
  )
}

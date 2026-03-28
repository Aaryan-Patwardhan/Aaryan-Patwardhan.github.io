import type { TerminalSession } from '@/types'

export const terminalSessions: TerminalSession[] = [
  {
    projectId: "sentinel-mesh",
    title: "sentinel-mesh — live inference",
    lines: [
      { type: "command", text: "$ python main.py --mode live --device cuda:0" },
      { type: "output",  text: "Loading YOLOv8n... CUDA:0 ✓  [imgsz=480, conf=0.45]" },
      { type: "output",  text: "Loading Qwen2.5-1.5B Q4_K_M via llama-cpp... CUDA:0 ✓" },
      { type: "output",  text: "Pre-warming LLM with dummy inference... done in 1.2s" },
      { type: "output",  text: "WebSocket server ready on ws://0.0.0.0:8765" },
      { type: "dim",     text: "─────────────────────────────────────────────────" },
      { type: "success", text: "[DETECT]  person  conf=0.91  zone=7  → tier: HIGH" },
      { type: "output",  text: "[GATE]    conf ≥ 0.88 — LLM debate bypassed" },
      { type: "output",  text: "[DISPATCH] Drone-3 → Zone-7  ETA: 42s" },
      { type: "dim",     text: "[SHADOW]  Pre-positioning Drone-1 to Zone-4 (predictive)" },
      { type: "success", text: "[DETECT]  person  conf=0.74  zone=2  → tier: MID" },
      { type: "output",  text: "[DEBATE]  Agent-A: Dispatch Drone-2. Confidence adequate." },
      { type: "output",  text: "[DEBATE]  Agent-B: Confirmed. No counter-indicators." },
      { type: "output",  text: "[DISPATCH] Drone-2 → Zone-2  ETA: 28s" },
      { type: "dim",     text: "[GHOST]   Drone-5 offline → auto-reassigning to Drone-6" },
      { type: "success", text: "[HEAL]    Fleet restored. Active drones: 5/5" }
    ]
  },
  {
    projectId: "ghost-admin",
    title: "ghost-admin — healing cycle",
    lines: [
      { type: "command", text: "$ python agent.py --watch /var/log/syslog" },
      { type: "output",  text: "MAPE-K loop initialized. Monitoring active." },
      { type: "dim",     text: "[MONITOR] CPU: 12%  MEM: 4.2GB/16GB  DISK: 67%" },
      { type: "error",   text: "[ALERT]   nginx: upstream timed out (110) — 47 occurrences" },
      { type: "output",  text: "[ANALYZE] Loading Qwen2.5... classifying incident..." },
      { type: "output",  text: "[ANALYZE] Root cause: connection pool exhaustion (confidence: 0.94)" },
      { type: "output",  text: "[PLAN]    Remediation: increase worker_connections, reload nginx" },
      { type: "success", text: "[EXECUTE] nginx reload → exit 0" },
      { type: "success", text: "[VERIFY]  upstream timeout rate: 47/min → 0/min  ✓" },
      { type: "dim",     text: "[KNOWLEDGE] Incident logged. Pattern stored for future detection." }
    ]
  }
]

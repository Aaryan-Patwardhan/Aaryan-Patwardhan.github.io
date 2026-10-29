import type { TerminalSession } from '@/types'

// Illustrative logs of each project's real flow. No numbers that weren't measured.
export const terminalSessions: TerminalSession[] = [
  {
    projectId: "sentinel-mesh",
    title: "sentinel-mesh — demo run (recorded video, simulated fleet)",
    lines: [
      { type: "command", text: "$ python main.py   # demo on recorded video" },
      { type: "output",  text: "Loading YOLOv8 on CUDA... ✓" },
      { type: "output",  text: "Loading two local LLM agents (Qwen2.5 via llama-cpp-python)... ✓" },
      { type: "output",  text: "Simulated fleet ready · map streaming over WebSocket" },
      { type: "dim",     text: "─────────────────────────────────────────────────" },
      { type: "success", text: "[DETECT]   high confidence → dispatch directly" },
      { type: "output",  text: "[DISPATCH] nearest drone → incident zone (geofence ok)" },
      { type: "success", text: "[DETECT]   unclear detection → send to debate" },
      { type: "output",  text: "[DEBATE]   Agent A: argues for dispatch" },
      { type: "output",  text: "[DEBATE]   Agent B: argues against" },
      { type: "output",  text: "[DECIDE]   dispatch approved → shown on the live map" },
      { type: "dim",     text: "# illustrative log of the demo flow" }
    ]
  },
  {
    projectId: "aura",
    title: "aura — simulator run",
    lines: [
      { type: "command", text: "$ docker compose up --build" },
      { type: "output",  text: "Starting ingestion... fastapi on :8000 ✓" },
      { type: "output",  text: "Starting redis session manager... ✓" },
      { type: "output",  text: "Starting session finalizer worker... ✓" },
      { type: "output",  text: "Starting dashboard... react on :3000 ✓" },
      { type: "dim",     text: "─────────────────────────────────────────────────" },
      { type: "command", text: "$ python simulator/radius_simulator.py --scenario bandwidth_fraud.json" },
      { type: "output",  text: "[SIM]  Accounting-Start  user=s.mehta@college.edu  AP=LH-101-AP2" },
      { type: "output",  text: "[INGEST]  session opened  room=LH-101  connect_time=09:01:12" },
      { type: "output",  text: "[SIM]  Accounting-Start  user=a.sharma@college.edu  AP=LH-101-AP1" },
      { type: "dim",     text: "... 28 more students join LH-101 ..." },
      { type: "output",  text: "[SIM]  Accounting-Stop   user=s.mehta@college.edu  bytes_dl=612MB" },
      { type: "output",  text: "[FINALIZE] duration=48min  threshold=75% ✓  PRESENT" },
      { type: "error",   text: "[FOCUS]   proxy_risk_score=0.87  → FLAGGED (streaming pattern)" },
      { type: "success", text: "[DB]  attendance_sessions written → PostgreSQL" },
      { type: "dim",     text: "[DASHBOARD]  flagged session visible → localhost:3000/flagged" }
    ]
  }
]

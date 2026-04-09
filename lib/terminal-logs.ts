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
      { type: "command", text: "$ python daemon/main.py" },
      { type: "output",  text: "Ghost-Admin v1.0.0 — MAPE-K daemon initialized" },
      { type: "dim",     text: "[DETECT]  RAM slope: +3.2%/poll over 60s window — trigger" },
      { type: "output",  text: "[ISOLATE] PID 4821 — data_ingester — not whitelisted ✓" },
      { type: "output",  text: "[PROFILE] Baseline P95: 42.1% | Current: 74.8% — anomalous" },
      { type: "output",  text: "[EXTRACT] Fusing: RAM, CPU, file handles, ancestry, logs, RAG..." },
      { type: "dim",     text: "[RAG]     Retrieved 2 similar incidents from memory index" },
      { type: "output",  text: "[REASON]  llama3.2:3b classifying intent..." },
      { type: "error",   text: "[REASON]  intent: LEAKING  confidence: 0.91" },
      { type: "output",  text: "[EXECUTE] Step 1: SIGTERM → still running after 10s" },
      { type: "output",  text: "[EXECUTE] Step 2: cgroup memory cap → still running after 30s" },
      { type: "output",  text: "[EXECUTE] Step 3: SIGSTOP → still running after 60s" },
      { type: "output",  text: "[FORENSIC] gcore dump → /var/ghost-admin/dumps/4821_1743259391.core" },
      { type: "error",   text: "[EXECUTE] Step 4: SIGKILL → PID 4821 terminated" },
      { type: "success", text: "[AUDIT]   JSONL event written → audit.jsonl" },
      { type: "dim",     text: "[AUDIT]   Post-mortem → /var/ghost-admin/reports/2026-04-07_4821.md" }
    ]
  },
  {
    projectId: "aura",
    title: "aura — RADIUS ingestion",
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
  },
  {
    projectId: "invoice-poc",
    title: "invoice-poc — extraction pipeline",
    lines: [
      { type: "command", text: "$ python test_extraction.py samples/sleekbill.png" },
      { type: "output",  text: "🧾 Invoice Extraction Test — 1 file(s)" },
      { type: "dim",     text: "─────────────────────────────────────────────────" },
      { type: "output",  text: "[INFO]   Vision pass — page 1..." },
      { type: "output",  text: "[INFO]     Pass 1 (header) OK — vendor=Sorina TEST 123" },
      { type: "output",  text: "[INFO]     Pass 2 (items) OK — 4 items found" },
      { type: "success", text: "[INFO]     Confidence: 100%   Path: VISION" },
      { type: "dim",     text: "─────────────────────────────────────────────────" },
      { type: "success", text: "  vendor         Sorina TEST 123  |  gst: 12345671111111111" },
      { type: "success", text: "  invoice        X33  |  date: 2018-02-21  |  due: 2018-03-03" },
      { type: "success", text: "  buyer          Ab Company  |  gstin: 09AAAMFC0376K1Z4" },
      { type: "success", text: "  shipping       truck  |  waybill: 234  |  LR: B256" },
      { type: "success", text: "  total_amount   ₹27,425  |  tax: ₹3,454.90  |  disc: ₹1,730" },
      { type: "output",  text: "  line items     solvent · detergent · poly cloth · shipping" },
      { type: "dim",     text: "  Core fields: 6/6  |  Line items: 4  |  Tax rows: 2" },
      { type: "success", text: "[INFO] Saved → row_id=1" },
      { type: "dim",     text: "All inference ran locally. Zero bytes sent to cloud." }
    ]
  }
]

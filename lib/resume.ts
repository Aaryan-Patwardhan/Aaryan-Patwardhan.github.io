import type { ResumeData } from '@/types'

export const resume: ResumeData = {
  name: "Aaryan Patwardhan",
  title: "AI Systems Engineer",
  tagline: "I build systems that see, decide, and heal themselves.",
  bio: "B.E. Information Technology student at SPPU (2027). I design autonomous AI pipelines — from real-time computer vision at 55fps to self-healing server daemons and passive attendance intelligence. I work at the intersection of deep learning, systems design, and edge inference.",
  location: "Pune, India",
  timezone: "IST (UTC+5:30)",
  email: "hello@aaryanpatwardhan.dev",
  github: "https://github.com/Aaryan-Patwardhan",
  linkedin: "https://linkedin.com/in/aaryan-patwardhan",
  availableForWork: true,
  preferredEngagement: "freelance",
  responseTime: "< 24 hours",
  experience: [
    {
      role: "AI Core Lead",
      org: "SentinelMesh — INSPIRON 5.0 (CSI COEP)",
      period: "2026",
      bullets: [
        "Designed MAPE-K autonomic loop for self-healing autonomous drone fleet",
        "YOLOv8n at 55fps on RTX 3050 Ti with dual CUDA co-inference (vision + LLM)",
        "Built Adversarial Debate Engine: Agent-A Dispatcher vs Agent-B Skeptic before any dispatch",
        "Implemented confidence tier gating — LLM bypassed at conf ≥ 0.88 for ~50ms dispatch"
      ]
    },
    {
      role: "Systems Engineer",
      org: "Ghost-Admin — Autonomous Server Healing Daemon",
      period: "2026",
      bullets: [
        "Built 7-stage MAPE-K closed-loop: trend-based pre-detection, behavioral fingerprinting, multi-signal context fusion, semantic intent classification, graceful degradation ladder, pre-kill forensic dumps, and SIEM-ready JSONL audit log",
        "llama3.2:3b via Ollama (CUDA) classifies process intent across 5 categories including UNDER_ATTACK — giving the daemon rudimentary intrusion detection built in",
        "RAG memory layer (FAISS + sentence-transformers) retrieves similar past incidents before every AI query — daemon improves with each event",
        "Reduced mean time to detection from ~15 minutes (on-call) to under 30 seconds; zero cloud API calls"
      ]
    },
    {
      role: "Backend Engineer",
      org: "Aura — Passive Attendance Intelligence",
      period: "2026",
      bullets: [
        "Ingested RADIUS Accounting logs from campus WLC — no student app, no QR codes, no cooperation required",
        "Primary session key is 802.1X-authenticated User-Name, not MAC address — immune to MAC randomization (iOS 14+, Android 10+)",
        "Isolation Forest Focus Score detects bandwidth anomaly patterns multivariant on (bytes, duration) jointly — no hardcoded thresholds per course type",
        "Full stack: FastAPI ingestion (async, <100ms), Redis session state, PostgreSQL persistence, React dashboard with role-based views"
      ]
    },
    {
      role: "Backend Engineer",
      org: "Upwork Automation Pipeline",
      period: "2026",
      bullets: [
        "Built two-version automated job-hunting pipeline with LLM scoring and Telegram alerts",
        "V2: composite scoring (50% AI relevance, 25% client quality, 25% competition opportunity)"
      ]
    }
  ],
  education: [
    {
      degree: "B.E. Information Technology",
      institution: "Savitribai Phule Pune University (SPPU)",
      period: "2023 – 2027"
    }
  ]
}

import type { ResumeData } from '@/types'

export const resume: ResumeData = {
  name: "Aaryan Patwardhan",
  title: "AI Systems Engineer",
  tagline: "I build systems that see, decide, and heal themselves.",
  bio: "B.E. Information Technology student at SPPU (2027). I design autonomous AI pipelines — from real-time computer vision at 55fps to self-healing drone fleets. I work at the intersection of deep learning, systems design, and edge inference.",
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
      role: "AI/ML Engineer",
      org: "Ghost-Admin — Autonomous Server Healing Agent",
      period: "2026",
      bullets: [
        "Designed MAPE-K feedback loop for autonomous server diagnosis and remediation",
        "Integrated local LLM inference via llama-cpp-python with CUDA acceleration"
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

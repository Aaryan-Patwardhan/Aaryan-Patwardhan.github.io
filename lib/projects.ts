import type { ProjectMeta } from '@/types'

// Rule: every sentence must be true of the code as it exists today, and any
// number must be one that can be reproduced with a command. Planned work is
// labelled as planned. Order follows QuantaSharp/STRATEGY.md.
export const projects: ProjectMeta[] = [
  {
    id: "invoice-poc",
    slug: "invoice-poc",
    version: "3.3",
    status: "published",
    date: "2026-10",
    title: "InvoiceAI",
    tagline: "Reads Indian GST invoices — digital PDFs, scans and phone photos — checks its own work, and marks anything doubtful for a person to review.",
    tags: ["Automation", "Backend", "Vision AI"],
    metrics: ["121 automated tests", "Accuracy gate in CI", "GSTIN check-digit validation", "Offline Docker package"],
    techStackIds: ["python", "fastapi", "ollama", "sqlite", "docker", "github-actions"],
    featured: true,
    coverImage: "/projects/invoice-poc/cover.webp",
    caseStudy: {
      problem: "Accounting teams in India type GST invoice details — GSTINs, dates, tax splits and totals — into Tally by hand, hundreds of times a month. AI can read invoices, but small local models make mistakes, and a wrong value that looks complete is worse than no value at all.",
      approach: "The AI reads; deterministic rules check the result; every doubt is shown. Text PDFs go through a text model, scans and photos through a vision model, both running locally via Ollama. A verification layer then checks what the model returned before anything is saved.",
      architecture: "FastAPI service with SQLite storage. Verification layer: GSTIN check-digit validation with OCR repair (a repaired GSTIN is accepted only when its checksum passes), totals and CGST/SGST cross-checks, item amount checks (quantity × rate), PAN checks, and seller/buyer correction from text positions in the PDF. A labelled golden set is evaluated in GitHub Actions, so a model or prompt change that lowers accuracy cannot be merged. Shipped as an offline Docker package with Windows and Linux installers; the dashboard is designed for non-technical and older users.",
      results: "On 6 synthetic and public sample invoices: 75% field accuracy and 0 invented values (up from 67% and 2). That set is too small to quote to clients — measurement on 20–30 real invoices is next. Coming next: a review screen for flagged fields and Tally / Zoho Books export. Private commercial product — demo on request.",
      diagrams: [
        { path: "/projects/invoice-poc/result-complete.webp", caption: "Main details found — marked “Looks complete” (sample invoice)", type: "screenshot" },
        { path: "/projects/invoice-poc/cover.webp", caption: "Problems found — marked “Please check this” (sample invoice)", type: "screenshot" },
        { path: "/projects/invoice-poc/saved.webp", caption: "Saved invoices, ready to download for Excel (sample data)", type: "screenshot" }
      ]
    }
  },
  {
    id: "cramiq",
    slug: "cramiq",
    version: "1.0",
    status: "published",
    date: "2026-06",
    title: "CramIQ",
    tagline: "Exam preparation for SPPU engineering students: a study planner, a study vault, progress streaks and a daily briefing email.",
    tags: ["Full-Stack", "Backend"],
    metrics: ["Live for students", "FastAPI + PostgreSQL", "Next.js on Vercel", "Sandboxed production service"],
    techStackIds: ["python", "fastapi", "postgresql", "redis", "nextjs", "gemini", "linux"],
    featured: true,
    coverImage: "/projects/cramiq/cover.webp",
    caseStudy: {
      problem: "SPPU engineering students prepare from scattered syllabus PDFs, past papers and notes, with no simple way to plan what to study before each exam.",
      approach: "Started as an exam-prediction engine, then pivoted to a study planner: what to study next for your exams, a vault of material, and streaks to keep going. Practice papers based on past patterns are published by admins and labelled as practice, never as likely questions.",
      architecture: "FastAPI backend with async SQLAlchemy on PostgreSQL (Supabase), Redis cache, Gemini for study material, Resend for email OTP login and a nightly briefing scheduled with APScheduler. Next.js frontend on Vercel. The API runs behind nginx on an Ubuntu VM as an unprivileged, sandboxed systemd service, with deploys from tagged releases or main and automatic rollback if the health check fails.",
      results: "Live and used by students; a daily briefing email goes out every night. Next: publish real usage numbers, a privacy page, nightly database backups and a CI test run.",
      diagrams: [],
      liveUrl: "https://sppu-agent.vercel.app"
    }
  },
  {
    id: "hyron-ai",
    slug: "hyron-ai",
    version: "1.0",
    status: "published",
    date: "2026-10",
    title: "Hyron AI",
    tagline: "Finds the risky packages in a project's npm dependencies, explains each score, and plans safe upgrades. FUSION 2026 hackathon — team lead.",
    tags: ["Automation", "Backend", "Systems"],
    metrics: ["24-hour hackathon build", "OSV + EPSS + CISA KEV", "Explainable 0–100 score", "Team of four"],
    techStackIds: ["python", "fastapi", "react", "networkx"],
    featured: true,
    coverImage: "/projects/hyron-ai/cover.webp",
    caseStudy: {
      problem: "A project's real risk sits deep in its transitive npm dependencies, and vulnerability lists don't say which findings matter most or what upgrading would break.",
      approach: "Led a four-person team that built, in 24 hours, a scanner that maps direct and transitive dependencies across projects and ranks findings with a transparent score instead of a raw list.",
      architecture: "Reads npm lockfiles and builds a dependency graph in NetworkX (npm's nearest-node_modules resolution). Each package is checked against OSV.dev advisories and scored with CVSS, FIRST EPSS and CISA KEV into an explainable 0–100 risk score, with blast radius across projects. Upgrade plans stay within semver and pass an AUTO / REVIEW / BLOCK gate. FastAPI backend, React dashboard.",
      results: "Working scan → score → upgrade plan on real npm projects. Limitations: reachability is not analysed, and verification re-scans advisories rather than installing and testing the upgrade. Next: a GitHub Action version and pnpm / yarn / Python lockfiles.",
      diagrams: [
        { path: "/projects/hyron-ai/cover.webp", caption: "Architecture: a local control loop with a clear trust boundary", type: "architecture" }
      ],
      githubUrl: "https://github.com/Aaryan-Patwardhan/fusion2026"
    }
  },
  {
    id: "aura",
    slug: "aura",
    version: "1.0",
    status: "published",
    date: "2026-05",
    title: "Aura — attendance from campus Wi-Fi",
    tagline: "Turns Wi-Fi accounting events into attendance records — no student app. A working prototype driven by a simulator.",
    tags: ["Systems", "Backend", "Full-Stack"],
    metrics: ["Prototype", "Redis Streams", "PostgreSQL", "Docker Compose"],
    techStackIds: ["python", "fastapi", "redis", "postgresql", "react", "docker"],
    featured: false,
    coverImage: "/projects/aura/architecture.png",
    caseStudy: {
      problem: "Manual registers are signed by friends and QR codes are shared in seconds. Campus Wi-Fi already knows which authenticated users are connected to which room's access point.",
      approach: "Use RADIUS accounting events (Start / Interim-Update / Stop) from the Wi-Fi controller as the signal, keyed on the 802.1X-authenticated user name rather than the device's MAC address.",
      architecture: "A simulator generates RADIUS accounting events from scenario files. FastAPI ingests them, keeps live sessions in Redis, and a worker consumes a Redis Stream to finalise sessions: minutes present, a 75% attendance rule, and an Isolation Forest anomaly score, written to PostgreSQL. React dashboard; everything runs with Docker Compose.",
      results: "Runs end to end with the simulator. Honest limits: the anomaly model is trained on synthetic data, the integrity flag in the demo comes from the simulator, there is no login or role-based view yet, and no real Wi-Fi controller has been connected. Performance has not been benchmarked.",
      diagrams: [
        { path: "/projects/aura/architecture.png", caption: "RADIUS events → FastAPI → Redis Streams → PostgreSQL", type: "architecture" }
      ],
      githubUrl: "https://github.com/Aaryan-Patwardhan/aura"
    }
  },
  {
    id: "sentinel-mesh",
    slug: "sentinel-mesh",
    version: "1.0",
    status: "published",
    date: "2026-03",
    title: "SentinelMesh",
    tagline: "AI-assisted drone response: YOLOv8 detection with two local LLM agents arguing before a dispatch. INSPIRON 5.0 (COEP) — AI core lead.",
    tags: ["Vision AI", "Automation", "Systems"],
    metrics: ["Hackathon build", "YOLOv8", "Two-agent debate", "Simulated fleet"],
    techStackIds: ["python", "yolov8", "opencv", "cuda", "llama-cpp", "fastapi", "react"],
    featured: false,
    coverImage: "/projects/sentinel-mesh/cover.png",
    caseStudy: {
      problem: "Every dispatch decision in an incident-response system waits for a human operator, which doesn't scale when several incidents happen at once.",
      approach: "Route each detection by confidence: clear detections go straight to dispatch, unclear ones go to two local LLM agents — one argues for dispatch, one against — before a decision is made.",
      architecture: "YOLOv8 incident detection on recorded video; confident detections are dispatched directly and unclear ones go to the two-agent debate (Qwen2.5 via llama-cpp-python, on a local CUDA GPU). A simulated drone fleet with geofencing streams over WebSockets to a live React and Leaflet map, served by FastAPI.",
      results: "A working end-to-end demo built for the INSPIRON 5.0 hackathon at COEP, on recorded video and a simulated fleet — not tested with real drones.",
      diagrams: []
    }
  },
  {
    id: "ghost-admin",
    slug: "ghost-admin",
    version: "0.1",
    status: "wip",
    date: "2026-04",
    title: "Ghost-Admin (prototype)",
    tagline: "A Linux daemon designed to notice runaway processes and step through safe, logged fixes. Work in progress — the AI step is not working yet.",
    tags: ["Systems", "Automation"],
    metrics: ["Prototype", "7-stage design", "JSONL audit log", "Local LLM via Ollama"],
    techStackIds: ["python", "ollama", "linux"],
    featured: false,
    coverImage: "/projects/ghost-admin/mape-k.png",
    caseStudy: {
      problem: "Threshold-based tools restart or kill processes based on numbers alone, without asking whether the process is actually misbehaving.",
      approach: "Designed a 7-stage closed loop — detect, isolate, profile, extract, reason, execute, audit — where a local LLM classifies a process's behaviour before a graduated response, and cascades of spikes escalate to a person instead of triggering kills.",
      architecture: "Python daemon polling RAM every 5 seconds; whitelist guard and per-process baselines; context from CPU, file handles, process ancestry and journalctl; intended classification by a local model via Ollama; a remediation ladder (SIGTERM → memory cap → SIGSTOP → core dump → SIGKILL); append-only JSONL audit log.",
      results: "Prototype. Known gaps being fixed: the LLM reasoning step fails before calling the model, the memory (RAG) layer is not built, and a dry-run mode is needed before it should ever act on a real server.",
      diagrams: [
        { path: "/projects/ghost-admin/mape-k.png", caption: "Design of the 7-stage loop (not all stages work yet)", type: "flowchart" }
      ],
      githubUrl: "https://github.com/Aaryan-Patwardhan/ghost_admin"
    }
  }
]

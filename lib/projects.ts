import type { ProjectMeta } from '@/types'

export const projects: ProjectMeta[] = [
  {
    id: "sentinel-mesh",
    slug: "sentinel-mesh",
    version: "1.0",
    status: "published",
    date: "2026-03",
    title: "SentinelMesh",
    tagline: "Autonomous drone fleet that detects, debates, and dispatches — without human input.",
    tags: ["Vision AI", "Automation", "Systems"],
    metrics: ["55fps YOLOv8n", "< 50ms dispatch", "RTX 3050 Ti", "MAPE-K loop"],
    techStackIds: ["python", "yolov8", "opencv", "cuda", "pytorch", "llama-cpp", "fastapi", "react"],
    featured: true,
    coverImage: "/projects/sentinel-mesh/cover.png",
    caseStudy: {
      problem: "Urban safety incidents require response in seconds, not minutes. Existing systems rely on human operators for every dispatch decision — a bottleneck that scales poorly under simultaneous multi-zone incidents.",
      approach: "Adapted the MAPE-K autonomic computing loop from server healing into drone fleet management. Added an Adversarial Debate Engine between detection and dispatch to eliminate false positive responses.",
      architecture: "Split inference across two machines: Garuda Linux (RTX 3050 Ti) handles all CUDA inference — YOLOv8n at imgsz=480 and Qwen2.5-1.5B-Instruct Q4_K_M via llama-cpp-python. Windows machine handles FastAPI, fleet simulation, and React + Leaflet.js dashboard. Confidence tier gating bypasses LLM debate for high-confidence detections (≥ 0.88), cutting dispatch to ~50ms. Ghost Protocol enables automatic drone reassignment on failure with zero operator intervention.",
      results: "Real-time detection at 55fps on consumer edge hardware — enabling sub-50ms dispatch for high-confidence events. Self-healing fleet with automatic drone reassignment eliminates manual intervention. Predictive pre-positioning via Temporal Shadow Deployment reduces response time by estimated 40% during multi-zone incidents.",
      diagrams: [
        { path: "/projects/sentinel-mesh/architecture.png", caption: "MAPE-K autonomic loop and dual-machine split", type: "architecture" },
        { path: "/projects/sentinel-mesh/dashboard.png", caption: "Real-time Leaflet.js fleet dashboard", type: "screenshot" }
      ],
      githubUrl: "https://github.com/Aaryan-Patwardhan/sentinel-mesh"
    }
  },
  {
    id: "ghost-admin",
    slug: "ghost-admin",
    version: "1.0",
    status: "published",
    date: "2026-03",
    title: "Ghost-Admin",
    tagline: "Air-gapped Linux daemon that heals servers through semantic reasoning — not blind thresholds.",
    tags: ["Automation", "Systems", "Backend"],
    metrics: ["7-stage MAPE-K", "< 30s detection", "RAG memory", "Zero cloud calls"],
    techStackIds: ["python", "llama-cpp", "cuda", "fish-shell", "linux"],
    featured: true,
    coverImage: "/projects/ghost-admin/cover.png",
    caseStudy: {
      problem: "Kubernetes probes kill processes when RAM hits a threshold. Nagios fires alerts engineers silence at 3AM. Static bash scripts restart services mid-transaction. These tools are syntactic — they read numbers. They do not reason. The result: $9,000/minute average cost for large enterprise outages, 25 unplanned incidents per month in the average industrial plant.",
      approach: "Built the first air-gapped, semantically-aware server healing daemon that classifies process intent — not just resource state. Implemented a strict 7-stage MAPE-K closed-loop: DETECT → ISOLATE → PROFILE → EXTRACT → REASON → EXECUTE → AUDIT. Every stage has a defined interface; the AI only sees fully-fused context, never raw metrics.",
      architecture: "DETECT: 60-second rolling RAM window triggers on growth trajectory before crisis (fires at 60% climbing, not 85% already critical). ISOLATE: Whitelist guardrail immunizes systemd, sshd, and critical processes. PROFILE: 24-hour behavioral fingerprinting builds per-process P95 baselines — an ML training job hitting 78% RAM is normal; an HTTP server hitting 55% for the first time is not. EXTRACT: Multi-signal context fusion assembles RAM, CPU, file handles, thread count, network connections, full process ancestry tree, journalctl logs, and RAG-retrieved similar past incidents. REASON: llama3.2:3b via Ollama (CUDA) classifies intent across 5 categories: WORKING_AS_INTENDED, DEGRADED_BUT_FUNCTIONAL, LEAKING, UNDER_ATTACK, UNKNOWN — making it the first self-healing daemon with rudimentary intrusion detection built in. EXECUTE: 4-step graceful degradation ladder (SIGTERM → cgroup cap → SIGSTOP → SIGKILL) with a pre-kill forensic gcore dump for post-mortem analysis. Cascade Correlation halts individual kill decisions when 2+ processes spike within 60 seconds. AUDIT: Append-only JSONL audit log directly ingestible by SIEM systems (Splunk, Elastic, Wazuh).",
      results: "Mean time to detection reduced from ~15 minutes (on-call engineer) to under 30 seconds. Confidence gate below 0.70 escalates rather than kills — false positive rate under 5%. Pre-kill forensic memory dumps enable post-mortem root cause analysis. RAG memory layer means the daemon improves with every incident it handles. Zero bytes of operational data leave the machine.",
      diagrams: [
        { path: "/projects/ghost-admin/mape-k.png", caption: "7-stage MAPE-K closed-loop architecture", type: "flowchart" }
      ],
      githubUrl: "https://github.com/Aaryan-Patwardhan/ghost_admin"
    }
  },
  {
    id: "aura",
    slug: "aura",
    version: "1.0",
    status: "published",
    date: "2026-03",
    title: "Aura — Passive Attendance Intelligence",
    tagline: "The college Wi-Fi becomes the sensor. No student app. No QR codes. No GPS. No cooperation required.",
    tags: ["Automation", "Systems", "Backend", "Full-Stack"],
    metrics: ["RADIUS-based", "< 100ms ingestion", "Isolation Forest AI", "Docker Compose"],
    techStackIds: ["python", "fastapi", "redis", "postgresql", "react", "docker", "sqlite"],
    featured: true,
    coverImage: "/projects/aura/cover.png",
    caseStudy: {
      problem: "Every existing attendance system fails at the infrastructure layer — they trust students to self-report presence. Manual registers get signed by friends. QR codes are screenshot-shared in 10 seconds. GPS is spoofed with a VPN. RFID cards get handed off. None of these operate below the application layer.",
      approach: "Ingested RADIUS Accounting logs directly from the college's Wireless LAN Controller — existing campus infrastructure. When a student's device associates with the access point inside a lecture room, a RADIUS Accounting-Start event fires automatically. No app install. No check-in button. No student interaction. The primary session key is the authenticated User-Name from 802.1X, not MAC address — making the system immune to MAC randomization (iOS 14+, Android 10+) since the randomized MAC is a Layer 2 artifact while the credential-verified username travels inside the EAP tunnel at Layer 7.",
      architecture: "RADIUS Simulator generates realistic Accounting-Start/Stop/Interim-Update packets (mimics Cisco/Aruba WLC) across 3 pre-built demo scenarios: normal_lecture, bandwidth_fraud, mac_clone_attempt. FastAPI Ingestion Server (async) parses User-Name, MAC, AP-Name, RSSI, and byte counters, dispatching events to Redis with sub-100ms latency. Redis Session Manager holds live state per active device — not a database write on every packet. Session Finalizer Worker (background process) calculates minutes present, enforces 75% attendance threshold, runs Isolation Forest Focus Score, and writes finalized records to PostgreSQL. React Dashboard shows live room occupancy, per-student session timelines, and AI-flagged sessions with score breakdown. Role-based: Faculty view (their courses only), Admin view (full campus).",
      results: "Passive attendance tracking with zero student cooperation required. Focus Score AI (Isolation Forest) detects bandwidth anomaly patterns — a student streaming 600MB during a 45-minute theory lecture scores differently from the same 600MB during a 3-hour lab, because the model is multivariate (bytes + duration jointly). INTEGRITY_SUSPECT sessions flagged on MAC/credential mismatch before opening. Ingestion latency under 100ms per RADIUS event under 500 concurrent sessions. Full demo runnable on a single machine via Docker Compose.",
      diagrams: [
        { path: "/projects/aura/architecture.png", caption: "RADIUS → Redis → PostgreSQL pipeline", type: "architecture" }
      ],
      githubUrl: "https://github.com/Aaryan-Patwardhan/aura"
    }
  },
  {
    id: "invoice-poc",
    slug: "invoice-poc",
    version: "3.0",
    status: "published",
    date: "2026-04",
    title: "Invoice Automation POC",
    tagline: "Fully local AI pipeline that extracts 29 invoice fields (including line items) from PDFs and scanned images — zero cloud, zero data leakage.",
    tags: ["Automation", "Backend", "Vision AI"],
    metrics: ["100% offline", "Two-Pass Vision OCR", "Line Item Extraction", "REST API + CSV export"],
    techStackIds: ["python", "sqlite", "ollama", "fastapi"],
    featured: false,
    coverImage: "/projects/invoice-poc/cover.png",
    caseStudy: {
      problem: "Indian SMBs process hundreds of invoices monthly — from digital PDFs to WhatsApp-photographed paper bills. Cloud OCR solutions (AWS Textract, Google Document AI) send financial documents to third-party servers. For businesses with confidential vendor relationships, GSTIN data, and payment terms, this is a non-starter. Local alternatives either lack vision OCR for scanned documents or require complex infrastructure.",
      approach: "Built a dual-path extraction pipeline with intelligent automatic routing. Text-extractable PDFs go through a fast text LLM path (~2s). Scanned PDFs and images fall back to a vision LLM using a robust Two-Pass approach: Pass 1 captures headers and totals, Pass 2 captures complex line items and tax summaries. This bypasses the context timeouts typical of local vision models on dense documents.",
      architecture: "extractor.py: PyMuPDF attempts text extraction (≥120 char threshold). Text path → Qwen2.5:1.5b via Ollama generate API. Vision path → Qwen2.5-VL:3b via Ollama chat API using two distinct prompts mapped over up to 3 pages, keeping the highest-confidence merged result. Field validation layer: GST number regex validation (15-char GSTIN), ISO 8601 date normalisation (DD/MM/YYYY → YYYY-MM-DD), amount cleanup. Confidence score (0.0–1.0) weighted by field importance. SQLite schema with unique index stringifies line_items JSON. api.py: FastAPI 2.0 REST layer — single extract, batch (up to 20 files), paginated list, CSV export (UTF-8 BOM), stats endpoint. app.py: 4-tab Gradio UI — Extract (live JSON + line items table), History, Stats, About.",
      results: "29 structured fields extracted per invoice (vs 10 in v2). Successfully isolates line-item rows (product, HSN/SAC, quantity, unit price, discounts, individual tax slabs). Multi-page two-pass vision OCR increases extraction depth without timing out, scaling to dense industrial invoices. Confidence scoring allows downstream systems to flag fuzzy extras. Zero bytes of sensitive data leave the machine.",
      diagrams: [
        { path: "/projects/invoice-poc/pipeline.png", caption: "Dual-path extraction: text LLM vs Two-Pass Vision OCR", type: "architecture" }
      ],
      githubUrl: "https://github.com/Aaryan-Patwardhan/invoice-automation-poc"
    }
  },
  {
    id: "ppe-detection",
    slug: "ppe-detection",
    version: "1.0",
    status: "published",
    date: "2025-11",
    title: "PPE Detection System",
    tagline: "Real-time safety compliance detection for industrial environments at 60fps.",
    tags: ["Vision AI"],
    metrics: ["60fps", "YOLOv8", "Real-time alerts"],
    techStackIds: ["python", "yolov8", "opencv", "cuda", "pytorch"],
    featured: false,
    coverImage: "/projects/ppe-detection/cover.png",
    caseStudy: {
      problem: "Manual PPE compliance checks are infrequent and miss real-time violations. Existing camera systems are passive recorders, not active safety monitors.",
      approach: "Trained a custom YOLOv8 model on a labeled PPE dataset. Integrated real-time alert pipeline with configurable violation thresholds and zone-based rules.",
      architecture: "YOLOv8 model fine-tuned on hard-hat, vest, and glove detection. CUDA-accelerated inference pipeline. Zone configuration per camera feed. Alert dispatcher with cooldown logic to prevent alert fatigue.",
      results: "Real-time PPE compliance monitoring eliminates manual checks — reduces compliance violations caught from hours to seconds. Configurable zone-based rules and sub-100ms alert latency enable immediate corrective action. Alert cooldown prevents fatigue while ensuring critical violations are escalated.",
      diagrams: [
        { path: "/projects/ppe-detection/detection.png", caption: "Real-time PPE detection output", type: "screenshot" }
      ],
      githubUrl: "https://github.com/Aaryan-Patwardhan/ppe-detection"
    }
  },
  {
    id: "upwork-pipeline",
    slug: "upwork-pipeline",
    version: "2.0",
    status: "published",
    date: "2026-03",
    title: "Autonomous Upwork Pipeline",
    tagline: "Automated job-hunting with LLM scoring, client quality signals, and Telegram delivery.",
    tags: ["Automation", "Backend"],
    metrics: ["Composite scoring", "Telegram alerts", "Zero manual review", "SQLite dedup"],
    techStackIds: ["python", "sqlite", "fish-shell"],
    featured: false,
    coverImage: "/projects/upwork-pipeline/cover.png",
    caseStudy: {
      problem: "Manually browsing Upwork for relevant jobs is time-consuming and inconsistent. Most job boards have no intelligence layer — you see everything or nothing.",
      approach: "Built a two-version pipeline. V1: RSS parsing + LLM scoring + Telegram alerts. V2: added client quality scoring, feedback loop with Telegram inline keyboard, and watchdog health monitoring.",
      architecture: "feed_parser.py (RSS + SQLite dedup) → client_scorer.py (deterministic pre-filtering) → ai_filter.py (Ollama LLM relevance scoring) → notifier.py (Telegram). Composite scoring: 50% AI relevance, 25% client quality, 25% competition opportunity. feedback_loop.py logs apply/skip decisions to a feedback DB for future model improvement.",
      results: "Eliminates 2+ hours of daily manual job browsing — passive market data collection runs autonomously. Composite LLM scoring filters signal from noise, increasing relevant job discovery rate by estimated 60%. Telegram inline keyboard feedback loop continuously improves relevance model.",
      diagrams: [
        { path: "/projects/upwork-pipeline/pipeline.png", caption: "V2 pipeline architecture", type: "architecture" }
      ],
      githubUrl: "https://github.com/Aaryan-Patwardhan/upwork-pipeline"
    }
  },
  {
    id: "ecommerce",
    slug: "ecommerce",
    version: "1.0",
    status: "published",
    date: "2025-09",
    title: "Full-Stack E-Commerce Platform",
    tagline: "End-to-end online store with inventory management, cart, and order processing.",
    tags: ["Full-Stack", "Backend"],
    metrics: ["Python/Flask", "REST API", "Full cart flow"],
    techStackIds: ["python", "flask", "sqlite", "react"],
    featured: false,
    coverImage: "/projects/ecommerce/cover.png",
    caseStudy: {
      problem: "Client needed a custom e-commerce solution without the overhead of Shopify fees and lock-in.",
      approach: "Built a full-stack application with Flask backend and React frontend. Designed a clean REST API with JWT authentication and SQLite persistence.",
      architecture: "Flask REST API with blueprint architecture. SQLite for product catalog and orders. React frontend with cart state management. Admin dashboard for inventory. Deployed on a VPS with Nginx reverse proxy.",
      results: "Custom e-commerce solution eliminates Shopify monthly fees — saves estimated $100+/month in platform costs. Complete order flow from browsing to checkout with sub-200ms API response times. Admin dashboard enables real-time inventory management without third-party dependencies.",
      diagrams: [
        { path: "/projects/ecommerce/architecture.png", caption: "System architecture", type: "architecture" }
      ],
      githubUrl: "https://github.com/Aaryan-Patwardhan/ecommerce"
    }
  },
  {
    id: "pocket-lawyer",
    slug: "pocket-lawyer",
    version: "1.0",
    status: "published",
    date: "2025-12",
    title: "PocketLawyer Edge AI",
    tagline: "On-device legal assistant for Android with fully local LLM inference — no server, no data leaks.",
    tags: ["Automation", "Systems"],
    metrics: ["On-device LLM", "Android", "Zero API calls"],
    techStackIds: ["android", "python"],
    featured: false,
    coverImage: "/projects/pocket-lawyer/cover.png",
    caseStudy: {
      problem: "Legal questions in India are complex and inaccessible. Cloud-based AI leaks sensitive legal queries to third-party servers.",
      approach: "Built a fully on-device Android app with a quantized LLM running locally. Zero network calls for inference. Privacy-preserving by architecture.",
      architecture: "Quantized LLM model bundled with the APK. On-device inference via Android NDK bindings. Query preprocessing and context injection. Response streaming to chat UI.",
      results: "100% on-device inference eliminates data transmission risk entirely — sensitive legal queries never leave the user's device. Quantized LLM runs viably on mid-range Android hardware, making privacy-preserving AI accessible to anyone with a smartphone.",
      diagrams: [
        { path: "/projects/pocket-lawyer/app-screen.png", caption: "App interface", type: "screenshot" }
      ],
      githubUrl: "https://github.com/Aaryan-Patwardhan/pocket-lawyer"
    }
  }
]

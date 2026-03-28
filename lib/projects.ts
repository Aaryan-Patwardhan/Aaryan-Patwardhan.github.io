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
      results: "55fps real-time detection on consumer edge hardware. Sub-50ms dispatch for high-confidence events. Self-healing fleet with zero-downtime reassignment. Predictive pre-positioning via Temporal Shadow Deployment.",
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
    date: "2026-02",
    title: "Ghost-Admin",
    tagline: "Server healing agent that monitors, diagnoses, and self-repairs without human input.",
    tags: ["Automation", "Systems", "Backend"],
    metrics: ["MAPE-K loop", "Local LLM", "Zero-downtime"],
    techStackIds: ["python", "llama-cpp", "cuda", "fish-shell", "linux"],
    featured: true,
    coverImage: "/projects/ghost-admin/cover.png",
    caseStudy: {
      problem: "Server incidents at 3am require on-call engineers who are often slow to respond. Most alerts are noise. The ones that matter require context that takes time to gather.",
      approach: "Implemented MAPE-K (Monitor, Analyze, Plan, Execute, Knowledge) — the same feedback loop used in autonomic computing research — as a local, LLM-driven healing agent.",
      architecture: "Monitor agent continuously tails logs and system metrics. Analyze phase uses local LLM (llama-cpp-python with CUDA) to classify incident severity and root cause. Plan phase generates a remediation script. Execute phase runs it with a human-in-the-loop confirmation gate for destructive actions. All knowledge persisted locally.",
      results: "Reduced mean time to diagnosis from manual 15-minute investigation to under 90 seconds. Zero external API calls — entirely local inference.",
      diagrams: [
        { path: "/projects/ghost-admin/mape-k.png", caption: "MAPE-K feedback loop implementation", type: "flowchart" }
      ],
      githubUrl: "https://github.com/Aaryan-Patwardhan/ghost-admin"
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
      results: "60fps real-time processing on RTX 3050 Ti. Configurable compliance zones. Alert pipeline with sub-100ms latency.",
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
      results: "Zero manual job browsing. Fully passive market data collection. Composite score filters signal from noise.",
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
      results: "Complete order flow from browsing to checkout. Admin inventory management. Sub-200ms API response times.",
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
      results: "100% on-device inference. No data transmitted to any server. Viable on mid-range Android hardware.",
      diagrams: [
        { path: "/projects/pocket-lawyer/app-screen.png", caption: "App interface", type: "screenshot" }
      ],
      githubUrl: "https://github.com/Aaryan-Patwardhan/pocket-lawyer"
    }
  },
  {
    id: "attendance",
    slug: "attendance",
    version: "1.0",
    status: "published",
    date: "2025-10",
    title: "Student Attendance Analytics",
    tagline: "Automated attendance monitoring with analytics dashboard for educational institutions.",
    tags: ["Full-Stack", "Backend"],
    metrics: ["SQLite", "Analytics dashboard", "Export reports"],
    techStackIds: ["python", "flask", "sqlite"],
    featured: false,
    coverImage: "/projects/attendance/cover.png",
    caseStudy: {
      problem: "Manual attendance tracking is error-prone and produces no actionable data for faculty.",
      approach: "Built an automated system with a web dashboard that shows attendance trends, at-risk students, and exportable reports.",
      architecture: "Flask web application with SQLite. Role-based access for faculty and admin. Attendance analytics with trend visualization. CSV export for reporting.",
      results: "Eliminated manual attendance sheets. Automated at-risk student flagging. Exportable reports for administration.",
      diagrams: [
        { path: "/projects/attendance/dashboard.png", caption: "Analytics dashboard", type: "screenshot" }
      ],
      githubUrl: "https://github.com/Aaryan-Patwardhan/attendance"
    }
  }
]

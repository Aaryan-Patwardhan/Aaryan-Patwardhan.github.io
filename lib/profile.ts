// Parts of the profile that aren't projects. Keep in step with
// uploadables/Resume and ~/projects/QuantaSharp/MASTER_PLAN.md.

export const site = {
  quantasharp: "https://quantasharp.vercel.app",
  resume: "/Aaryan_Patwardhan_Resume.pdf",
}

/** How I build — each principle is visible in the projects below. */
export const principles = [
  { title: "Measure before claiming", body: "Accuracy comes from a labelled test set and a script anyone can re-run — never from a guess." },
  { title: "Let rules check the AI", body: "The model proposes; deterministic checks verify. GSTIN check digits, totals, confidence gates." },
  { title: "Show every doubt", body: "Anything uncertain goes to a person, in plain words. Nothing doubtful is marked complete." },
  { title: "Ship it like production", body: "Tests, CI, Docker, sandboxed services and rollbacks — on a cloud VM or a client's own machine." },
]

/** Grouped the way an applied AI systems role is usually described. Every
 *  item here is used in a project on this page. */
export const stack: { group: string; items: string[] }[] = [
  { group: "AI and LLMs", items: ["Local LLMs via Ollama", "Vision-language models for documents", "Gemini API", "LLM evaluation with golden sets", "YOLOv8", "scikit-learn"] },
  { group: "Backend and data", items: ["Python", "FastAPI", "PostgreSQL", "Redis / Redis Streams", "SQLite", "SQLAlchemy"] },
  { group: "Infrastructure and delivery", items: ["Docker and Compose", "GitHub Actions CI", "Linux servers, systemd sandboxing", "nginx", "Vercel"] },
  { group: "Frontend", items: ["TypeScript", "React", "Next.js", "Tailwind CSS"] },
]

/** Honest: these are being learned now (MASTER_PLAN.md), not claimed as skills. */
export const learning = ["Agentic AI: tool calling, MCP, LangGraph", "AWS (Solutions Architect Associate)", "Terraform", "Kubernetes, GitOps, observability", "Go", "MLOps: MLflow, model serving"]

export const hackathons = [
  "FUSION 2026 — team lead, Hyron AI (participant)",
  "INSPIRON 5.0, COEP — AI core lead, SentinelMesh (participant)",
  "Smart India Hackathon 2026 (participant)",
  "Decode SIH 2026 (participant)",
]

export const certifications = [
  "Front-End Development Internship — Cognifyz Technologies (2026)",
  "21 Projects, 21 Days: ML, Deep Learning & GenAI — GeeksforGeeks (2026)",
  "Python Skill Up — GeeksforGeeks (2026)",
]

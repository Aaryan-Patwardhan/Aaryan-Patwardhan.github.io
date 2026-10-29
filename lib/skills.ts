import type { Skill, SkillCategory } from '@/types'
import { projects } from './projects'

// projectIds must match lib/projects.ts. Highlights describe what was built,
// never an unmeasured number.
export const skills: Skill[] = [
  { id: "python",         name: "Python",            category: "Languages",        projectIds: ["invoice-poc","cramiq","hyron-ai","aura","sentinel-mesh","ghost-admin"], yearsUsed: 3, highlight: "Main language for every backend and AI project" },
  { id: "fastapi",        name: "FastAPI",           category: "Backend",          projectIds: ["invoice-poc","cramiq","hyron-ai","aura","sentinel-mesh"], yearsUsed: 1, highlight: "REST APIs, async ingestion and file uploads" },
  { id: "postgresql",     name: "PostgreSQL",        category: "Backend",          projectIds: ["cramiq","aura"], yearsUsed: 1, highlight: "Production database for CramIQ (Supabase); attendance records in Aura" },
  { id: "redis",          name: "Redis",             category: "Backend",          projectIds: ["cramiq","aura"], yearsUsed: 1, highlight: "Caching in CramIQ; Redis Streams for Aura's session pipeline" },
  { id: "sqlite",         name: "SQLite",            category: "Backend",          projectIds: ["invoice-poc"], yearsUsed: 1, highlight: "Invoice storage and result cache in InvoiceAI" },
  { id: "react",          name: "React",             category: "Backend",          projectIds: ["hyron-ai","aura","sentinel-mesh"], yearsUsed: 1, highlight: "Dashboards, including a live Leaflet map over WebSockets" },
  { id: "nextjs",         name: "Next.js",           category: "Tools",            projectIds: ["cramiq"], yearsUsed: 1, highlight: "CramIQ frontend on Vercel" },
  { id: "ollama",         name: "Ollama",            category: "Machine Learning", projectIds: ["invoice-poc","ghost-admin"], yearsUsed: 1, highlight: "Local text and vision models for invoice reading" },
  { id: "gemini",         name: "Gemini API",        category: "Machine Learning", projectIds: ["cramiq"], yearsUsed: 1, highlight: "Study material generation in CramIQ" },
  { id: "llama-cpp",      name: "llama-cpp-python",  category: "Machine Learning", projectIds: ["sentinel-mesh"], yearsUsed: 1, highlight: "Local LLM agents for SentinelMesh's dispatch debate" },
  { id: "networkx",       name: "NetworkX",          category: "Machine Learning", projectIds: ["hyron-ai"], yearsUsed: 1, highlight: "Dependency graphs and blast radius in Hyron AI" },
  { id: "yolov8",         name: "YOLOv8",            category: "Vision AI",        projectIds: ["sentinel-mesh"], yearsUsed: 1, highlight: "Incident detection with confidence-based routing" },
  { id: "opencv",         name: "OpenCV",            category: "Vision AI",        projectIds: ["sentinel-mesh"], yearsUsed: 1, highlight: "Video frame pipeline for detection" },
  { id: "cuda",           name: "CUDA",              category: "Systems & Infra",  projectIds: ["sentinel-mesh"], yearsUsed: 1, highlight: "GPU inference for detection and local LLMs" },
  { id: "docker",         name: "Docker / Compose",  category: "Systems & Infra",  projectIds: ["invoice-poc","aura"], yearsUsed: 1, highlight: "InvoiceAI's offline client package; Aura's full stack in one command" },
  { id: "github-actions", name: "GitHub Actions",    category: "Tools",            projectIds: ["invoice-poc"], yearsUsed: 1, highlight: "Tests and an accuracy gate on every pull request" },
  { id: "linux",          name: "Linux",             category: "Systems & Infra",  projectIds: ["cramiq","ghost-admin"], yearsUsed: 3, highlight: "Daily environment; sandboxed systemd services in production" },
]

export function getSkillWithStats(skill: Skill) {
  const linkedProjects = projects.filter(
    p => p.techStackIds.includes(skill.id) && p.status === 'published'
  )
  return {
    ...skill,
    projectCount: linkedProjects.length,
    projectTitles: linkedProjects.map(p => p.title)
  }
}

export function getSkillsByCategory(category: SkillCategory) {
  return skills.filter(s => s.category === category)
}

export function getCoOccurrenceEdges() {
  const edges: { from: string; to: string; sharedProjects: string[] }[] = []
  for (let i = 0; i < skills.length; i++) {
    for (let j = i + 1; j < skills.length; j++) {
      const shared = skills[i].projectIds.filter(id =>
        skills[j].projectIds.includes(id)
      )
      if (shared.length > 0) {
        edges.push({ from: skills[i].id, to: skills[j].id, sharedProjects: shared })
      }
    }
  }
  return edges
}

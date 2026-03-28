import type { Skill, SkillCategory } from '@/types'
import { projects } from './projects'

export const skills: Skill[] = [
  { id: "python",     name: "Python",           category: "Languages",        projectIds: ["sentinel-mesh","ghost-admin","ppe-detection","upwork-pipeline","ecommerce","attendance","pocket-lawyer"], yearsUsed: 3, highlight: "Primary language across all ML and backend work" },
  { id: "yolov8",    name: "YOLOv8",            category: "Vision AI",        projectIds: ["sentinel-mesh","ppe-detection"], yearsUsed: 2, highlight: "55fps real-time detection on edge hardware" },
  { id: "opencv",    name: "OpenCV",             category: "Vision AI",        projectIds: ["sentinel-mesh","ppe-detection"], yearsUsed: 2, highlight: "Real-time frame pipeline with CUDA-accelerated preprocessing" },
  { id: "cuda",      name: "CUDA / cuDNN",       category: "Systems & Infra",  projectIds: ["sentinel-mesh","ghost-admin","ppe-detection"], yearsUsed: 2, highlight: "Dual CUDA inference: YOLOv8 + GGUF LLM simultaneously on RTX 3050 Ti" },
  { id: "pytorch",   name: "PyTorch",            category: "Machine Learning", projectIds: ["sentinel-mesh","ppe-detection"], yearsUsed: 2, highlight: "Custom training pipelines, mixed precision, CUDA streams" },
  { id: "llama-cpp", name: "llama-cpp-python",   category: "Machine Learning", projectIds: ["sentinel-mesh","ghost-admin"], yearsUsed: 1, highlight: "Local GGUF inference, Qwen2.5-1.5B Q4_K_M at production latency" },
  { id: "flask",     name: "Flask",              category: "Backend",          projectIds: ["ecommerce","pocket-lawyer","attendance"], yearsUsed: 2, highlight: "Full-stack Python/Flask with REST APIs and template rendering" },
  { id: "fastapi",   name: "FastAPI",            category: "Backend",          projectIds: ["sentinel-mesh"], yearsUsed: 1, highlight: "Async WebSocket server for real-time drone fleet coordination" },
  { id: "react",     name: "React",              category: "Backend",          projectIds: ["sentinel-mesh","ecommerce"], yearsUsed: 1, highlight: "Leaflet.js dashboard with WebSocket real-time marker updates" },
  { id: "sqlite",    name: "SQLite",             category: "Backend",          projectIds: ["upwork-pipeline","attendance","ecommerce"], yearsUsed: 2, highlight: "Lightweight persistent dedup and feedback storage" },
  { id: "fish-shell",name: "Fish / Bash Shell",  category: "Systems & Infra",  projectIds: ["ghost-admin","upwork-pipeline"], yearsUsed: 2, highlight: "Scripted automation and system tooling on Garuda Linux / Arch" },
  { id: "linux",     name: "Arch Linux / Garuda",category: "Systems & Infra",  projectIds: ["sentinel-mesh","ghost-admin"], yearsUsed: 3, highlight: "Primary development environment; deep kernel and driver familiarity" },
  { id: "android",   name: "Android",            category: "Mobile",           projectIds: ["pocket-lawyer"], yearsUsed: 1, highlight: "Edge AI app with local LLM inference on-device" },
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

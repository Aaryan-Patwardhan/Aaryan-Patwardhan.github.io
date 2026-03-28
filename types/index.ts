// ── Project Types ──────────────────────────────────────────────────────────

export type ProjectTag =
  | 'Vision AI'
  | 'Automation'
  | 'Backend'
  | 'Full-Stack'
  | 'Systems'

export type ProjectStatus =
  | 'published'
  | 'wip'
  | 'archived'
  | 'featured'

export type DiagramAsset = {
  path: string
  caption: string
  type: 'screenshot' | 'architecture' | 'flowchart' | 'demo-gif'
}

export type ProjectMeta = {
  id: string
  slug: string
  version: string
  status: ProjectStatus
  date: string                    // ISO format: "2026-03"
  title: string
  tagline: string
  tags: ProjectTag[]
  metrics: string[]
  techStackIds: string[]          // references Skill.id
  featured: boolean
  coverImage: string
  caseStudy: {
    problem: string
    approach: string
    architecture: string
    results: string
    diagrams: DiagramAsset[]
    githubUrl?: string
    demoUrl?: string
    liveUrl?: string
  }
}

// ── Skill Types ────────────────────────────────────────────────────────────

export type SkillCategory =
  | 'Vision AI'
  | 'Machine Learning'
  | 'Backend'
  | 'Systems & Infra'
  | 'Languages'
  | 'Tools'
  | 'Mobile'

export type Skill = {
  id: string
  name: string
  category: SkillCategory
  projectIds: string[]
  yearsUsed: number
  highlight: string
  icon?: string
}

// ── Resume Types ───────────────────────────────────────────────────────────

export type ExperienceItem = {
  role: string
  org: string
  period: string
  bullets: string[]
}

export type EducationItem = {
  degree: string
  institution: string
  period: string
}

export type ResumeData = {
  name: string
  title: string
  tagline: string
  bio: string
  location: string
  timezone: string
  email: string
  github: string
  linkedin: string
  availableForWork: boolean
  preferredEngagement: 'freelance' | 'fulltime' | 'contract'
  responseTime: string
  experience: ExperienceItem[]
  education: EducationItem[]
}

// ── Neural Network Types ───────────────────────────────────────────────────

export type Node3D = {
  id: number
  position: [number, number, number]
  origin: [number, number, number]  // original position for lerp-back
}

export type Edge3D = {
  from: number
  to: number
}

// ── Terminal Types ─────────────────────────────────────────────────────────

export type LogLineType = 'command' | 'output' | 'error' | 'success' | 'dim'

export type LogLine = {
  text: string
  type: LogLineType
  delay?: number   // ms per character (default 40)
}

export type TerminalSession = {
  projectId: string
  title: string
  lines: LogLine[]
}

// ── Device Tier ────────────────────────────────────────────────────────────

export type DeviceTier = 'high' | 'mid' | 'low'

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

/** One step of a project's real pipeline, drawn as a system diagram. */
export type PipelineStep = {
  label: string
  /** input · ai (a model) · rule (deterministic check) · human · store · service · output */
  kind: 'input' | 'ai' | 'rule' | 'human' | 'store' | 'service' | 'output'
  /** Marks a step that doesn't work yet (shown honestly). */
  broken?: boolean
}

export type ProjectMeta = {
  id: string
  /** Honest stage shown on the card, e.g. "Live", "Hackathon · team lead". */
  stage: string
  pipeline: PipelineStep[]
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
  preferredEngagement: 'internship' | 'freelance' | 'fulltime' | 'contract'
  responseTime: string
  experience: ExperienceItem[]
  education: EducationItem[]
}

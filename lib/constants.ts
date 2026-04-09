export const NEURAL = {
  NODE_COUNT: 42,       // was 60 — fewer nodes = fewer edge pairs + less GPU vertex work
  K_NEAREST: 3,
  SPHERE_RADIUS: 4,
  REPULSION_RADIUS: 2.5,
  LERP_SPEED: 0.05,
  NODE_SIZE: 0.065,
  BLOOM_INTENSITY: 1.1, // was 1.4 — lower bloom = cheaper luminance pass
  FPS_CAP_MID: 30,
} as const

export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
} as const

export const PROJECT_TAGS = [
  'All',
  'Vision AI',
  'Automation',
  'Backend',
  'Full-Stack',
  'Systems'
] as const

/** Phase in the Hero's Journey timeline */
export interface TimelinePhase {
  id: string
  label: string
  icon: string
  title: string
  narrative: string
  detail?: string
  highlight?: string
}

/** The conceptual metaphor anchoring the project narrative */
export interface ProjectMetaphor {
  phrase: string
  description: string
  icon: string
  color: string
}

/** Measurable project outcome */
export interface Outcome {
  metric: string
  label: string
  description?: string
}

/** Full case study data for a project */
export interface CaseStudy {
  slug: string
  metaphor: ProjectMetaphor
  tagline: string
  duration: string
  role: string
  year: string
  timeline: TimelinePhase[]
  outcomes: Outcome[]
  lessonsLearned: string[]
  nextProject?: string
  prevProject?: string
}

/** Base project */
export interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  github?: string
  accent?: string
}

/** Featured project with optional case study */
export interface FeaturedProject extends Project {
  category: string
  highlights: string[]
  caseStudy?: CaseStudy
}

/** Simplified project for Home.vue featured cards */
export interface HomeFeaturedProject {
  id: number
  title: string
  description: string
  tech: string[]
  github?: string
  accent: string
  slug?: string
}

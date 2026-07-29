/** Phase in the Hero's Journey timeline (legacy case-study components) */
export interface TimelinePhase {
  id: string;
  label: string;
  icon: string;
  title: string;
  narrative: string;
  detail?: string;
  highlight?: string;
}

/** Gallery asset for a work sample */
export interface WorkAsset {
  src: string;
  alt: string;
  label: string;
}

/** Measurable project outcome */
export interface Outcome {
  metric: string;
  label: string;
  description?: string;
}

/** Full case study data for a project */
export interface CaseStudy {
  slug: string;
  image?: string;
  gallery?: WorkAsset[];
  liveUrl?: string;
  tagline: string;
  description?: string;
  duration: string;
  role: string;
  year: string;
  company: string;
  outcomes?: Outcome[];
  nextProject?: string;
  prevProject?: string;
}

/** Base project */
export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  accent?: string;
  image?: string;
}

/** Featured project with case study */
export interface FeaturedProject extends Project {
  category: string;
  highlights: string[];
  caseStudy: CaseStudy;
}

/** Simplified project for Home.vue featured cards */
export interface HomeFeaturedProject {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  accent: string;
  slug?: string;
  image?: string;
}

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
}

/** Case study / work detail */
export interface CaseStudy {
  slug: string;
  image: string;
  gallery: WorkAsset[];
  tagline: string;
  description: string;
  role: string;
  year: string;
  company: string;
  outcomes: Outcome[];
  nextProject?: string;
  prevProject?: string;
}

/** Featured CV-aligned work sample */
export interface FeaturedProject {
  id: number;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  tech: string[];
  github?: string;
  image: string;
  caseStudy: CaseStudy;
}

/** Employer group for the home work section */
export interface ExperienceGroup {
  id: string;
  kicker: string;
  title: string;
  period: string;
  blurb: string;
  companyKeys: string[];
}

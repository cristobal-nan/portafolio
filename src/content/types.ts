import type { Locale } from "@/lib/i18n";

export type ProjectSlug =
  | "mavepos"
  | "udp-attendance"
  | "data2o-cdp-integrations"
  | "collectibles-app";

export type ProjectDepth = "very-detailed" | "detailed" | "intermediate";

export interface ContentText {
  text: string;
  isPlaceholder?: boolean;
  checklistRef?: string;
}

export interface SiteConfig {
  siteUrl: string;
  authorName: string;
  authorNameIsPlaceholder: boolean;
  email: string;
  emailIsPlaceholder: boolean;
  location: Record<Locale, string>;
  cv: {
    href: string;
    fileName: string;
    available: boolean;
    languageTag: "ES";
  };
  social: {
    github: {
      url?: string;
      handlePlaceholder: string;
    };
    linkedin: {
      url?: string;
      handlePlaceholder: string;
    };
  };
}

export interface UiDictionary {
  locale: Locale;
  skipToContent: string;
  nav: {
    projects: string;
    experience: string;
    skills: string;
    education: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
  };
  theme: {
    switchToDark: string;
    switchToLight: string;
  };
  language: {
    label: string;
    switchToEs: string;
    switchToEn: string;
  };
  actions: {
    viewCaseStudy: string;
    backToProjects: string;
    downloadCv: string;
    downloadCvPendingNote: string;
    copyEmail: string;
    emailCopied: string;
    sendEmail: string;
    pendingBadge: string;
    confidentialBadge: string;
    previousProject: string;
    nextProject: string;
    onThisPage: string;
  };
  sections: {
    projects: { index: string; title: string; subtitle: string };
    experience: { index: string; title: string; subtitle: string };
    skills: { index: string; title: string; subtitle: string };
    education: { index: string; title: string; subtitle: string };
    contact: { index: string; title: string; subtitle: string };
  };
  caseStudyLabels: {
    role: string;
    organization: string;
    period: string;
    status: string;
    context: string;
    problem: string;
    solution: string;
    differentiators: string;
    responsibilities: string;
    technologies: string;
    architecture: string;
    adrs: string;
    designSystem: string;
    challenges: string;
    results: string;
    testingBreakdown: string;
    benchmarks: string;
    commercialArchitecture: string;
    media: string;
    challengeProblem: string;
    challengeApproach: string;
    challengeTradeoff: string;
    openResource: string;
    pendingResource: string;
    architectureDiagramTitle: string;
    tableDomain: string;
    tableSuites: string;
    tableTests: string;
    tableScope: string;
    tableScenario: string;
    tableBefore: string;
    tableAfter: string;
    tableImprovement: string;
    tablePlan: string;
    tableTopology: string;
    tableStatus: string;
    tableProfile: string;
  };
  footer: {
    builtWith: string;
    rights: string;
  };
  seo: {
    homeTitle: string;
    homeDescription: string;
    siteName: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  summary: ContentText;
  highlights: ContentText[];
  relatedProjectSlug?: ProjectSlug;
  isPlaceholder?: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  items: {
    label: string;
    isPlaceholder?: boolean;
  }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details: ContentText[];
  isPlaceholder?: boolean;
}

export interface LanguageProficiency {
  language: string;
  level: string;
  isPlaceholder?: boolean;
}

export interface ProfileContent {
  hero: {
    eyebrow: string;
    headline: string;
    targetRoles: string[];
    summary: ContentText;
    availabilityNote: ContentText;
    primaryCta: string;
    secondaryCta: string;
  };
  experience: ExperienceItem[];
  skills: SkillGroup[];
  education: EducationItem[];
  languages: LanguageProficiency[];
  contact: {
    lead: ContentText;
    availability: ContentText;
  };
}

export interface ProjectLink {
  label: string;
  href?: string;
  type: "demo" | "repository" | "document";
  placeholderNote?: string;
  checklistRef?: string;
}

export interface KeyMetric {
  label: string;
  value: string;
  note?: string;
}

export interface ArchitectureComponent {
  name: string;
  role: string;
  details: string;
  isPlaceholder?: boolean;
}

export interface ArchitectureDecision {
  id: string;
  title: string;
  summary: string;
}

export interface DesignSystemSpec {
  overview: ContentText;
  pillars: {
    title: string;
    details: string;
  }[];
}

export interface TechnicalChallenge {
  title: string;
  problem: string;
  approach: string;
  tradeoff?: string;
  isPlaceholder?: boolean;
}

export interface ProjectResultItem {
  category: string;
  title: string;
  detail: string;
  isPlaceholder?: boolean;
  checklistRef?: string;
}

export interface TestSuiteBreakdown {
  summary: string;
  staticChecks: string[];
  totalSuites: number;
  totalTests: number;
  duration: string;
  domains: {
    domain: string;
    suites: number;
    tests: number;
    scope: string;
  }[];
}

export interface PerformanceBenchmarks {
  environment: string;
  methodologyNote: string;
  comparisons: {
    scenario: string;
    before: string;
    after: string;
    improvement: string;
  }[];
  specialized: {
    test: string;
    scope: string;
    result: string;
  }[];
}

export interface CommercialMatrix {
  overview: string;
  plans: {
    plan: string;
    edition: string;
    topology: string;
    status: string;
    target: string;
  }[];
  advantages: string[];
}

export interface ProjectMediaItem {
  id: string;
  title: string;
  caption: string;
  kind: "screenshot" | "video-demo" | "architecture-diagram" | "document";
  orientation?: "landscape" | "portrait";
  group?: string;
  src?: string;
  alt?: string;
  poster?: string;
  externalUrl?: string;
  checklistRef?: string;
}

export interface ProjectCaseStudy {
  slug: ProjectSlug;
  depth: ProjectDepth;
  depthLabel: string;
  title: string;
  shortTitle: string;
  tagline: string;
  category: string;
  organization: string;
  role: string;
  period: string;
  status: string;
  summary: string;
  featuredTags: { label: string; isPlaceholder?: boolean }[];
  keyMetrics?: KeyMetric[];
  confidentialityNote?: string;
  links: ProjectLink[];
  context: ContentText[];
  problem: ContentText[];
  solution: ContentText[];
  differentiators?: ContentText[];
  responsibilities: ContentText[];
  technologies: {
    group: string;
    items: string[];
    isPlaceholder?: boolean;
  }[];
  architecture: {
    overview: ContentText;
    components: ArchitectureComponent[];
    diagrams: ProjectMediaItem[];
    adrs?: ArchitectureDecision[];
  };
  designSystem?: DesignSystemSpec;
  challenges: TechnicalChallenge[];
  testSuiteBreakdown?: TestSuiteBreakdown;
  benchmarks?: PerformanceBenchmarks;
  commercialMatrix?: CommercialMatrix;
  results: ProjectResultItem[];
  media: ProjectMediaItem[];
  seo: {
    title: string;
    description: string;
  };
}

import type { ProfileContent } from "@/content/types";

export const profileEn: ProfileContent = {
  hero: {
    eyebrow: "Computer Science & Telecommunications Engineer",
    headline:
      "Full-stack software engineering, systems architecture, and integrations.",
    targetRoles: [
      "Software Engineer",
      "Full Stack Developer",
      "Solutions Engineer",
      "Integration Engineer",
    ],
    summary: {
      text: "Software engineer experienced in full-stack development, systems architecture design, platform integration, and business process automation. Proven ability to translate business requirements into reliable technical solutions from architecture through implementation and validation. Advanced English applied in international technical collaboration.",
    },
    availabilityNote: {
      text: "Santiago, Chile · Native Spanish · Advanced English",
    },
    primaryCta: "Explore featured projects",
    secondaryCta: "Contact",
  },
  experience: [
    {
      id: "mavepos",
      role: "Software Engineer — Independent Project",
      organization: "MavePOS",
      period: "Aug 2026 — Present",
      location: "Santiago, Chile",
      summary: {
        text: "End-to-end architecture and engineering of a modular offline-first desktop POS + ERP system currently running in production across two retail branches with approximately 5,500 products and 1,200+ monthly transactions per store.",
      },
      highlights: [
        {
          text: "Implemented sales, inventory, cash finance, and accounts receivable modules with atomic transactions, full movement auditability, and commercial peripheral integration.",
        },
        {
          text: "Engineered multi-branch inventory synchronization, warehouse transfers, and catalog homologation without a central server, streamlining daily stock replenishment.",
        },
        {
          text: "Optimized search across 10,000+ SKU catalogs achieving p95 typing latencies under 15 ms in production performance benchmarks.",
        },
        {
          text: "Established engineering quality controls with 1,000+ automated tests, versioned database migrations, and Architecture Decision Records (ADRs).",
        },
      ],
      relatedProjectSlug: "mavepos",
    },
    {
      id: "data2o",
      role: "Software Developer",
      organization: "Data2o",
      period: "Mar 2025 — Dec 2025",
      location: "Chile · Enterprise clients across Latin America",
      summary: {
        text: "Research, implementation, and integration of Customer Data Platform (CDP) solutions using Tracardi across e-commerce environments, bridging engineering delivery and enterprise technical discovery.",
      },
      highlights: [
        {
          text: "Researched and implemented CDP solutions with Tracardi, building custom capabilities and automated data collection and segmentation workflows.",
        },
        {
          text: "Integrated solutions via REST APIs and JavaScript across 10 e-commerce environments alongside a three-developer engineering team.",
        },
        {
          text: "Collaborated in English with international maintainers and proposed enhancements that became official Tracardi features, including abandoned cart detection.",
        },
        {
          text: "Led technical meetings, requirements discovery, and live product demos for prospective enterprise clients across Chile and Latin America.",
        },
      ],
      relatedProjectSlug: "data2o-cdp-integrations",
    },
    {
      id: "digitaltex",
      role: "Software Developer — Professional Internship",
      organization: "DigitalTex",
      period: "Jan 2024 — Mar 2024",
      location: "Santiago, Chile",
      summary: {
        text: "Built a full e-commerce testbed reused for CDP integration validation and authored technical documentation with international vendors.",
      },
      highlights: [
        {
          text: "Built an e-commerce platform from scratch featuring authentication, catalog, cart, simulated checkout, and admin tooling (Next.js, Tailwind CSS, Bootstrap), reused for CDP integration testing.",
        },
        {
          text: "Researched technical solutions and documented engineering procedures in English with international providers.",
        },
      ],
    },
  ],
  skills: [
    {
      id: "languages-frameworks",
      title: "Languages, Frameworks & Platforms",
      description:
        "Full-stack web, Windows desktop, and cross-platform mobile software engineering.",
      items: [
        { label: "TypeScript" },
        { label: "JavaScript" },
        { label: "Python" },
        { label: "SQL" },
        { label: "Dart" },
        { label: "React" },
        { label: "Next.js" },
        { label: "Vue.js" },
        { label: "FastAPI" },
        { label: "Flutter" },
        { label: "Electron" },
        { label: "Tailwind CSS" },
        { label: "Zustand" },
        { label: "Riverpod" },
      ],
    },
    {
      id: "data-persistence",
      title: "Data & Persistence",
      description:
        "Relational, document, offline-first local databases, and managed data platforms.",
      items: [
        { label: "SQLite (WAL)" },
        { label: "PostgreSQL" },
        { label: "MongoDB" },
        { label: "Firebase / Firestore" },
        { label: "Supabase" },
        { label: "Hive" },
      ],
    },
    {
      id: "integrations-cloud",
      title: "Integrations, Cloud & Tooling",
      description:
        "Enterprise platform integration, APIs, containers, and cloud operations.",
      items: [
        { label: "Tracardi (CDP)" },
        { label: "REST APIs" },
        { label: "Docker" },
        { label: "AWS (EC2, RDS)" },
        { label: "Linux" },
        { label: "Git / GitHub" },
        { label: "Postman" },
        { label: "Vercel" },
        { label: "Render" },
      ],
    },
    {
      id: "quality-practices",
      title: "Quality, Testing & Methodologies",
      description:
        "Automated testing, load & performance validation, and structured agile delivery.",
      items: [
        { label: "Vitest" },
        { label: "Performance & Load Testing" },
        { label: "ADRs & Design Systems" },
        { label: "WCAG AA Accessibility" },
        { label: "Scrum" },
        { label: "Kanban (Trello)" },
      ],
    },
  ],
  education: [
    {
      id: "ic-informatica-telecomunicaciones",
      degree:
        "B.Eng. in Computer Science and Telecommunications (Ingeniería Civil en Informática y Telecomunicaciones)",
      institution: "Universidad Diego Portales (UDP)",
      period: "2019 — 2025",
      details: [
        {
          text: "Capstone thesis — Comprehensive Academic Attendance System: autonomously proposed and engineered a web and mobile (Android & iOS) solution with institutional authentication, unique time-bound codes, and an asynchronous backend (Python, FastAPI, Flutter, Next.js, Firebase/Firestore, Vercel, Render).",
        },
        {
          text: "Validated in live university classes and load-tested with over 50,000 records and 1,500 concurrent attendance submissions.",
        },
      ],
    },
  ],
  languages: [
    { language: "Spanish", level: "Native" },
    {
      language: "English",
      level: "Advanced (international technical collaboration)",
    },
  ],
  contact: {
    lead: {
      text: "If you are looking for an engineer able to design, build, and integrate end-to-end software systems—or lead technical discovery with clients and cross-functional teams—reach out via email or LinkedIn.",
    },
    availability: {
      text: "Santiago, Chile · Open to Software, Full Stack, Solutions, and Integration Engineer opportunities.",
    },
  },
};

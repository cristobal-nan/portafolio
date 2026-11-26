import type { ProjectCaseStudy } from "@/content/types";

export const data2oCdpIntegrationsEn: ProjectCaseStudy = {
  slug: "data2o-cdp-integrations",
  depth: "intermediate",
  depthLabel: "Focused case study",
  title: "CDP Integrations & Tracardi Contributions at Data2o",
  shortTitle: "CDP Integrations (Data2o)",
  tagline:
    "Design and implementation of Customer Data Platform (CDP) solutions with Tracardi across 10 e-commerce environments, enterprise technical discovery across Chile & Latin America, and proposals adopted as official Tracardi features.",
  category: "Solutions & Integration Engineering",
  organization: "Data2o (with testbed origins at DigitalTex)",
  role: "Software Developer",
  period: "Mar 2025 — Dec 2025",
  status: "Completed professional engagement (sanitized documentation)",
  summary:
    "Built Tracardi CDP workflows and REST API / JavaScript integrations across 10 e-commerce environments in a 3-developer team, led technical discovery and demos for Chile & Latin America clients, and proposed enhancements adopted as official Tracardi features (abandoned cart detection).",
  featuredTags: [
    { label: "Tracardi (CDP)" },
    { label: "REST APIs · JavaScript · Vue.js" },
    { label: "10 e-commerce environments" },
    { label: "Docker · AWS · Supabase" },
  ],
  keyMetrics: [
    {
      label: "Integrations",
      value: "10 storefronts",
      note: "E-commerce environments via REST APIs & JS",
    },
    {
      label: "Team",
      value: "3 developers",
      note: "Cross-functional & international collaboration",
    },
    {
      label: "Open Source / CDP",
      value: "Official Tracardi",
      note: "Proposals leading to abandoned cart detection",
    },
    {
      label: "Solutions Eng.",
      value: "Chile & LatAm",
      note: "Technical discovery, requirements & demos",
    },
  ],
  confidentialityNote:
    "To honor confidentiality obligations with a former employer, this case study intentionally omits production client screenshots, client names, credentials, proprietary schemas, and internal metrics. The included diagrams depict sanitized, generic engineering patterns.",
  links: [],
  context: [
    {
      text: "From **March to December 2025**, as a Software Developer at **Data2o**, I researched and implemented **Customer Data Platform (CDP)** solutions powered by **Tracardi** to enable event collection, profile unification, and automated segmentation for e-commerce operations across Chile and Latin America.",
    },
    {
      text: "Earlier, during my professional internship at **DigitalTex** (*Jan – Mar 2024*), I built an e-commerce platform from scratch in **Next.js** (authentication, catalog, cart, simulated payments, and admin tools) that was later reused as a dedicated testbed to validate CDP integrations prior to rollout.",
    },
  ],
  problem: [
    {
      text: "E-commerce teams needed to unify browsing, cart, and purchase events scattered across heterogeneous web storefronts to power automated segmentation and activation—without standardized integrations or out-of-the-box handling for key business scenarios like abandoned carts.",
    },
  ],
  solution: [
    {
      text: "Working within a three-developer team, we integrated CDP pipelines via **REST APIs and JavaScript** across **10 e-commerce environments**, extending **Tracardi** with custom capabilities and automated ingestion/segmentation workflows supported by **Vue.js**, **Docker**, **AWS**, **Supabase**, and **Postman**.",
    },
    {
      text: "Alongside hands-on integration engineering, I supported **Solutions Engineering**: leading technical meetings, requirements discovery, and live demos for prospective enterprise clients across Chile and Latin America, and collaborating in English with Tracardi's international maintainers.",
    },
  ],
  responsibilities: [
    {
      text: "Researched and implemented CDP solutions using **Tracardi**, building custom capabilities and automated data collection and segmentation workflows.",
    },
    {
      text: "Integrated solutions via **REST APIs and JavaScript** across **10 e-commerce environments** alongside a three-developer team using **Postman**, **Docker**, **AWS**, and **Supabase**.",
    },
    {
      text: "Collaborated in English with international Tracardi maintainers, proposing improvements that became official Tracardi features such as **abandoned cart detection**.",
    },
    {
      text: "Led technical discovery meetings, requirements gathering, and live demos for prospective enterprise clients across Chile and Latin America.",
    },
  ],
  technologies: [
    {
      group: "CDP & Integration",
      items: ["Tracardi (CDP)", "REST APIs", "JavaScript", "Vue.js", "Postman"],
    },
    {
      group: "Infrastructure & Tooling",
      items: [
        "Docker",
        "AWS",
        "Supabase",
        "Git",
        "Next.js (CDP testbed)",
      ],
    },
  ],
  architecture: {
    overview: {
      text: "Generic CDP integration pipeline connecting e-commerce storefronts (client-side **JavaScript** & **REST API** events) into containerized **Tracardi** instances (**Docker / AWS**) running automated collection, segmentation, and activation workflows backed by **Supabase** and supporting **Vue.js** tooling.",
    },
    components: [
      {
        name: "E-commerce environments (10 storefronts)",
        role: "Event capture (JS / REST APIs)",
        details:
          "Standardized instrumentation of browsing, cart, and checkout events decoupled from each storefront's internal implementation.",
      },
      {
        name: "CDP Engine (Tracardi + custom extensions)",
        role: "Collection, segmentation & workflows",
        details:
          "Automated event ingestion and segmentation pipelines in Tracardi, including custom extensions and abandoned-cart detection logic.",
      },
      {
        name: "Infrastructure & validation",
        role: "Docker · AWS · Supabase · Testbed",
        details:
          "Reproducible containerized deployments, Postman API contract verification, and pre-production validation on the dedicated Next.js e-commerce testbed.",
      },
    ],
    diagrams: [
      {
        id: "data2o-generic-cdp-architecture",
        title: "Generic CDP integration architecture (sanitized pattern)",
        caption:
          "Generic representation of the ingestion flow from 10 e-commerce storefronts and the Next.js testbed into Tracardi on Docker/AWS, supported by Supabase and Vue.js. Contains no client data or names.",
        src: "/images/projects/data2o-cdp/diagram-01-arquitectura-cdp-en.svg",
        alt: "Sanitized generic CDP integration architecture diagram featuring Tracardi, REST APIs, JavaScript, Docker, AWS, and Supabase",
        kind: "architecture-diagram",
      },
      {
        id: "data2o-abandoned-cart-flow",
        title: "Conceptual abandoned cart detection workflow (Tracardi)",
        caption:
          "Generic cart-and-checkout evaluation pattern alongside the technical collaboration loop (LatAm demos → English maintainer proposal → official Tracardi feature). Omits proprietary client thresholds or rules.",
        src: "/images/projects/data2o-cdp/diagram-02-carrito-abandonado-en.svg",
        alt: "Sanitized conceptual diagram of abandoned cart detection workflow and collaboration with Tracardi maintainers",
        kind: "architecture-diagram",
      },
    ],
  },
  challenges: [
    {
      title: "Standardizing integrations across 10 heterogeneous storefronts",
      problem:
        "Each e-commerce storefront has distinct event payloads, cart lifecycles, and platform constraints, making repeatable integrations error-prone.",
      approach:
        "Combined a controlled e-commerce testbed (originally built at DigitalTex in Next.js) with Postman-verified REST contracts and consistent JavaScript event instrumentation feeding into Tracardi.",
    },
    {
      title: "Translating enterprise LatAm needs into upstream CDP features",
      problem:
        "High-value enterprise scenarios such as reliable abandoned cart detection required capabilities beyond baseline CDP configuration.",
      approach:
        "Captured technical requirements directly in client discovery sessions and collaborated in English with Tracardi's international developers, resulting in abandoned cart detection shipping as an official Tracardi capability.",
    },
  ],
  results: [
    {
      category: "CDP Integration & Product Impact",
      title: "10 e-commerce integrations & official Tracardi feature",
      detail:
        "Delivered **REST API and JavaScript** integrations across **10 e-commerce environments** within a 3-developer team, alongside technical proposals in English that shipped as **official Tracardi features** (abandoned cart detection).",
    },
    {
      category: "Solutions Engineering & Validation",
      title: "Chile/LatAm enterprise demos & dedicated testbed",
      detail:
        "Led technical discovery sessions, requirements gathering, and live demos for enterprise prospects across **Chile and Latin America**, backed by a custom **Next.js** e-commerce testbed (built at DigitalTex) reused to validate CDP pipelines.",
    },
  ],
  media: [],
  seo: {
    title: "CDP Integrations at Data2o — Case Study",
    description:
      "Sanitized case study on Tracardi CDP integrations across 10 e-commerce environments at Data2o, technical demos across Latin America, and upstream Tracardi improvements.",
  },
};

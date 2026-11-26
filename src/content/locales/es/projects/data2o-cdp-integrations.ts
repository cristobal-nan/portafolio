import type { ProjectCaseStudy } from "@/content/types";

export const data2oCdpIntegrationsEs: ProjectCaseStudy = {
  slug: "data2o-cdp-integrations",
  depth: "intermediate",
  depthLabel: "Caso de estudio intermedio",
  title: "Integraciones CDP y Contribuciones a Tracardi en Data2o",
  shortTitle: "Integraciones CDP (Data2o)",
  tagline:
    "Implementación e integración de soluciones de Customer Data Platform (CDP) con Tracardi en 10 entornos de comercio electrónico, preventa técnica en Chile y Latinoamérica, y mejoras incorporadas como funcionalidades oficiales.",
  category: "Solutions & Integration Engineering",
  organization: "Data2o (y entorno de pruebas iniciado en DigitalTex)",
  role: "Desarrollador de Software",
  period: "mar. 2025 — dic. 2025",
  status: "Experiencia profesional completada (documentación sanitizada)",
  summary:
    "Implementación de flujos CDP con Tracardi, integración vía REST APIs y JavaScript en 10 entornos de comercio electrónico junto a un equipo de 3 desarrolladores, demos técnicas para clientes de Chile y Latinoamérica, y propuestas incorporadas oficialmente en Tracardi (detección de carritos abandonados).",
  featuredTags: [
    { label: "Tracardi (CDP)" },
    { label: "REST APIs · JavaScript · Vue.js" },
    { label: "10 entornos e-commerce" },
    { label: "Docker · AWS · Supabase" },
  ],
  keyMetrics: [
    {
      label: "Integraciones",
      value: "10 entornos",
      note: "E-commerce integrados vía REST APIs y JS",
    },
    {
      label: "Equipo",
      value: "3 desarrolladores",
      note: "Trabajo colaborativo + relación internacional",
    },
    {
      label: "Open Source / CDP",
      value: "Tracardi oficial",
      note: "Propuestas derivadas en detección de carritos abandonados",
    },
    {
      label: "Preventa técnica",
      value: "Chile y LatAm",
      note: "Reuniones técnicas, requerimientos y demos",
    },
  ],
  confidentialityNote:
    "Por confidencialidad profesional con un empleador anterior, este caso de estudio omite intencionalmente capturas de entornos productivos de clientes, nombres comerciales, credenciales, esquemas propietarios y métricas internas. Los diagramas incluidos representan patrones arquitectónicos genéricos explícitamente sanitizados.",
  links: [],
  context: [
    {
      text: "Entre **marzo y diciembre de 2025**, como Desarrollador de Software en **Data2o**, investigué e implementé soluciones de **Customer Data Platform (CDP)** basadas en **Tracardi** para habilitar recopilación de eventos, unificación de perfiles y segmentación automatizada en comercios electrónicos de Chile y Latinoamérica.",
    },
    {
      text: "Previamente, durante mi práctica profesional en **DigitalTex** (*ene. – mar. 2024*), construí desde cero un entorno completo de comercio electrónico en **Next.js** (autenticación, catálogo, carrito, pagos simulados y administración) que luego fue reutilizado como banco de pruebas para validar integraciones CDP antes del despliegue en entornos reales.",
    },
  ],
  problem: [
    {
      text: "Los comercios electrónicos necesitaban consolidar eventos de navegación, carrito y compra dispersos en distintos entornos web para activar flujos de segmentación y automatización, sin contar con integraciones estandarizadas ni visibilidad clara de escenarios clave como el abandono de carrito.",
    },
  ],
  solution: [
    {
      text: "En colaboración con un equipo de tres desarrolladores, se integraron soluciones CDP mediante **REST APIs y JavaScript** en **10 entornos de comercio electrónico**, extendiendo **Tracardi** con funcionalidades personalizadas y flujos automatizados de recopilación y segmentación apoyados en **Vue.js**, **Docker**, **AWS**, **Supabase** y **Postman**.",
    },
    {
      text: "Además del rol de ingeniería, se cubrió el frente de **Solutions Engineering**: liderando reuniones técnicas, levantamiento de requerimientos y demostraciones en vivo para potenciales clientes empresariales de Chile y Latinoamérica, y colaborando en inglés con los mantenedores internacionales de Tracardi.",
    },
  ],
  responsibilities: [
    {
      text: "Investigación e implementación de soluciones CDP con **Tracardi**, desarrollando funcionalidades personalizadas y flujos automatizados de recopilación y segmentación de datos.",
    },
    {
      text: "Integración de soluciones vía **REST APIs y JavaScript** en **10 entornos de comercio electrónico** junto a un equipo de tres desarrolladores, usando **Postman**, **Docker**, **AWS** y **Supabase**.",
    },
    {
      text: "Colaboración en inglés con desarrolladores internacionales de Tracardi, proponiendo mejoras que derivaron en funcionalidades oficiales como la **detección de carritos abandonados**.",
    },
    {
      text: "Conducción de reuniones técnicas, levantamiento de requerimientos y demostraciones técnicas para potenciales clientes empresariales de Chile y Latinoamérica.",
    },
  ],
  technologies: [
    {
      group: "CDP e Integración",
      items: ["Tracardi (CDP)", "REST APIs", "JavaScript", "Vue.js", "Postman"],
    },
    {
      group: "Infraestructura y Colaboración",
      items: [
        "Docker",
        "AWS",
        "Supabase",
        "Git",
        "Next.js (entorno de pruebas CDP)",
      ],
    },
  ],
  architecture: {
    overview: {
      text: "Flujo genérico de integración CDP conectando entornos de comercio electrónico (eventos de cliente vía **JavaScript** y **REST APIs**) hacia instancias de **Tracardi** desplegadas en contenedores (**Docker / AWS**) con flujos de recopilación, segmentación y activación apoyados en **Supabase** y vistas complementarias en **Vue.js**.",
    },
    components: [
      {
        name: "Entornos de comercio electrónico (10 sitios)",
        role: "Captura de eventos (JS / REST APIs)",
        details:
          "Instrumentación estandarizada de eventos de navegación, carrito y conversión sin acoplar la lógica interna de cada tienda al motor CDP.",
      },
      {
        name: "Motor CDP (Tracardi + extensiones)",
        role: "Recopilación, segmentación y reglas",
        details:
          "Flujos automatizados de ingesta y segmentación en Tracardi, incluyendo funcionalidades personalizadas y lógica para escenarios como detección de carritos abandonados.",
      },
      {
        name: "Infraestructura y validación",
        role: "Docker · AWS · Supabase · Entorno de pruebas",
        details:
          "Despliegue reproducible en contenedores, verificación de contratos REST con Postman y validación previa en el e-commerce de pruebas construido en Next.js.",
      },
    ],
    diagrams: [
      {
        id: "data2o-generic-cdp-architecture",
        title: "Arquitectura genérica de integración CDP (patrón sanitizado)",
        caption:
          "Representación genérica del flujo de ingesta desde 10 entornos e-commerce y el banco de pruebas Next.js hacia Tracardi desplegado en Docker/AWS, con apoyo de Supabase y Vue.js. Sin datos ni nombres de clientes.",
        src: "/images/projects/data2o-cdp/diagram-01-arquitectura-cdp-es.svg",
        alt: "Diagrama genérico sanitizado de arquitectura de integración CDP con Tracardi, REST APIs, JavaScript, Docker, AWS y Supabase",
        kind: "architecture-diagram",
      },
      {
        id: "data2o-abandoned-cart-flow",
        title:
          "Flujo conceptual de detección de carritos abandonados (Tracardi)",
        caption:
          "Patrón genérico de evaluación de eventos de carrito y compra junto al ciclo de colaboración técnica (demos LatAm → propuesta en inglés → funcionalidad oficial de Tracardi). Omite umbrales o reglas propietarias.",
        src: "/images/projects/data2o-cdp/diagram-02-carrito-abandonado-es.svg",
        alt: "Diagrama conceptual sanitizado del flujo de detección de carritos abandonados y colaboración con mantenedores de Tracardi",
        kind: "architecture-diagram",
      },
    ],
  },
  challenges: [
    {
      title:
        "Estandarizar integraciones a través de 10 entornos heterogéneos",
      problem:
        "Cada entorno de comercio electrónico presenta estructuras de eventos, flujos de carrito y restricciones técnicas distintas, lo que dificulta mantener integraciones consistentes y reproducibles.",
      approach:
        "Se combinó un entorno de e-commerce de pruebas controlado (iniciado en DigitalTex con Next.js) con contratos REST validados en Postman e instrumentación JavaScript estandarizada hacia Tracardi.",
    },
    {
      title:
        "Traducir necesidades de negocio LatAm en mejoras del producto CDP",
      problem:
        "Casos de uso frecuentes en clientes empresariales, como detectar carritos abandonados de forma confiable, requerían capacidades que excedían la configuración inicial del CDP.",
      approach:
        "Se levantaron los requerimientos directamente en reuniones técnicas con clientes y se colaboró en inglés con el equipo internacional de Tracardi, derivando en la incorporación de la detección de carritos abandonados como funcionalidad oficial.",
    },
  ],
  results: [
    {
      category: "Integración y producto CDP",
      title: "10 entornos e-commerce y mejora oficial en Tracardi",
      detail:
        "Integración completada vía **REST APIs y JavaScript** en **10 entornos de comercio electrónico** junto a un equipo de 3 desarrolladores, más propuestas técnicas en inglés que derivaron en **funcionalidades oficiales de Tracardi** (detección de carritos abandonados).",
    },
    {
      category: "Solutions Engineering y validación",
      title: "Demos empresariales en Chile/LatAm y banco de pruebas propio",
      detail:
        "Conducción de reuniones técnicas, levantamiento de requerimientos y demostraciones en vivo para clientes empresariales de **Chile y Latinoamérica**, respaldadas por un entorno e-commerce en **Next.js** (creado en DigitalTex) reutilizado para validar integraciones CDP.",
    },
  ],
  media: [],
  seo: {
    title: "Integraciones CDP en Data2o — Caso de Estudio",
    description:
      "Caso de estudio sanitizado sobre integraciones CDP con Tracardi en 10 entornos e-commerce en Data2o, liderazgo de demos técnicas y mejoras incorporadas en Tracardi.",
  },
};

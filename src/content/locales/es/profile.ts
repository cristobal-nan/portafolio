import type { ProfileContent } from "@/content/types";

export const profileEs: ProfileContent = {
  hero: {
    eyebrow: "Ingeniero Civil en Informática y Telecomunicaciones",
    headline:
      "Desarrollo full stack, diseño de arquitecturas e integración de sistemas.",
    targetRoles: [
      "Software Engineer",
      "Full Stack Developer",
      "Solutions Engineer",
      "Integration Engineer",
    ],
    summary: {
      text: "Ingeniero de software con experiencia en desarrollo full stack, diseño de arquitecturas, integración de sistemas y automatización de procesos empresariales. Capacidad para transformar requerimientos de negocio en soluciones tecnológicas, desde su diseño hasta su implementación y validación. Inglés avanzado aplicado en colaboración técnica internacional.",
    },
    availabilityNote: {
      text: "Santiago, Chile · Español nativo · Inglés avanzado",
    },
    primaryCta: "Ver proyectos destacados",
    secondaryCta: "Contactar",
  },
  experience: [
    {
      id: "mavepos",
      role: "Ingeniero de Software — Proyecto independiente",
      organization: "MavePOS",
      period: "ago. 2026 — actualidad",
      location: "Santiago, Chile",
      summary: {
        text: "Diseño y desarrollo autónomo de un sistema POS + ERP de escritorio con arquitectura modular offline-first, actualmente operativo en dos sucursales (~5.500 productos por tienda), registrando en una de ellas más de 1.200 ventas mensuales.",
      },
      highlights: [
        {
          text: "Implementé módulos de ventas, inventario, finanzas y cuentas por cobrar con transacciones atómicas, trazabilidad de movimientos e integración de periféricos comerciales.",
        },
        {
          text: "Desarrollé la sincronización diferida de inventario, transferencias y homologación de catálogos entre sucursales sin servidor backend propio, facilitando la reposición diaria de mercadería.",
        },
        {
          text: "Optimicé la búsqueda en catálogo (F2/F10) sobre conjuntos de 10.000 a 50.000 productos logrando latencias de entrada p95 inferiores a 15 ms en pruebas de rendimiento.",
        },
        {
          text: "Establecí controles de calidad con más de 1.100 pruebas automatizadas aprobadas, migraciones versionadas y documentación de decisiones arquitectónicas (ADRs).",
        },
      ],
      relatedProjectSlug: "mavepos",
    },
    {
      id: "data2o",
      role: "Desarrollador de Software",
      organization: "Data2o",
      period: "mar. 2025 — dic. 2025",
      location: "Chile · Clientes en Latinoamérica",
      summary: {
        text: "Investigación, desarrollo e integración de soluciones de Customer Data Platform (CDP) con Tracardi en entornos de comercio electrónico, combinando implementación técnica y relación con clientes empresariales.",
      },
      highlights: [
        {
          text: "Investigué e implementé soluciones CDP con Tracardi, desarrollando funcionalidades personalizadas y flujos automatizados de recopilación y segmentación de datos.",
        },
        {
          text: "Integré soluciones mediante REST APIs y JavaScript en 10 entornos de comercio electrónico en colaboración con un equipo de tres desarrolladores.",
        },
        {
          text: "Colaboré en inglés con desarrolladores internacionales y propuse mejoras que derivaron en funcionalidades oficiales de Tracardi, como la detección de carritos abandonados.",
        },
        {
          text: "Lideré reuniones técnicas, levantamiento de requerimientos y demostraciones para potenciales clientes empresariales de Chile y Latinoamérica.",
        },
      ],
      relatedProjectSlug: "data2o-cdp-integrations",
    },
    {
      id: "digitaltex",
      role: "Desarrollador de Software — Práctica profesional",
      organization: "DigitalTex",
      period: "ene. 2024 — mar. 2024",
      location: "Santiago, Chile",
      summary: {
        text: "Construcción de un entorno de comercio electrónico orientado a validación de integraciones CDP e investigación técnica con proveedores internacionales.",
      },
      highlights: [
        {
          text: "Desarrollé desde cero un entorno de comercio electrónico con autenticación, catálogo, carrito, pagos simulados y administración en Next.js, Tailwind CSS y Bootstrap, reutilizado en pruebas de integración CDP.",
        },
        {
          text: "Investigué soluciones y documenté procedimientos técnicos en colaboración con proveedores internacionales en inglés.",
        },
      ],
    },
  ],
  skills: [
    {
      id: "languages-frameworks",
      title: "Lenguajes, Frameworks y Plataformas",
      description:
        "Desarrollo full stack, web, escritorio y aplicaciones móviles multiplataforma.",
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
      title: "Datos y Persistencia",
      description:
        "Bases de datos relacionales, documentales, offline-first y plataformas gestionadas.",
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
      title: "Integraciones, Cloud y Herramientas",
      description:
        "Integración de plataformas empresariales, APIs, contenedores y operación en nube.",
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
      title: "Calidad, Pruebas y Metodologías",
      description:
        "Aseguramiento de calidad automatizado, pruebas de rendimiento/carga y trabajo colaborativo.",
      items: [
        { label: "Vitest" },
        { label: "Pruebas de rendimiento y carga" },
        { label: "ADRs y sistemas de diseño" },
        { label: "Accesibilidad WCAG AA" },
        { label: "Scrum" },
        { label: "Kanban (Trello)" },
      ],
    },
  ],
  education: [
    {
      id: "ic-informatica-telecomunicaciones",
      degree: "Ingeniería Civil en Informática y Telecomunicaciones (Titulado)",
      institution: "Universidad Diego Portales (UDP)",
      period: "2019 — 2025",
      details: [
        {
          text: "Proyecto de título — Sistema integral de gestión de asistencia: solución web y móvil (Android e iOS) propuesta y desarrollada de forma autónoma con autenticación institucional, códigos temporales únicos y backend asíncrono (Python, FastAPI, Flutter, Next.js, Firebase/Firestore, Vercel y Render).",
        },
        {
          text: "Probado en un piloto académico de 5 secciones (~40 estudiantes por sección), acompañado de estudio de dimensionamiento para 2.650 usuarios proyectados y matriz formal de validación funcional y no funcional.",
        },
      ],
    },
  ],
  languages: [
    { language: "Español", level: "Nativo" },
    {
      language: "Inglés",
      level: "Avanzado (colaboración técnica internacional)",
    },
  ],
  contact: {
    lead: {
      text: "Si buscas un perfil capaz de diseñar, construir e integrar soluciones técnicas de extremo a extremo —o liderar conversaciones técnicas con equipos y clientes—, escríbeme por correo o conéctate en LinkedIn.",
    },
    availability: {
      text: "Santiago, Chile · Disponible para roles en Software, Full Stack, Solutions e Integration Engineering.",
    },
  },
};

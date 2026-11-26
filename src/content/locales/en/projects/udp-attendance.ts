import type { ProjectCaseStudy } from "@/content/types";

export const udpAttendanceEn: ProjectCaseStudy = {
  slug: "udp-attendance",
  depth: "detailed",
  depthLabel: "Detailed case study",
  title: "Comprehensive Online Academic Attendance System (UDP)",
  shortTitle: "UDP Attendance System",
  tagline:
    "Administrative web platform (Next.js), cross-platform mobile app (Flutter), and asynchronous backend (FastAPI + Firestore) featuring cryptographically verified dynamic QR tokens, early-warning snapshots, and bidirectional Canvas LMS integration.",
  category: "Web Platform + Mobile App + LMS Integration",
  organization: "Universidad Diego Portales (UDP) — Engineering Thesis (2025)",
  role: "Author & Full-Stack Engineer",
  period: "Capstone Thesis (2025)",
  status: "Validated in live classes & load tests (> 50,000 records)",
  summary:
    "End-to-end academic attendance platform designed for UDP's Faculty of Engineering & Sciences: dynamic QR tokens with WebSocket feedback and screenshot blocking, real-time attendance matrix, daily & early-warning analytics, native Canvas LMS integration, 24 use cases, and validation across > 50,000 records and 1,500 concurrent submissions.",
  featuredTags: [
    { label: "Python · FastAPI · WebSocket" },
    { label: "Flutter (Android & iOS) · Next.js" },
    { label: "Firebase Auth · Cloud Firestore" },
    { label: "Canvas LMS API · > 50k records" },
  ],
  keyMetrics: [
    {
      label: "Load testing",
      value: "> 50,000",
      note: "Total records & 1,500 simultaneous submissions",
    },
    {
      label: "Modeled capacity",
      value: "2,650 users",
      note: "200k records/mo · 8.4 req/s · 29.4 DB ops/s",
    },
    {
      label: "LMS integration",
      value: "Canvas API",
      note: "Syncs courses/schedules & publishes attendance grades",
    },
    {
      label: "Feasibility (FIC-UDP)",
      value: "~5-mo payback",
      note: "NPV CLP $27.8M (6%) · IRR 253% · $0.90/mo DB",
    },
  ],
  links: [
    {
      label: "Download full thesis document (PDF · ES)",
      href: "/docs/memoria-asistencia-udp.pdf",
      type: "document",
    },
    {
      label: "Attendance capture demo video",
      type: "demo",
      placeholderNote:
        "Demo video showing the live attendance recording flow pending upload.",
      checklistRef: "UDP Attendance · Attendance recording video",
    },
  ],
  context: [
    {
      text: "Capstone engineering thesis for **Computer Science & Telecommunications Engineering** at the Faculty of Engineering & Sciences, **Universidad Diego Portales (UDP)** (2025). The project transforms classroom attendance—traditionally manual and fragmented—into a structured data asset supporting proactive student-retention alerts.",
    },
    {
      text: "Designed to integrate natively with existing university infrastructure (**Canvas LMS** and institutional `@mail.udp.cl` Google accounts) using a hybrid methodology (Waterfall for architecture and data modeling + Agile iterations for implementation and pilot testing).",
    },
  ],
  problem: [
    {
      text: "Manual roll calls and sign-in sheets consume valuable lecture time (~5 minutes per class across 9,600 annual faculty sessions), invite transcription errors and proxy signing, and force administrative staff to consolidate fragmented records at semester end.",
    },
    {
      text: "Meanwhile, built-in LMS attendance modules create an *illusion of digital progress*: digitizing sign-in sheets without strong in-room verification, lacking early-warning analytics, and—in the case of Canvas *Roll Call*—providing no public API endpoints for automated synchronization.",
    },
  ],
  solution: [
    {
      text: "**Anti-fraud classroom workflow (Flutter Mobile App):** The instructor or teaching assistant activates a scheduled session; students authenticated via `@mail.udp.cl` generate a **cryptographically signed dynamic QR token** with countdown timer and **screenshot blocking**; the instructor scans it via camera. The backend verifies signature, expiration, enrollment, and duplicates, pushing instant **WebSocket** confirmation to both devices.",
    },
    {
      text: "**Administration, analytics & Canvas sync (Next.js Web Platform):** Centralized console featuring a real-time attendance matrix (with audited manual fallback and session-type filters: Lecture, Recitation, Lab), automated **Daily Reports** (flagging unactivated sessions and 100%-manual sections), **Early-Warning Snapshots** (configurable 70% threshold), multi-sheet CSV/XLSX exports, and **bidirectional Canvas LMS synchronization**.",
    },
  ],
  responsibilities: [
    {
      text: "End-to-end architecture design across 5 components, 24 formal use cases, Cloud Firestore NoSQL schema (9 collections + 2 subcollections), and capacity/economic feasibility modeling for FIC-UDP.",
    },
    {
      text: "Autonomous full-stack implementation of the asynchronous **Python / FastAPI** backend, **Next.js** web platform (Vercel), cross-platform **Flutter** mobile app (Android & iOS), and **Canvas LMS API** integration.",
    },
    {
      text: "Validation plan authoring (28 functional/security + 9 non-functional test cases), live university class piloting, and load testing beyond **50,000 records** and **1,500 simultaneous submissions**.",
    },
  ],
  technologies: [
    {
      group: "Web & Mobile Clients",
      items: [
        "Next.js (SSR / Vercel)",
        "Flutter (Android & iOS)",
        "WebSockets (real-time confirmation)",
        "Google Sign-In (`hostedDomain: @mail.udp.cl`)",
        "Screenshot blocking",
      ],
    },
    {
      group: "Backend, Data & Integrations",
      items: [
        "Python · FastAPI (ASGI / Starlette)",
        "Pydantic + OpenAPI / Swagger",
        "Cloud Firestore (9 collections)",
        "Firebase Authentication",
        "Canvas LMS REST API",
        "Multi-sheet CSV / XLSX export",
      ],
    },
    {
      group: "Deployment & Validation",
      items: [
        "Render (Standard 1 CPU / 2 GB RAM)",
        "Vercel (Web Frontend)",
        "pytest · Cypress · flutter_test · Firebase Emulator",
        "Load testing (> 50k / 1,500 concurrent)",
      ],
    },
  ],
  architecture: {
    overview: {
      text: "Five-component decoupled architecture: **Flutter** (students/instructors) and **Next.js** (admins/instructors) clients connect to an asynchronous **FastAPI** core on **Render**, orchestrating identity (`Firebase Auth`), **Cloud Firestore** collections (`users`, `courses`, `sections/enrolledUsers`, `classMeetings`, `attendanceRecords`, `attendanceSnapshots/results`, `appConfig`, `dailyReports`, `analyticsSummaries`), and external **Canvas LMS** sync.",
    },
    components: [
      {
        name: "Flutter Mobile App (`qr_generator` / `qr_validator`)",
        role: "Android & iOS · Anti-fraud capture",
        details:
          "Domain-restricted `@mail.udp.cl` Google Sign-In, expiring dynamic QR with screenshot blocking, session activation, camera scanner, and real-time WebSocket confirmation.",
      },
      {
        name: "Next.js Web Platform (Vercel)",
        role: "Administration, analytics & Canvas",
        details:
          "CSV bulk user import, batch class scheduling, filterable attendance matrix, drill-down analytics dashboard (course → section → matrix), daily audit reports, early-warning snapshots, and Canvas sync console.",
      },
      {
        name: "FastAPI Backend (Render) + Firestore",
        role: "Async API, token verification & NoSQL",
        details:
          "Cryptographic QR token validation, non-blocking I/O for class-start bursts and Canvas API calls, scheduled daily/snapshot jobs, and horizontally scalable NoSQL storage.",
      },
    ],
    diagrams: [
      {
        id: "udp-diagram-arch",
        title: "High-Level System Architecture Diagram (Fig. 4.1)",
        caption:
          "Interaction across actors (Students, Professors/TAs, Staff), Mobile App, Web Platform, Backend API, Firestore Database, and Canvas LMS integration.",
        kind: "architecture-diagram",
        src: "/images/projects/udp-attendance/diagram-01-arquitectura.png",
        alt: "High-level architecture diagram of the UDP Attendance System",
      },
      {
        id: "udp-diagram-attendance-flow",
        title: "Activity Diagram — QR Attendance Capture Flow (Fig. 4.3)",
        caption:
          "End-to-end flow across Student, Instructor/TA, and Platform: session activation, dynamic QR generation and scan, token verification, persistence, and dual real-time notifications.",
        kind: "architecture-diagram",
        src: "/images/projects/udp-attendance/diagram-02-flujo-asistencia.png",
        alt: "Activity diagram of the QR attendance registration workflow",
      },
      {
        id: "udp-diagram-canvas-flow",
        title: "Activity Diagram — Canvas LMS Integration Flow (Fig. 4.4)",
        caption:
          "Automated import of courses, sections, rosters, and schedules from the Canvas API with interactive confirmation or manual schedule fallback.",
        kind: "architecture-diagram",
        src: "/images/projects/udp-attendance/diagram-03-integracion-canvas.png",
        alt: "Activity diagram of the Canvas LMS synchronization workflow",
      },
    ],
  },
  challenges: [
    {
      title: "Bidirectional Canvas LMS sync despite Roll Call API limitations",
      problem:
        "Canvas's built-in attendance tool (*Roll Call*) exposes no API endpoints to write or manage attendance externally, preventing direct gradebook updates.",
      approach:
        "Engineered a bidirectional sync that imports courses, calendars, and student rosters via Canvas API and automatically publishes calculated attendance percentages per session type as **no-submission graded Assignments** in Canvas.",
      tradeoff:
        "Publishing to dedicated gradebook assignments bypasses the closed Roll Call module and gives students native visibility in Canvas Mobile/Web, requiring an explicit `lmsCourseId` binding per section.",
    },
    {
      title: "Preventing proxy fraud while handling start-of-class bursts",
      problem:
        "Forwarding QR screenshots to absent peers undermines attendance integrity, while hundreds of concurrent scans during the first 5 minutes of a lecture block can bottleneck synchronous backends.",
      approach:
        "Combined short-lived cryptographically signed tokens (~30 s), OS-level screenshot blocking on the QR screen (`RF-3-03`), automated daily audit flags for 100%-manual sessions, and an asynchronous **FastAPI** backend validated beyond 50,000 records and 1,500 simultaneous requests.",
    },
  ],
  results: [
    {
      category: "Live pilot & load validation",
      title: "Real university classes + > 50,000 records & 1,500 concurrent",
      detail:
        "Validated in **live university classes** at UDP and load-tested beyond **50,000 records** and **1,500 simultaneous submissions**, supported by a formal plan of **28 functional/security** and **9 non-functional test cases** (API < 500 ms, QR < 1 s, web matrix < 3 s).",
    },
    {
      category: "Capacity & economic feasibility (FIC-UDP)",
      title: "2,650-user sizing & ~5-month payback",
      detail:
        "Sized for 2,500 students + 150 staff (**200,000 records/month**, peak 4.2 TPS / 8.4 req/s / 29.4 DB ops/s) at an estimated **~$0.903 USD/month** Firestore cost in `southamerica-west1` (Santiago), yielding **NPV CLP $27,844,232 (6%)**, **IRR 253%**, and **0.39-year (~5-month) payback** from recovered instructional time.",
    },
    {
      category: "Supporting evidence",
      title: "Raw load-test charts & repository technical report",
      detail:
        "[PENDING: Attach raw load-test charts/reports (> 50k / 1,500 concurrent) and repository code metrics if codebase access is restored.]",
      isPlaceholder: true,
      checklistRef:
        "UDP Attendance · Load testing evidence / Repository technical report",
    },
  ],
  media: [
    // Web Platform (6 curated high-signal captures)
    {
      id: "udp-web-01-dashboard",
      title: "Admin Panel & Assigned Courses",
      caption:
        "Role-aware entry hub linking administrative modules (Courses, Sections, Meetings, Users, Daily Reports, Early Warning, Canvas Sync) and assigned sections.",
      kind: "screenshot",
      orientation: "landscape",
      group: "Web platform (Next.js)",
      src: "/images/projects/udp-attendance/web-01-dashboard.png",
      alt: "UDP Attendance System main web dashboard",
    },
    {
      id: "udp-web-02-matriz",
      title: "Real-Time Section Attendance Matrix",
      caption:
        "Interactive student-by-session table with dynamic session-type filtering (Lecture/Recitation/Lab), audited manual override, and one-click CSV export.",
      kind: "screenshot",
      orientation: "landscape",
      group: "Web platform (Next.js)",
      src: "/images/projects/udp-attendance/web-02-matriz-asistencia.png",
      alt: "Section attendance matrix in the Next.js web platform",
    },
    {
      id: "udp-web-03-canvas",
      title: "Canvas LMS Integration Console",
      caption:
        "Synchronizes courses, sections, rosters, and calendars from Canvas API and publishes computed attendance percentages back to Canvas assignments.",
      kind: "screenshot",
      orientation: "landscape",
      group: "Web platform (Next.js)",
      src: "/images/projects/udp-attendance/web-03-integracion-canvas.png",
      alt: "Bidirectional Canvas LMS integration screen",
    },
    {
      id: "udp-web-04-analiticas",
      title: "Analytics Dashboard with Drill-Down",
      caption:
        "High-level KPIs (students, sections, average attendance, critical risk), interactive course-to-section drill-down bar chart, and Top 5 at-risk sections.",
      kind: "screenshot",
      orientation: "landscape",
      group: "Web platform (Next.js)",
      src: "/images/projects/udp-attendance/web-04-analiticas.png",
      alt: "Analytics dashboard comparing attendance across courses",
    },
    {
      id: "udp-web-05-reporte-diario",
      title: "Daily Activity Report & Audit View",
      caption:
        "Date-browsable operational audit highlighting activated classes, unactivated sessions, 100%-manual sections, and multi-sheet Excel (.xlsx) export.",
      kind: "screenshot",
      orientation: "landscape",
      group: "Web platform (Next.js)",
      src: "/images/projects/udp-attendance/web-05-reporte-diario.png",
      alt: "Daily activity audit report view",
    },
    {
      id: "udp-web-06-alerta-temprana",
      title: "Early Warning & Historical Snapshots",
      caption:
        "Three scheduled semester cutoffs plus on-demand snapshots flagging students below the configurable attendance threshold (70% default).",
      kind: "screenshot",
      orientation: "landscape",
      group: "Web platform (Next.js)",
      src: "/images/projects/udp-attendance/web-06-alerta-temprana.png",
      alt: "Early warning and historical snapshots view",
    },

    // Mobile App (4 curated full-flow captures)
    {
      id: "udp-mobile-01-login",
      title: "Institutional Authentication (@mail.udp.cl)",
      caption:
        "Google Sign-In configured with `hostedDomain` filtering to restrict login strictly to UDP institutional accounts.",
      kind: "screenshot",
      orientation: "portrait",
      group: "Mobile app (Flutter · Android & iOS)",
      src: "/images/projects/udp-attendance/mobile-01-login-institucional.jpg",
      alt: "Institutional Google account picker in the Flutter mobile app",
    },
    {
      id: "udp-mobile-02-roles",
      title: "Role-Based Mobile Home",
      caption:
        "Dynamically exposes capabilities according to Firestore roles (`admin`, `profesor`, `ayudante`, `estudiante`): generate personal QR or scan & validate.",
      kind: "screenshot",
      orientation: "portrait",
      group: "Mobile app (Flutter · Android & iOS)",
      src: "/images/projects/udp-attendance/mobile-02-inicio-roles.jpg",
      alt: "Role-based home screen in the Flutter mobile app",
    },
    {
      id: "udp-mobile-03-qr",
      title: "Anti-Fraud Dynamic QR Token Generator",
      caption:
        "Short-lived signed token with live countdown, screenshot blocking, and instant WebSocket confirmation once scanned by the instructor.",
      kind: "screenshot",
      orientation: "portrait",
      group: "Mobile app (Flutter · Android & iOS)",
      src: "/images/projects/udp-attendance/mobile-03-token-qr-dinamico.jpg",
      alt: "Dynamic QR token generator screen with countdown timer",
    },
    {
      id: "udp-mobile-04-activar",
      title: "In-Class Session Activation (Instructor / TA)",
      caption:
        "Class selection and explicit activation (`isActiveForAttendance = true`) before opening the camera scanner for enrolled students.",
      kind: "screenshot",
      orientation: "portrait",
      group: "Mobile app (Flutter · Android & iOS)",
      src: "/images/projects/udp-attendance/mobile-04-activar-reunion.jpg",
      alt: "Class activation screen before opening the QR attendance scanner",
    },

    // Pending Video
    {
      id: "udp-attendance-video",
      title: "Attendance recording video",
      caption:
        "[PENDING: Add demo video showing the live flow—session activation, dynamic QR scan, WebSocket confirmation, and real-time web matrix update.]",
      kind: "video-demo",
      group: "Demonstration (Pending)",
      checklistRef: "UDP Attendance · Attendance recording video",
    },
  ],
  seo: {
    title: "UDP Academic Attendance System — Case Study",
    description:
      "Thesis & case study of the UDP Academic Attendance System (Next.js, Flutter, FastAPI, Firestore, Canvas LMS): dynamic anti-fraud QR tokens, analytics, > 50,000 records, and 1,500 concurrent submissions.",
  },
};

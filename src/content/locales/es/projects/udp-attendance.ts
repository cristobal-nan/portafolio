import type { ProjectCaseStudy } from "@/content/types";

export const udpAttendanceEs: ProjectCaseStudy = {
  slug: "udp-attendance",
  depth: "detailed",
  depthLabel: "Caso de estudio detallado",
  title: "Sistema Integral de Registro de Asistencia a Clases en Línea (UDP)",
  shortTitle: "Asistencia Académica UDP",
  tagline:
    "Plataforma web administrativa (Next.js), aplicación móvil multiplataforma (Flutter) y backend asíncrono (FastAPI + Firestore) con tokens QR dinámicos verificados criptográficamente, alertas tempranas e integración bidireccional con Canvas LMS.",
  category: "Plataforma Web + App Móvil + Integración LMS",
  organization: "Universidad Diego Portales (UDP) — Tesis de título (2025)",
  role: "Autor y Desarrollador Full Stack",
  period: "Tesis de título (2025)",
  status: "Validado en clases reales y bajo carga (> 50.000 registros)",
  summary:
    "Solución integral de asistencia académica diseñada para la Facultad de Ingeniería y Ciencias de la UDP: tokens QR dinámicos con WebSocket y bloqueo de capturas, matriz en tiempo real, reportes diarios/alerta temprana, integración nativa con Canvas LMS, 24 casos de uso y validación sobre > 50.000 registros y 1.500 concurrentes.",
  featuredTags: [
    { label: "Python · FastAPI · WebSocket" },
    { label: "Flutter (Android & iOS) · Next.js" },
    { label: "Firebase Auth · Cloud Firestore" },
    { label: "Canvas LMS API · > 50k registros" },
  ],
  keyMetrics: [
    {
      label: "Pruebas de carga",
      value: "> 50.000",
      note: "Registros totales y 1.500 simultáneos validados",
    },
    {
      label: "Capacidad modelada",
      value: "2.650 usuarios",
      note: "200k registros/mes · 8,4 req/s · 29,4 ops BD/s",
    },
    {
      label: "Integración LMS",
      value: "Canvas API",
      note: "Importa cursos/horarios y publica notas de asistencia",
    },
    {
      label: "Factibilidad FIC-UDP",
      value: "Payback ~5 meses",
      note: "VAN CLP $27,8M (6%) · TIR 253% · $0,90 USD/mes DB",
    },
  ],
  links: [
    {
      label: "Ver repositorio en GitHub",
      href: "https://github.com/cristobal-nan/academic-attendance-system",
      type: "repository",
    },
    {
      label: "Descargar memoria completa (PDF)",
      href: "/docs/memoria-asistencia-udp.pdf",
      type: "document",
    },
    {
      label: "Video de registro de asistencia",
      type: "demo",
      placeholderNote:
        "Pendiente de cargar video demostrativo del flujo de registro de asistencia.",
      checklistRef: "Asistencia UDP · Video de registro de asistencia",
    },
  ],
  context: [
    {
      text: "Tesis para optar al título de **Ingeniero Civil en Informática y Telecomunicaciones** en la Facultad de Ingeniería y Ciencias de la **Universidad Diego Portales (UDP)** (2025). El proyecto transforma el control de asistencia en aula —tradicionalmente un proceso manual o fragmentado— en un activo estratégico de gestión académica con alertas tempranas de deserción.",
    },
    {
      text: "La solución se diseñó para operar junto al ecosistema universitario existente (**Canvas LMS** y cuentas Google institucionales `@mail.udp.cl`), ejecutando una metodología híbrida (Cascada en diseño arquitectónico y modelo de datos + iteraciones Ágiles en desarrollo y validación).",
    },
  ],
  problem: [
    {
      text: "Los métodos manuales (lista a viva voz u hojas de firma) consumen tiempo lectivo valioso (~5 min por sesión, equivalente a 9.600 sesiones anuales en la facultad), son propensos a errores de transcripción y suplantación, y obligan al personal administrativo a consolidar fuentes dispersas al cierre del semestre.",
    },
    {
      text: "Por otro lado, los módulos de asistencia incluidos en los LMS tradicionales generan una *ilusión de progreso digital*: convierten el papel en una tabla web sin verificación presencial robusta, sin analíticas de riesgo en tiempo real y —en el caso de Canvas *Roll Call*— sin endpoints en su API para automatizar o auditar los datos.",
    },
  ],
  solution: [
    {
      text: "**Flujo presencial antifraude (App Móvil Flutter):** El docente o ayudante activa la sesión de clase en aula, el estudiante autenticado con `@mail.udp.cl` genera un **token QR dinámico firmado criptográficamente** con cuenta regresiva y **bloqueo de captura de pantalla**, y el docente lo escanea con su cámara. El backend verifica firma, vigencia, inscripción en la sección y duplicados, enviando confirmación instantánea por **WebSocket** a ambos dispositivos.",
    },
    {
      text: "**Gestión, analítica e integración Canvas (Plataforma Web Next.js):** Panel centralizado con matriz de asistencia en tiempo real (con contingencia manual auditada y filtros por tipo de reunión: Cátedra, Ayudantía, Laboratorio), **Reportes Diarios** automáticos (incluyendo alertas por clases no activadas o registradas 100% manualmente), **Alertas Tempranas** por snapshots históricos configurables (umbral 70% por defecto), exportación CSV/XLSX multi-hoja e **integración bidireccional con Canvas LMS**.",
    },
  ],
  responsibilities: [
    {
      text: "Propuesta, diseño de arquitectura de 5 componentes, especificación de 24 casos de uso, modelado NoSQL en Cloud Firestore (9 colecciones y 2 subcolecciones) y estudio de capacidad y factibilidad económica para la FIC-UDP.",
    },
    {
      text: "Desarrollo autónomo completo del backend asíncrono en **Python / FastAPI**, plataforma web en **Next.js** (Vercel), aplicación móvil **Flutter** (Android e iOS) e integración con la API de **Canvas LMS**.",
    },
    {
      text: "Diseño de matriz de validación (28 casos funcionales/seguridad + 9 no funcionales), pilotaje en clases reales y pruebas de carga con más de **50.000 registros** y **1.500 registros simultáneos**.",
    },
  ],
  technologies: [
    {
      group: "Plataforma Web y Móvil",
      items: [
        "Next.js (SSR / Vercel)",
        "Flutter (Android e iOS)",
        "WebSockets (confirmación en tiempo real)",
        "Google Sign-In (`hostedDomain: @mail.udp.cl`)",
        "Bloqueo de captura de pantalla",
      ],
    },
    {
      group: "Backend, Datos e Integraciones",
      items: [
        "Python · FastAPI (ASGI / Starlette)",
        "Pydantic + OpenAPI / Swagger",
        "Cloud Firestore (9 colecciones)",
        "Firebase Authentication",
        "Canvas LMS REST API",
        "Exportación CSV / XLSX multi-hoja",
      ],
    },
    {
      group: "Despliegue y Validación",
      items: [
        "Render (Backend Standard 1 CPU / 2 GB RAM)",
        "Vercel (Frontend Web)",
        "pytest · Cypress · flutter_test · Firebase Emulator",
        "Pruebas de carga (> 50k / 1.500 concurrentes)",
      ],
    },
  ],
  architecture: {
    overview: {
      text: "Arquitectura de 5 componentes desacoplados: clientes **Flutter** (estudiantes/docentes) y **Next.js** (administrativos/docentes) interactúan con un núcleo **FastAPI** asíncrono desplegado en **Render** que orquesta autenticación (`Firebase Auth`), persistencia en **Cloud Firestore** (`users`, `courses`, `sections/enrolledUsers`, `classMeetings`, `attendanceRecords`, `attendanceSnapshots/results`, `appConfig`, `dailyReports`, `analyticsSummaries`) y sincronización con **Canvas LMS**.",
    },
    components: [
      {
        name: "App Móvil Flutter (`qr_generator` / `qr_validator`)",
        role: "Android & iOS · Captura antifraude",
        details:
          "Inicio de sesión restringido a `@mail.udp.cl`, generación de QR temporal con cuenta regresiva y bloqueo de screenshots, activación de reuniones, escaneo por cámara y confirmación en vivo vía WebSocket.",
      },
      {
        name: "Plataforma Web Next.js (Vercel)",
        role: "Administración, analítica y Canvas",
        details:
          "Gestión masiva por CSV, creación de reuniones por lote (*batch*), matriz de asistencia filtrable, dashboard con *drill-down* (curso → sección → matriz), reportes diarios, snapshots de alerta temprana y consola de sincronización Canvas.",
      },
      {
        name: "Backend FastAPI (Render) + Firestore",
        role: "API asíncrona, seguridad y datos NoSQL",
        details:
          "Validación criptográfica de tokens QR, manejo no bloqueante de picos de I/O y llamadas a Canvas API, tareas programadas de reportes diarios/snapshots y modelo NoSQL escalable.",
      },
    ],
    diagrams: [
      {
        id: "udp-diagram-arch",
        title: "Diagrama de Arquitectura de Alto Nivel (Fig. 4.1)",
        caption:
          "Interacción entre actores (Estudiantes, Profesores/Ayudantes y Administrativos), Aplicación Móvil, Plataforma Web, Backend (API y lógica), Base de Datos Firestore e Integración con Canvas LMS.",
        kind: "architecture-diagram",
        src: "/images/projects/udp-attendance/diagram-01-arquitectura.png",
        alt: "Diagrama de arquitectura de alto nivel del Sistema de Asistencia UDP",
      },
      {
        id: "udp-diagram-attendance-flow",
        title: "Diagrama de Actividades — Registro de Asistencia QR (Fig. 4.3)",
        caption:
          "Flujo coordinado entre Alumno, Profesor/Ayudante y Plataforma: activación de reunión, generación y escaneo del QR dinámico, verificación de vigencia/autenticidad del token y notificaciones simultáneas.",
        kind: "architecture-diagram",
        src: "/images/projects/udp-attendance/diagram-02-flujo-asistencia.png",
        alt: "Diagrama de actividades del flujo de registro de asistencia con código QR",
      },
      {
        id: "udp-diagram-canvas-flow",
        title: "Diagrama de Actividades — Integración con Canvas LMS (Fig. 4.4)",
        caption:
          "Sincronización automatizada de cursos, secciones, estudiantes y horarios desde la API de Canvas con confirmación interactiva o definición manual cuando el curso no posee calendario configurado.",
        kind: "architecture-diagram",
        src: "/images/projects/udp-attendance/diagram-03-integracion-canvas.png",
        alt: "Diagrama de actividades del flujo de integración con Canvas LMS",
      },
    ],
  },
  challenges: [
    {
      title: "Integración bidireccional con Canvas pese a limitaciones de Roll Call",
      problem:
        "El módulo nativo de asistencia de Canvas (*Roll Call*) no expone endpoints en su API para escribir o sincronizar registros externos, impidiendo reflejar directamente la asistencia en el LMS institucional.",
      approach:
        "Se diseñó un flujo de sincronización que importa cursos, horarios e inscripciones desde Canvas API y publica automáticamente los porcentajes calculados por tipo de reunión como **Tareas calificadas sin entregables** en el libro de calificaciones de Canvas.",
      tradeoff:
        "Usar tareas dedicadas en el libro de notas evita depender de un módulo cerrado y entrega visibilidad inmediata al estudiante en la app oficial de Canvas, a cambio de mantener un vínculo explícito (`lmsCourseId`) por sección.",
    },
    {
      title: "Prevención de fraude presencial y picos de concurrencia al inicio de clase",
      problem:
        "Permitir que un estudiante envíe una captura de su QR a un compañero ausente invalida la presencialidad, mientras que cientos de registros simultáneos en los primeros 5 minutos del bloque pueden saturar backends síncronos.",
      approach:
        "Se combinaron tokens dinámicos firmados de corta duración (~30 s), bloqueo de capturas de pantalla en la app móvil (`RF-3-03`), alerta automática en el reporte diario ante secciones con 100% de registro manual, y un backend asíncrono en **FastAPI** validado con > 50.000 registros y 1.500 concurrentes.",
    },
  ],
  results: [
    {
      category: "Validación real y carga",
      title: "Clases reales + > 50.000 registros y 1.500 simultáneos",
      detail:
        "Prototipo validado en **clases reales** de la UDP y en pruebas de carga superando **50.000 registros** y **1.500 registros simultáneos**, respaldado por una matriz formal de **28 casos funcionales/seguridad** y **9 criterios no funcionales** (API < 500 ms, QR < 1 s, matriz web < 3 s).",
    },
    {
      category: "Modelamiento de capacidad y viabilidad (FIC-UDP)",
      title: "Escalabilidad a 2.650 usuarios y retorno en ~5 meses",
      detail:
        "Modelado para 2.500 estudiantes + 150 docentes/admin (**200.000 registros/mes**, pico 4,2 TPS / 8,4 req/s / 29,4 ops BD/s) con costo estimado de Firestore de **~$0,903 USD/mes** en `southamerica-west1` (Santiago), **VAN de CLP $27.844.232 (6%)**, **TIR de 253%** y recuperación estimada en **0,39 años (~5 meses)** por liberación de tiempo docente.",
    },
    {
      category: "Evidencias complementarias",
      title: "Gráficos de pruebas de carga y detalle del repositorio",
      detail:
        "[PENDIENTE: Adjuntar reportes/gráficos originales de las pruebas de carga (> 50k / 1.500 concurrentes) y, si se recupera acceso al repositorio, métricas de código.]",
      isPlaceholder: true,
      checklistRef:
        "Asistencia UDP · Evidencias de pruebas de carga / Informe del repositorio",
    },
  ],
  media: [
    // Plataforma Web (6 capturas clave seleccionadas)
    {
      id: "udp-web-01-dashboard",
      title: "Panel de Administración y Mis Cursos",
      caption:
        "Acceso centralizado por rol a módulos administrativos (Cursos, Secciones, Reuniones, Usuarios, Reportes Diarios, Alertas Tempranas e Integración Canvas) y secciones asignadas.",
      kind: "screenshot",
      orientation: "landscape",
      group: "Plataforma web (Next.js)",
      src: "/images/projects/udp-attendance/web-01-dashboard.png",
      alt: "Dashboard principal de la plataforma web del Sistema de Asistencia UDP",
    },
    {
      id: "udp-web-02-matriz",
      title: "Matriz de Asistencia por Sección en tiempo real",
      caption:
        "Tabla interactiva por estudiante y sesión con filtro dinámico por tipo de reunión (Cátedra/Ayudantía/Laboratorio), contingencia manual auditada y exportación directa a CSV.",
      kind: "screenshot",
      orientation: "landscape",
      group: "Plataforma web (Next.js)",
      src: "/images/projects/udp-attendance/web-02-matriz-asistencia.png",
      alt: "Matriz de asistencia por sección en la plataforma web UDP",
    },
    {
      id: "udp-web-03-canvas",
      title: "Módulo de Integración con Canvas LMS",
      caption:
        "Sincronización de cursos, secciones, usuarios y horarios desde Canvas API y publicación de porcentajes de asistencia como calificaciones en el LMS.",
      kind: "screenshot",
      orientation: "landscape",
      group: "Plataforma web (Next.js)",
      src: "/images/projects/udp-attendance/web-03-integracion-canvas.png",
      alt: "Módulo de integración bidireccional con Canvas LMS",
    },
    {
      id: "udp-web-04-analiticas",
      title: "Dashboard de Analíticas con drill-down",
      caption:
        "KPIs globales (estudiantes, secciones, asistencia promedio y riesgo crítico), gráfico comparativo por curso con drill-down a secciones y ranking Top 5 secciones en riesgo.",
      kind: "screenshot",
      orientation: "landscape",
      group: "Plataforma web (Next.js)",
      src: "/images/projects/udp-attendance/web-04-analiticas.png",
      alt: "Dashboard de analíticas y comparativa de asistencia por curso",
    },
    {
      id: "udp-web-05-reporte-diario",
      title: "Reporte de Actividad Diario y auditoría",
      caption:
        "Resumen histórico navegable por fecha con clases activadas, clases no activadas, alertas de secciones registradas 100% manualmente y exportación a Excel (.xlsx) multi-hoja.",
      kind: "screenshot",
      orientation: "landscape",
      group: "Plataforma web (Next.js)",
      src: "/images/projects/udp-attendance/web-05-reporte-diario.png",
      alt: "Módulo de reporte de actividad diario con auditoría de sesiones",
    },
    {
      id: "udp-web-06-alerta-temprana",
      title: "Alertas Tempranas y Snapshots históricos",
      caption:
        "Gestión de los 3 cortes semestrales programados y snapshots bajo demanda para detectar proactivamente estudiantes bajo el umbral de asistencia (70% configurable).",
      kind: "screenshot",
      orientation: "landscape",
      group: "Plataforma web (Next.js)",
      src: "/images/projects/udp-attendance/web-06-alerta-temprana.png",
      alt: "Módulo de alertas tempranas y snapshots históricos por corte",
    },

    // Aplicación Móvil (4 capturas clave del flujo completo)
    {
      id: "udp-mobile-01-login",
      title: "Autenticación institucional (@mail.udp.cl)",
      caption:
        "Google Sign-In configurado con filtro `hostedDomain` restringiendo el acceso exclusivamente a cuentas institucionales de la UDP.",
      kind: "screenshot",
      orientation: "portrait",
      group: "Aplicación móvil (Flutter · Android & iOS)",
      src: "/images/projects/udp-attendance/mobile-01-login-institucional.jpg",
      alt: "Selección de cuenta institucional @mail.udp.cl en la aplicación móvil Flutter",
    },
    {
      id: "udp-mobile-02-roles",
      title: "Inicio móvil con permisos basados en roles",
      caption:
        "Habilitación dinámica de acciones según los roles asignados en Firestore (`admin`, `profesor`, `ayudante`, `estudiante`): generar QR o escanear y validar.",
      kind: "screenshot",
      orientation: "portrait",
      group: "Aplicación móvil (Flutter · Android & iOS)",
      src: "/images/projects/udp-attendance/mobile-02-inicio-roles.jpg",
      alt: "Pantalla principal de la app móvil mostrando acciones habilitadas por rol",
    },
    {
      id: "udp-mobile-03-qr",
      title: "Generador de Token QR Dinámico antifraude",
      caption:
        "Token firmado de corta duración con cuenta regresiva visible, bloqueo de captura de pantalla y confirmación instantánea por WebSocket tras ser validado.",
      kind: "screenshot",
      orientation: "portrait",
      group: "Aplicación móvil (Flutter · Android & iOS)",
      src: "/images/projects/udp-attendance/mobile-03-token-qr-dinamico.jpg",
      alt: "Pantalla de generación de token QR dinámico con cuenta regresiva en Flutter",
    },
    {
      id: "udp-mobile-04-activar",
      title: "Activación de sesión en aula (Docente / Ayudante)",
      caption:
        "Selección de la clase programada y activación controlada (`isActiveForAttendance = true`) previa a habilitar el escáner de cámara para los estudiantes inscritos.",
      kind: "screenshot",
      orientation: "portrait",
      group: "Aplicación móvil (Flutter · Android & iOS)",
      src: "/images/projects/udp-attendance/mobile-04-activar-reunion.jpg",
      alt: "Pantalla de activación de reunión para iniciar la toma de asistencia en aula",
    },

    // Video pendiente
    {
      id: "udp-attendance-video",
      title: "Video de registro de asistencia",
      caption:
        "[PENDIENTE: Agregar video demostrativo mostrando el flujo completo en vivo (activación de clase, QR dinámico, escaneo y actualización inmediata en la matriz web).]",
      kind: "video-demo",
      group: "Demostración (Pendiente)",
      checklistRef: "Asistencia UDP · Video de registro de asistencia",
    },
  ],
  seo: {
    title: "Sistema de Asistencia Académica UDP — Caso de Estudio",
    description:
      "Tesis y caso de estudio del Sistema Integral de Asistencia UDP (Next.js, Flutter, FastAPI, Firestore, Canvas LMS): QR dinámicos antifraude, analíticas, > 50.000 registros y 1.500 concurrentes.",
  },
};

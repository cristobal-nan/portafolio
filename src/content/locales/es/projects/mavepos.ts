import type { ProjectCaseStudy } from "@/content/types";

export const maveposEs: ProjectCaseStudy = {
  slug: "mavepos",
  depth: "very-detailed",
  depthLabel: "Caso de estudio muy detallado",
  title: "MavePOS — POS y Suite ERP Multi-Tienda 100% Offline",
  shortTitle: "MavePOS",
  tagline:
    "Aplicación de escritorio para Windows diseñada para operar 100% offline con SQLite transaccional (WAL), caché write-through en RAM para hasta 50.000 productos, impresión térmica híbrida, licenciamiento criptográfico por hardware y suite ERP multi-sucursal vía Google Drive.",
  category: "Escritorio Windows · POS + ERP Offline",
  organization: "Mave (Proyecto independiente en producción)",
  role: "Ingeniero de Software — Proyecto independiente",
  period: "ago. 2026 — actualidad",
  status: "Operativo en 2 sucursales (~5.500 productos · +1.200 ventas/mes por tienda · v1.0.15)",
  summary:
    "Sistema Punto de Venta y suite ERP modular 100% offline sobre Electron, React, TypeScript y SQLite (WAL), operativo en dos sucursales con ~5.500 productos por tienda y más de 1.200 transacciones mensuales por sucursal. Incluye 1.078 pruebas automatizadas (100%), benchmarks hasta 50.000 productos con 0 long tasks, 19 ADRs y 14 capturas reales.",
  featuredTags: [
    { label: "Electron 31 · React 18 · TypeScript 5" },
    { label: "SQLite 3 (WAL) · RAM Cache" },
    { label: "ESC/POS · C# GDI RAW" },
    { label: "1.078 pruebas · 19 ADRs" },
  ],
  keyMetrics: [
    {
      label: "Pruebas automatizadas",
      value: "1.078 / 1.078",
      note: "97 suites · 100% en 10,47 s (Electron + SQLite real)",
    },
    {
      label: "Latencia escritura (50k)",
      value: "8,3 – 8,5 ms p95",
      note: "0 long tasks en Catálogo F2 y Buscador F10",
    },
    {
      label: "Escala del código",
      value: "64.558 LOC",
      note: "194 archivos fuente · 23.179 LOC tests · 19 ADRs",
    },
    {
      label: "Accesibilidad y UI",
      value: "390 / 390",
      note: "WCAG AA (768p/900p/1080p) · 0 layout shift",
    },
  ],
  links: [
    {
      label: "Video de demostración general",
      type: "demo",
      placeholderNote:
        "Pendiente de cargar video demostrativo general del flujo completo de MavePOS.",
      checklistRef: "MavePOS · Video de demostración general",
    },
    {
      label: "Video de hardware (ESC/POS + HID + cajón)",
      type: "demo",
      placeholderNote:
        "Pendiente de cargar video demostrando escáner USB HID, impresora térmica 58/80 mm y cajón RJ11.",
      checklistRef: "MavePOS · Video de hardware",
    },
    {
      label: "Video de sincronización multi-tienda",
      type: "demo",
      placeholderNote:
        "Pendiente de cargar video demostrando sincronización de snapshots y transferencias vía Google Drive.",
      checklistRef: "MavePOS · Video de sincronización",
    },
  ],
  context: [
    {
      text: "MavePOS nace como una aplicación de escritorio autónoma para Windows (instalador NSIS de 84,1 MB, 21 builds progresivos de v1.0.0 a v1.0.15) pensada para comercios minoristas y negocios multi-sucursal que necesitan continuidad operativa total sin depender de conexión a internet ni pagar mensualidades cloud.",
    },
    {
      text: "Desde un único código fuente, el sistema soporta tanto una edición base de Punto de Venta (POS) como una suite ERP desacoplada y cargada bajo demanda (*lazy-loaded*) orientada a negocios con bodega central, múltiples sucursales y cuentas corrientes de clientes.",
    },
  ],
  problem: [
    {
      text: "Los comercios minoristas y cadenas pequeñas enfrentan cortes intermitentes de conectividad que detienen soluciones POS SaaS, latencia perceptible al buscar en catálogos de decenas de miles de productos con variaciones y costos recurrentes elevados por cada caja o sucursal.",
    },
    {
      text: "A nivel operativo, coordinar una bodega central con tiendas remotas suele hacerse con planillas manuales propensas a doble descuento de inventario, divergencias de precios/códigos entre sucursales, cierres de caja lentos y falta de trazabilidad auditable en cambios de producto y ventas a crédito.",
    },
  ],
  solution: [
    {
      text: "**Núcleo POS 100% offline:** Apertura y arqueo físico de caja por denominaciones CLP (con separación entre caja de ventas y caja de recargas), catálogo en memoria RAM *write-through* para búsqueda instantánea (`ProductSearch` con operador `%` AND y tolerancia a ceros iniciales), productos simples y variables con propagación en cascada, proveedores N:M, múltiples tickets simultáneos persistidos en SQLite, cambios de producto (ventana de 30 días), Kardex cronológico inmutable, impresión térmica híbrida (ESC/POS 58/80 mm + Windows Spooler RAW en C# GDI + A4), importación/exportación Excel, analítica en Recharts y respaldos rotativos consistentes con `db.backup()`.",
    },
    {
      text: "**Suite ERP modular (desbloqueada por licencia offline):** Incluye gestión de Clientes y Cuentas por Cobrar con validación de RUT chileno (Módulo 11), cupos de crédito y reversas auditables con saldo a favor; además del módulo de Bodega y Multi-Tienda con Modo Bodega Pura, sincronización de snapshots JSON atómicos vía Google Drive for Desktop, Repartos Inteligentes según tamaño de paquete y stock mínimo, Mesa de Transferencias con escaneo F3 y despacho parcial durable, y Catálogo Consolidado con homologación asistida en vivo (`patch_batch_*.json`).",
    },
  ],
  responsibilities: [
    {
      text: "Diseño y desarrollo autónomo de extremo a extremo del sistema POS + ERP de escritorio con arquitectura modular offline-first, abarcando módulos de ventas, inventario, finanzas, cuentas por cobrar y logística multi-sucursal.",
    },
    {
      text: "Integración de periféricos comerciales (escáner USB HID, impresión térmica ESC/POS + Windows Spooler RAW en C# GDI y cajón de dinero RJ11) y diseño del protocolo de sincronización, transferencias y homologación sin servidor central.",
    },
    {
      text: "Optimización de rendimiento sobre catálogos de 10.000 a 50.000 productos (< 15 ms p95), definición del sistema de diseño dual (WCAG AA), 19 ADRs, 26 migraciones SQLite y suite de 1.078 pruebas automatizadas.",
    },
  ],
  technologies: [
    {
      group: "Escritorio y Frontend",
      items: [
        "Electron 31",
        "React 18",
        "TypeScript 5",
        "Vite (electron-vite)",
        "Zustand",
        "Tailwind CSS",
        "Recharts",
        "Lucide React",
      ],
    },
    {
      group: "Persistencia, Datos y Exportación",
      items: [
        "SQLite 3 (better-sqlite3)",
        "Modo WAL + Foreign Keys ON",
        "26 migraciones versionadas",
        "Caché write-through en RAM",
        "SheetJS (xlsx)",
        "Google Drive Desktop (sync JSON)",
      ],
    },
    {
      group: "Hardware, Seguridad y Empaquetado",
      items: [
        "Escáner USB HID",
        "node-thermal-printer (ESC/POS 58/80 mm)",
        "Windows Spooler RAW (C# GDI)",
        "Cajón de dinero RJ11",
        "HMAC-SHA256 + MachineGuid",
        "electron-builder (NSIS Windows)",
      ],
    },
    {
      group: "Calidad, Reglas y Benchmarks",
      items: [
        "Vitest 2.1 (ELECTRON_RUN_AS_NODE=1)",
        "check:rules (lint arquitectónico)",
        "Arnés de rendimiento Electron (scripts/catalog-perf)",
        "Auditoría automatizada WCAG AA",
      ],
    },
  ],
  architecture: {
    overview: {
      text: "Arquitectura de procesos aislados en Electron (`contextIsolation: true`) con puente IPC estrictamente tipado (`Preload Bridge`). El *Renderer* mantiene una caché *write-through* en RAM (`memoryCatalogStore`) sincronizada con el *Main Process*, que ejecuta todas las transacciones críticas en SQLite (`IMMEDIATE`, WAL, 26 migraciones). La suite ERP vive en un runtime desacoplado (`ErpRuntime`) cargado bajo demanda tras validación criptográfica HMAC-SHA256, manteniendo limpio el grafo estático del POS base.",
    },
    components: [
      {
        name: "Renderer Process + memoryCatalogStore",
        role: "Interfaz operativa y caché RAM",
        details:
          "Vistas POS (F1–F6 / F10) y chunks ERP lazy-loaded operando sobre un índice en memoria sincronizado por write-through y tablas con ventana DOM (`WindowedTableBody`) para sostener fluidez con 50.000 productos.",
      },
      {
        name: "Preload Bridge + Main Process",
        role: "IPC tipado, servicios Core y ErpRuntime",
        details:
          "Servicios de Ventas, Productos, Caja, Inventario, Reportes, Respaldos y Licencias HMAC. `ErpRuntime` habilita Clientes, Bodega, Repartos, Transferencias y Sync solo cuando la licencia offline lo autoriza.",
      },
      {
        name: "SQLite WAL + Periféricos + Drive Sync",
        role: "Persistencia, hardware y multi-tienda",
        details:
          "SQLite 3 con `foreign_keys = ON`, respaldos `db.backup()` rotativos (7 copias), `PrinterService` híbrido (ESC/POS + C# GDI RAW + A4) e intercambio de archivos JSON (`stock`/`transfer`/`patch`) sobre Google Drive Desktop.",
      },
    ],
    diagrams: [
      {
        id: "mavepos-arch-general",
        title: "Arquitectura general del sistema (procesos, persistencia y aislamiento ERP)",
        caption:
          "Separación entre Renderer Process (POS + ERP lazy-loaded + RAM write-through), Preload IPC tipado, Main Process (servicios Core, ErpRuntime validado por HMAC y PrinterService híbrido), SQLite WAL, periféricos y Google Drive Desktop.",
        kind: "architecture-diagram",
        src: "/images/projects/mavepos/arquitectura-general.png",
        alt: "Diagrama de arquitectura general de MavePOS mostrando procesos Electron, SQLite WAL, ERP lazy-loaded, periféricos y sincronización",
      },
      {
        id: "mavepos-arch-multistore",
        title: "Flujo ERP multi-tienda offline, transferencias y homologación",
        caption:
          "Ciclo operativo entre Bodega Central y sucursales vía snapshots JSON atómicos, repartos inteligentes, despacho parcial durable y lotes de homologación de catálogo (`patch_batch_*.json`).",
        kind: "architecture-diagram",
        src: "/images/projects/mavepos/flujo-erp-multitienda.png",
        alt: "Diagrama de flujo ERP multi-tienda offline de MavePOS entre bodega central y sucursales vía Google Drive",
      },
    ],
    adrs: [
      {
        id: "ADR-0008",
        title: "Licenciamiento offline por hardware",
        summary:
          "Firma criptográfica HMAC-SHA256 ligada al `MachineGuid` de Windows con generador privado independiente, eliminando servidores de activación.",
      },
      {
        id: "ADR-0010",
        title: "Aislamiento modular ERP",
        summary:
          "Rutas, stores y servicios ERP empaquetados en chunks lazy-loaded con revalidación en tiempo de ejecución; el POS base conserva un grafo estático limpio.",
      },
      {
        id: "ADR-0012",
        title: "Matriz comercial ortogonal (4 planes)",
        summary:
          "Un único código fuente gobierna 4 planes combinando Edición (`pos` / `erp`) y Topología (`monocaja` / `multicaja`).",
      },
      {
        id: "ADR-0015 & ADR-0019",
        title: "Mesa de transferencias y emisión durable",
        summary:
          "Despacho parcial sin doble descuento de inventario, aislamiento entre tandas y reintento seguro ante desconexiones de sincronización.",
      },
      {
        id: "ADR-0016 & ADR-0017",
        title: "Reversas de crédito y doble arqueo",
        summary:
          "Reversas auditables con saldos a favor sin borrar historial contable, y conciliación separada de caja de ventas vs. caja de recargas con depósitos por fecha efectiva.",
      },
    ],
  },
  designSystem: {
    overview: {
      text: "Documentado formalmente en `docs/UI_SYSTEM.md` y ADR-0006 para operación continua en monitores de caja (`1366×768`, `1600×900`, `1920×1080`) con foco estricto en velocidad de teclado, legibilidad numérica y cero desplazamiento visual (*Zero Layout Shift*).",
    },
    pillars: [
      {
        title: "Modo Claro y Slate Profundo desacoplado de acentos",
        details:
          "Superficies oscuras en Slate Profundo (`#0F172A` / `#1E293B` / `#334155`) ortogonales a 4 paletas de acento (`lila`, `esmeralda`, `oceano`, `grafito`) con contraste WCAG AA verificado (texto normal ≥ 4,5:1, bordes ≥ 3,07:1, foco ≥ 3,10:1).",
      },
      {
        title: "Piso tipográfico de 14 px y números tabulares",
        details:
          "Piso mínimo `14px` en `tailwind.config.js` para evitar recorte de glifos en cajas, combinado con `tabular-nums` y `font-mono` en montos CLP, existencias, folios y fechas para alineación vertical sin vibración.",
      },
      {
        title: "Geometría fija y validaciones sin Layout Shift",
        details:
          "Anatomía estandarizada (`ViewHeader` → `SubTabs` → área de trabajo con dimensiones invariables), validaciones en línea que preservan la altura de fila/tarjeta y vista de papel térmico físico siempre blanca (`#FFFFFF`) incluso en modo oscuro.",
      },
      {
        title: "Operación 100% teclado y accesibilidad ARIA",
        details:
          "Atajos F1–F12, autofocus permanente en lector HID, anillos `:focus-visible` temáticos, modales con `role=\"dialog\"` / `aria-modal` / `Escape`, `aria-live=\"polite\"` en toasts y respeto estricto de `motion-reduce`.",
      },
    ],
  },
  challenges: [
    {
      title: "Fluidez de interfaz con catálogos de 10.000 a 50.000 productos",
      problem:
        "En la línea base, renderizar tablas extensas, historiales de 1.000 guías y el selector de equivalentes sobre 50.000 productos provocaba latencias p95 de 150–352 ms (y hasta 1.770 ms en equivalentes) con long tasks > 50 ms que degradaban la escritura rápida en caja.",
      approach:
        "Se combinó el índice *write-through* en RAM con virtualización de ventana DOM (`WindowedTableBody`, acotando el montaje a ~20–23 filas DOM), indexación previa de búsquedas y caché de ranking con corte a 50 en el selector de equivalentes, validando todo en un arnés de producción real en Electron.",
      tradeoff:
        "Mantener una caché en memoria exige garantizar paridad estricta de orden, paginación y herencia de categorías frente a SQLite; se cubrió con 22 suites (242 pruebas) de paridad RAM vs. SQLite.",
    },
    {
      title: "Sincronización multi-tienda sin servidor cloud ($0/mes)",
      problem:
        "Permitir que una bodega central y múltiples sucursales compartan stock, despachos parciales y homologaciones de catálogo usando solo Google Drive Desktop, evitando archivos corruptos a medio escribir, dobles descuentos o pérdida de transferencias ante cortes.",
      approach:
        "Se diseñó un protocolo de snapshots JSON atómicos, recepción manual auditada en Bandeja de Entrada, emisión durable con reintento seguro (ADR-0019) y despacho parcial aislado por tanda (ADR-0015).",
      tradeoff:
        "La consistencia es eventual (dependiente de la sincronización de Drive cuando vuelve internet) en lugar de tiempo real; por ello la consulta de stock remoto en F10 es diferida (`F8`) para no bloquear jamás el cobro local.",
    },
    {
      title: "Impresión térmica confiable y licenciamiento sin internet",
      problem:
        "Las impresoras térmicas de 58/80 mm en Windows presentan incompatibilidades frecuentes entre drivers nativos y comandos ESC/POS, mientras que la distribución comercial offline requiere evitar copia directa sin levantar servidores de activación.",
      approach:
        "Se implementó un `PrinterService` híbrido (ESC/POS nativo + puente C# GDI Windows Spooler RAW + soporte A4) y licenciamiento offline con firmas HMAC-SHA256 ligadas al `MachineGuid` de Windows (ADR-0008).",
    },
  ],
  testSuiteBreakdown: {
    summary:
      "Ejecutada con Vitest 2.1.9 bajo el binario real de Electron (`ELECTRON_RUN_AS_NODE=1`) validando consultas, transacciones `IMMEDIATE` y 26 migraciones contra `better-sqlite3` real.",
    staticChecks: [
      "npm run check:rules — 0 errores (reglas arquitectónicas y tokens de tema)",
      "tsc --noEmit (Node: Main + Preload) — 0 errores",
      "tsc --noEmit (Web: Renderer) — 0 errores",
    ],
    totalSuites: 97,
    totalTests: 1078,
    duration: "10,47 s",
    domains: [
      {
        domain: "Bodega ERP, Repartos, Transferencias y Sync",
        suites: 31,
        tests: 310,
        scope:
          "Snapshots JSON atómicos, despacho parcial sin doble descuento, recepción F3, catálogo consolidado y modo Bodega Pura",
      },
      {
        domain: "Catálogo, Búsqueda RAM/SQLite y Proveedores",
        suites: 22,
        tests: 242,
        scope:
          "Paridad exacta RAM vs. SQLite, reglas `%` AND y ceros iniciales, importación/exportación Excel y seguridad de códigos",
      },
      {
        domain: "Ventas, Cobro y Cambios",
        suites: 11,
        tests: 151,
        scope:
          "Transacciones IMMEDIATE, stock y totales CLP, folios globales, cobro mixto/efectivo/crédito y cambios en ventana de 30 días",
      },
      {
        domain: "Caja, Arqueo, Recargas y Depósitos",
        suites: 8,
        tests: 112,
        scope:
          "Arqueo separado ventas/recargas, registros diarios con turno abierto y depósitos por fecha efectiva",
      },
      {
        domain: "Licenciamiento, Aislamiento ERP, BD y Config",
        suites: 13,
        tests: 101,
        scope:
          "HMAC-SHA256, grafo estático POS vs. ERP, ErpRuntime, respaldos db.backup() y restauración con rollback",
      },
      {
        domain: "Clientes ERP, Créditos y Reversas",
        suites: 5,
        tests: 61,
        scope:
          "RUT Módulo 11, cupos y sobrecupos, abonos en efectivo a caja, reversas de crédito y saldos a favor",
      },
      {
        domain: "Impresión Térmica, ESC/POS y Documentos",
        suites: 3,
        tests: 53,
        scope:
          "Plantillas 58/80 mm, vista previa térmica, generación de guías y listas de productos",
      },
      {
        domain: "Inventario y Kardex",
        suites: 2,
        tests: 30,
        scope:
          "Ajustes relativos/reemplazo, anulación de ajustes, alertas de stock bajo y trazabilidad Kardex",
      },
      {
        domain: "Reportes y Analítica",
        suites: 2,
        tests: 18,
        scope:
          "Agregaciones por período, márgenes estimados, medios de pago y exportación",
      },
    ],
  },
  benchmarks: {
    environment:
      "Arnés de producción aislado en Electron (`scripts/catalog-perf/`), AMD Ryzen 5 5600X (12 hilos), 15,92 GiB RAM, Windows, Electron 31.7.7 (Chromium 126, React 18.3.1), datasets deterministas de 10.000 y 50.000 productos con entrada nativa de teclado (`webContents.sendInputEvent`).",
    methodologyNote:
      "Nota metodológica: los tiempos de interacción se midieron mediante doble `requestAnimationFrame` + `MutationObserver` (proxy DOM/frame con observadores y tracing activos). No sustituyen pruebas físicas con escáner/impresora ni sincronización real de Google Drive entre equipos.",
    comparisons: [
      {
        scenario: "Catálogo (F2) — Input p95 (24 escenarios, 960 eventos)",
        before: "22,3 ms · 35 long tasks (máx. 106 ms)",
        after: "8,5 ms · 0 long tasks (máx. 14,2 ms)",
        improvement: "Eliminación total de pausas > 50 ms",
      },
      {
        scenario: "Buscador Rápido (F10) — Input p95 (960 eventos)",
        before: "14,1 ms · 14 long tasks (máx. 67 ms)",
        after: "8,3 ms · 0 long tasks (máx. 13,9 ms)",
        improvement: "~23 filas DOM con 2.100 filas lógicas",
      },
      {
        scenario: "Repartos Inteligentes (Bodega) — Escritura p95",
        before: "57,1 – 124,4 ms (long task 106 ms)",
        after: "11,2 – 12,1 ms · 0 long tasks",
        improvement: "Indexación + ventana de filas fija",
      },
      {
        scenario: "Mesa de Transferencias — Escritura p95",
        before: "96,9 – 282,2 ms (long task 319 ms)",
        after: "14,1 – 14,4 ms · 0 long tasks",
        improvement: "> 90% reducción en latencia",
      },
      {
        scenario: "Catálogo Consolidado — Escritura p95 (50k)",
        before: "150,0 – 163,8 ms (long task 165 ms)",
        after: "31,1 – 37,3 ms · 0 long tasks",
        improvement: "Fluidez sostenida con 50.000 productos",
      },
      {
        scenario: "Historial Documental (1.000 guías, cadencia 140 ms)",
        before: "1.000 filas DOM · 352,7 ms p95 (pausa 371 ms)",
        after: "21 filas DOM · 19,0 ms p95 · 0 long tasks",
        improvement: "Apertura 1.000 guías: 307,4 ms → 31,5 ms",
      },
      {
        scenario: "Selector de Equivalentes (50.000 productos)",
        before: "1.770,5 / 1.728,5 ms (pausa 1.761 ms)",
        after: "55,3 / 51,7 ms (pausa máx. 50 ms)",
        improvement: "~32× más rápido (caché de ranking + corte a 50)",
      },
    ],
    specialized: [
      {
        test: "Fallback SQLite :memory: + IPC real (sin RAM)",
        scope: "24 escenarios · 960 eventos · 492 invocaciones IPC",
        result:
          "Input p95: 12,7 ms (F2) / 11,2 ms (F10) · Main p95: 23,2 ms · 0 long tasks",
      },
      {
        test: "Estrés de entrada extendida + respuestas remotas",
        scope: "1.400 eventos nativos (pegado 113 chars + borrado sostenido)",
        result:
          "Input p95: 9,1 – 12,5 ms · F10 caliente p95: 33,2 – 36,7 ms · 0 long tasks (pico previo aislado: 85,1 ms)",
      },
      {
        test: "Estrés de payloads ERP (Bandeja)",
        scope: "5.000 parches (100 lotes) + 200 guías × 200 ítems",
        result:
          "301 recepciones lógicas / 20 filas DOM · Apertura detalle 200 ítems: 39 ms · 0 long tasks",
      },
      {
        test: "Auditoría de estabilidad, foco, bordes y contraste WCAG AA",
        scope: "3 resoluciones (768p/900p/1080p) × Claro/Oscuro",
        result:
          "390 / 390 estados (2.634 controles, 266 campos) + 108 / 108 contraste/geometría · Texto ≥ 4,5:1 · 0 layout shift",
      },
    ],
  },
  commercialMatrix: {
    overview:
      "Un único código fuente gobierna 4 planes comerciales (ADR-0012), operando con costo de infraestructura cloud de $0/mes, licenciamiento offline HMAC-SHA256 atado a hardware e instalador autónomo NSIS de 84,1 MB (21 builds progresivos de v1.0.0 a v1.0.15).",
    plans: [
      {
        plan: "1. POS Monocaja",
        edition: "pos · 1 PC autónoma (SQLite local)",
        topology: "Monocaja",
        status: "En producción",
        target: "Almacenes, minimarkets, bazares y tiendas independientes",
      },
      {
        plan: "2. POS + ERP Monocaja",
        edition: "erp · 1 PC + Sync Multi-Tienda Drive",
        topology: "Monocaja + Sync",
        status: "En producción",
        target: "Negocios con bodega central, sucursales y venta a crédito",
      },
      {
        plan: "3. POS Multicaja",
        edition: "pos · 1 Servidor LAN + N cajas cliente",
        topology: "Multicaja LAN",
        status: "Planificado (Etapa 3)",
        target: "Locales de alto flujo con múltiples puntos de cobro",
      },
      {
        plan: "4. POS + ERP Multicaja",
        edition: "erp · Suite completa + Red LAN",
        topology: "Multicaja LAN + ERP",
        status: "Planificado (Etapa 3–4)",
        target: "Tiendas departamentales o cadenas con administración central",
      },
    ],
    advantages: [
      "Costo de infraestructura cloud = $0/mes (100% local en Windows + Google Drive Desktop existente).",
      "Control antipiratería offline mediante firmas HMAC-SHA256 ligadas a hardware sin servidor de activación.",
      "Migraciones automáticas de SQLite (26 versiones) y respaldo automático rotativo de 7 copias con db.backup().",
      "Continuidad total ante cortes de internet y recuperación ante cierres inesperados mediante tickets persistidos.",
    ],
  },
  results: [
    {
      category: "Despliegue en producción",
      title: "Operación real en dos sucursales",
      detail:
        "Actualmente operativo en **dos sucursales comerciales** gestionando aproximadamente **5.500 productos por tienda**, con sincronización diaria de inventario, transferencias y homologación de catálogos sin servidor central ($0/mes en infraestructura cloud).",
    },
    {
      category: "Volumen transaccional real",
      title: "Más de 1.200 transacciones mensuales por sucursal",
      detail:
        "En operación real de lunes a sábado, una sola sucursal registra **1.276 transacciones mensuales** (**363 en la última semana**, ~60 ventas diarias), validando la estabilidad de SQLite WAL, el buscador en RAM y la impresión térmica en uso continuo de caja.",
    },
  ],
  media: [
    // Grupo 1: Operaciones de Caja y Catálogo (Modo Claro)
    {
      id: "mavepos-01-ventas-claro",
      title: "Ventas (F1) — Escáner HID, tickets en espera y cobro rápido",
      caption:
        "Autofocus permanente en el lector de códigos de barras, gestión de múltiples tickets en espera persistidos en SQLite, barra de última venta y atajos F10/F12/Ctrl+P.",
      kind: "screenshot",
      group: "Operaciones de caja y catálogo (Claro)",
      src: "/images/projects/mavepos/01-ventas-claro.png",
      alt: "Pantalla de Ventas F1 de MavePOS en modo claro",
    },
    {
      id: "mavepos-02-ventas-f10-claro",
      title: "Buscador Rápido (F10) — Jerarquía y stock multi-tienda",
      caption:
        "Modal 100% operado por teclado sobre el catálogo en RAM con búsqueda por prefijo, fragmentos `%` AND, tolerancia a ceros iniciales y consulta diferida de stock remoto (F8).",
      kind: "screenshot",
      group: "Operaciones de caja y catálogo (Claro)",
      src: "/images/projects/mavepos/02-ventas-f10-claro.png",
      alt: "Buscador rápido de productos F10 en MavePOS en modo claro",
    },
    {
      id: "mavepos-03-productos-claro",
      title: "Productos (F2) — Catálogo jerárquico y proveedores N:M",
      caption:
        "Administración de productos simples, padres variables y variaciones con propagación en cascada, filtros combinables e importación/exportación Excel.",
      kind: "screenshot",
      group: "Operaciones de caja y catálogo (Claro)",
      src: "/images/projects/mavepos/03-productos-claro.png",
      alt: "Catálogo de productos F2 de MavePOS en modo claro",
    },
    {
      id: "mavepos-04-inventario-claro",
      title: "Inventario (F3) — Kardex, alertas de stock bajo y movimientos",
      caption:
        "Trazabilidad inmutable mediante Kardex, alertas automáticas de quiebre, motivos con atajos personalizables y auditoría cronológica diaria exportable a Excel.",
      kind: "screenshot",
      group: "Operaciones de caja y catálogo (Claro)",
      src: "/images/projects/mavepos/04-inventario-claro.png",
      alt: "Módulo de inventario y Kardex F3 de MavePOS en modo claro",
    },

    // Grupo 2: Suite ERP Multi-Tienda y Clientes (Modo Claro)
    {
      id: "mavepos-05-bodega-repartos-claro",
      title: "Bodega ERP — Repartos inteligentes entre sucursales",
      caption:
        "Cruce automático entre stock de bodega central y snapshots remotos por sucursal; calcula cantidades sugeridas por tamaño de paquete y stock mínimo, generando guías térmicas.",
      kind: "screenshot",
      group: "Suite ERP: logística multi-tienda y clientes (Claro)",
      src: "/images/projects/mavepos/05-bodega-repartos-claro.png",
      alt: "Módulo Bodega ERP Repartos Inteligentes de MavePOS en modo claro",
    },
    {
      id: "mavepos-06-bodega-consolidado-claro",
      title: "Bodega ERP — Catálogo consolidado y homologación en vivo",
      caption:
        "Matriz comparativa multi-tienda con detección automática de divergencias de precios, indicadores de productos faltantes y unificación por lotes (`patch_batch_*.json`).",
      kind: "screenshot",
      group: "Suite ERP: logística multi-tienda y clientes (Claro)",
      src: "/images/projects/mavepos/06-bodega-consolidado-claro.png",
      alt: "Catálogo consolidado multi-tienda ERP de MavePOS en modo claro",
    },
    {
      id: "mavepos-07-clientes-claro",
      title: "Clientes ERP — Cuentas corrientes y cobro a crédito",
      caption:
        "Validación de RUT chileno (Módulo 11), cupos de crédito, ventas a crédito sin distorsionar el efectivo esperado en gaveta, abonos atómicos y reversas con saldo a favor.",
      kind: "screenshot",
      group: "Suite ERP: logística multi-tienda y clientes (Claro)",
      src: "/images/projects/mavepos/07-clientes-claro.png",
      alt: "Módulo de Clientes y Cuentas Corrientes ERP de MavePOS en modo claro",
    },

    // Grupo 3: Control Financiero, Analítica y Configuración (Modo Claro)
    {
      id: "mavepos-08-corte-caja-claro",
      title: "Corte de Caja (F4) — Arqueo por denominaciones CLP y recargas",
      caption:
        "Doble cálculo por billetes y monedas chilenas, cuadre independiente de caja de ventas vs. caja de recargas, reglas de retiro automático y trazabilidad de depósitos.",
      kind: "screenshot",
      group: "Control financiero, analítica y configuración (Claro)",
      src: "/images/projects/mavepos/08-corte-caja-claro.png",
      alt: "Módulo de Corte de Caja F4 de MavePOS en modo claro",
    },
    {
      id: "mavepos-09-reportes-claro",
      title: "Reportes y Analítica (F5) — KPIs, tendencias y rentabilidad",
      caption:
        "Comparación de períodos, tendencia temporal por monto o transacciones, distribución por medios de pago, Top 10 productos y exportación directa a Excel.",
      kind: "screenshot",
      group: "Control financiero, analítica y configuración (Claro)",
      src: "/images/projects/mavepos/09-reportes-claro.png",
      alt: "Panel de Reportes y Analítica F5 de MavePOS en modo claro",
    },
    {
      id: "mavepos-10-configuracion-claro",
      title: "Configuración (F6) — Panel modular con protección de cambios",
      caption:
        "Acceso por tarjetas (9 secciones en POS / 10 en ERP) con guardado global y bloqueo estricto ante navegación con cambios pendientes (`isDirty`, ADR-0004).",
      kind: "screenshot",
      group: "Control financiero, analítica y configuración (Claro)",
      src: "/images/projects/mavepos/10-configuracion-claro.png",
      alt: "Panel de Configuración F6 de MavePOS en modo claro",
    },

    // Grupo 4: Modo Oscuro (Slate Profundo)
    {
      id: "mavepos-11-ventas-oscuro",
      title: "Ventas (F1) — Modo Oscuro (Slate Profundo)",
      caption:
        "Superficies en Slate Profundo (#0F172A / #1E293B / #334155) desacopladas de los 4 colores de acento, con contraste WCAG AA verificado.",
      kind: "screenshot",
      group: "Modo oscuro (Paleta Slate Profundo)",
      src: "/images/projects/mavepos/11-ventas-oscuro.png",
      alt: "Pantalla de Ventas F1 de MavePOS en modo oscuro Slate Profundo",
    },
    {
      id: "mavepos-12-productos-oscuro",
      title: "Catálogo de Productos (F2) — Modo Oscuro",
      caption:
        "Tablas de alta densidad con números tabulares y badges semánticos de contraste tonal en modo oscuro.",
      kind: "screenshot",
      group: "Modo oscuro (Paleta Slate Profundo)",
      src: "/images/projects/mavepos/12-productos-oscuro.png",
      alt: "Catálogo de productos F2 de MavePOS en modo oscuro",
    },
    {
      id: "mavepos-13-bodega-consolidado-oscuro",
      title: "Catálogo Consolidado ERP — Modo Oscuro",
      caption:
        "Matriz comparativa multi-tienda manteniendo legibilidad de divergencias y controles de homologación en ambientes de baja iluminación.",
      kind: "screenshot",
      group: "Modo oscuro (Paleta Slate Profundo)",
      src: "/images/projects/mavepos/13-bodega-consolidado-oscuro.png",
      alt: "Catálogo consolidado ERP de MavePOS en modo oscuro",
    },
    {
      id: "mavepos-14-reportes-oscuro",
      title: "Reportes y Analítica (F5) — Modo Oscuro",
      caption:
        "Visualizaciones Recharts y tarjetas KPI adaptadas al sistema de tokens Slate Profundo.",
      kind: "screenshot",
      group: "Modo oscuro (Paleta Slate Profundo)",
      src: "/images/projects/mavepos/14-reportes-oscuro.png",
      alt: "Panel de Reportes y Analítica F5 de MavePOS en modo oscuro",
    },

    // Grupo 5: Videos Demostrativos (Pendientes)
    {
      id: "mavepos-video-general",
      title: "Video de demostración general",
      caption:
        "[PENDIENTE: Recorrido general de MavePOS cubriendo ventas F1, búsqueda F10, inventario, corte de caja y reportes.]",
      kind: "video-demo",
      group: "Videos demostrativos (Pendientes)",
      checklistRef: "MavePOS · Video de demostración general",
    },
    {
      id: "mavepos-video-hardware",
      title: "Video de integración con hardware",
      caption:
        "[PENDIENTE: Demostración física de escáner USB HID, impresión térmica ESC/POS 58/80 mm y apertura de cajón de dinero RJ11.]",
      kind: "video-demo",
      group: "Videos demostrativos (Pendientes)",
      checklistRef: "MavePOS · Video de hardware",
    },
    {
      id: "mavepos-video-sync",
      title: "Video de sincronización multi-tienda",
      caption:
        "[PENDIENTE: Demostración del flujo offline de snapshots, repartos inteligentes y recepción de transferencias entre bodega y sucursal vía Google Drive.]",
      kind: "video-demo",
      group: "Videos demostrativos (Pendientes)",
      checklistRef: "MavePOS · Video de sincronización",
    },
  ],
  seo: {
    title: "MavePOS — Caso de Estudio Técnico",
    description:
      "Caso de estudio en profundidad de MavePOS: POS y suite ERP multi-tienda 100% offline en Electron, React, TypeScript y SQLite WAL con 1.078 pruebas y benchmarks hasta 50k productos.",
  },
};

import type { ProjectCaseStudy } from "@/content/types";

export const collectiblesAppEs: ProjectCaseStudy = {
  slug: "collectibles-app",
  depth: "intermediate",
  depthLabel: "Caso de estudio intermedio",
  title: "Laminitas Tracker — App Móvil de Coleccionables e Intercambio QR",
  shortTitle: "App de Coleccionables",
  tagline:
    "Aplicación móvil offline en Flutter y Dart para gestionar las 980 láminas del álbum FIFA World Cup 2026 con protocolo binario de interoperabilidad QR, motor de reglas para el Set de Actualización y control financiero del coleccionista.",
  category: "Aplicación Móvil · Flutter Offline",
  organization: "Proyecto independiente (Android APK v1.9.0)",
  role: "Ingeniero de Software — Proyecto independiente",
  period: "may. 2026 — ago. 2026",
  status: "Compilada para Android (v1.9.0+138)",
  summary:
    "Aplicación móvil 100% offline en Flutter, Riverpod y Hive para el álbum de 980 láminas (48 selecciones + FWC). Incorpora interoperabilidad QR con otras apps mediante bitsets de 125 bytes comprimidos en GZIP+Base64, reglas de cuarentena para 118 reemplazos, comparador de listas de texto y control de gastos.",
  featuredTags: [
    { label: "Flutter · Dart 3.7" },
    { label: "Riverpod · Hive Offline" },
    { label: "Bitsets QR (GZIP + Base64)" },
    { label: "Interoperabilidad cross-app" },
  ],
  links: [
    {
      label: "Ver repositorio en GitHub",
      href: "https://github.com/cristobal-nan/laminitas-tracker",
      type: "repository",
    },
    {
      label: "Descargar APK v1.9.0 (Android)",
      href: "https://github.com/cristobal-nan/laminitas-tracker/releases/tag/v1.9.0",
      type: "repository",
    },
    {
      label: "Video general",
      type: "demo",
      placeholderNote:
        "Pendiente de cargar video demostrativo general de la aplicación.",
      checklistRef: "Aplicación de coleccionables · Video general",
    },
    {
      label: "Video de interoperabilidad QR",
      type: "demo",
      placeholderNote:
        "Pendiente de cargar video demostrando el intercambio interoperable mediante QR entre dispositivos/apps.",
      checklistRef: "Aplicación de coleccionables · Video de interoperabilidad QR",
    },
  ],
  context: [
    {
      text: "Aplicación móvil offline (`album_tracker` / **Laminitas Tracker**, v1.9.0+138, 21 archivos Dart en `lib/`) diseñada para coleccionistas del álbum **FIFA World Cup 2026** (48 selecciones + FWC = **980 láminas oficiales**), operando completamente local sin servidores ni cuentas obligatorias.",
    },
  ],
  problem: [
    {
      text: "Las aplicaciones convencionales de seguimiento de álbumes suelen tratar cada lámina como un simple contador, dejando sin resolver problemas reales del coleccionismo: jugadores impresos que finalmente no son convocados y se reemplazan en el *Update Set*, variantes doradas especiales, láminas reservadas que no deben ofrecerse en intercambios, falta de control de gasto real e incompatibilidad al intentar intercambiar con personas que usan otras apps.",
    },
  ],
  solution: [
    {
      text: "Se desarrolló una app en **Flutter / Dart 3.7** con arquitectura reactiva en **Riverpod** y persistencia local en **5 cajas de Hive** (`teams`, `stickers`, `settings`, `transactions`, `swap_transactions`), integrando un motor de reglas contextuales por lámina, un protocolo binario QR compatible con apps de terceros del ecosistema, comparador de listas de texto plano (WhatsApp), módulo financiero de gastos y respaldo portable en texto (`LAMINITAS_BACKUP_V5`).",
    },
  ],
  differentiators: [
    {
      text: "**Interoperabilidad QR cross-app con compresión binaria:** `ExportService` codifica el inventario completo en dos bitsets de 125 bytes (faltantes y repetidas disponibles), comprimidos con **GZIP** (limpiando bytes `MTIME` 4–7 para payloads deterministas) y codificados en **Base64** compatibles con *Figuritas App*. Distingue QRs de perfil (`⋋~...`) y QRs de transacción (`;⋋~...`) con inversión automática de perspectiva al escanear, tanto por cámara (`mobile_scanner`) como desde galería (`image_picker`).",
    },
    {
      text: "**Motor de reglas para el Set de Actualización (118 jugadores no convocados):** Soporta 4 modos (`none`, `quarantine`, `quarantineSimple`, `exclusion`) con el mapa oficial de 118 reemplazos (`UpdateSetData`), alertando antes de pegar láminas en cuarentena y recalculando automáticamente faltantes, repetidas y elegibilidad de intercambio.",
    },
    {
      text: "**Variantes doradas y reservas granulares por lámina:** Manejo independiente de copias doradas (`goldCount` para lámina #13 / modo promocional McDonald's) y banderas finas (`sin pegar aún`, `intercambiable sin pegar`, `no intercambiar`, `quiero copia extra`) que protegen láminas reservadas al generar listas o QRs.",
    },
    {
      text: "**Comparador de texto, control de gastos y respaldo sin nube:** Parsea listas de intercambio de WhatsApp en español/inglés para cruzar automáticamente *qué puedo dar* vs. *qué me pueden dar*; registra compras de sobres, láminas sueltas y ventas calculando gasto neto, costo real por lámina nueva y eficiencia (`GastosScreen`); y exporta todo el estado en un respaldo compacto portable (`LAMINITAS_BACKUP_V5`).",
    },
  ],
  responsibilities: [
    {
      text: "Diseño y desarrollo autónomo de extremo a extremo de la aplicación móvil offline en Flutter y Dart 3.7, abarcando el modelo de dominio de 980 láminas, estado reactivo en Riverpod y persistencia local en 5 cajas Hive con migraciones versionadas.",
    },
    {
      text: "Ingeniería del protocolo binario de interoperabilidad QR (dos bitsets de 125 bytes comprimidos en GZIP con `MTIME` determinista + Base64) compatible con aplicaciones de terceros, junto con el escaneo por cámara/galería y el comparador de listas de texto de WhatsApp.",
    },
    {
      text: "Implementación del motor de reglas del Set de Actualización (118 reemplazos y 4 modos de cuarentena), manejo de variantes doradas y reservas granulares, módulo financiero de control de gastos, respaldo portable (`LAMINITAS_BACKUP_V5`) y pruebas unitarias de lógica de negocio.",
    },
  ],
  technologies: [
    {
      group: "Framework y Estado",
      items: [
        "Flutter",
        "Dart 3.7",
        "flutter_riverpod",
        "go_router",
        "Material Design (tema oscuro Slate/Indigo)",
      ],
    },
    {
      group: "Persistencia, QR e Interoperabilidad",
      items: [
        "Hive + hive_flutter (5 cajas locales)",
        "qr_flutter",
        "mobile_scanner",
        "image_picker (escaneo desde galería)",
        "Bitsets 125B + GZIP + Base64",
        "flutter_test",
      ],
    },
  ],
  architecture: {
    overview: {
      text: "Arquitectura *offline-first* en 3 capas: presentación en 5 pestañas persistentes (`IndexedStack`: Dashboard, Álbum con *Vista Clásica* y *Vista Códigos*, Gastos, Intercambio y Perfil), estado reactivo y métricas derivadas en **Riverpod** (`AlbumNotifier`, `expenseStatsProvider`), y servicios de dominio puros para persistencia local con migraciones idempotentes (`StorageService` sobre Hive) e interoperabilidad/respaldo (`ExportService`).",
    },
    components: [
      {
        name: "Capa UI (5 módulos + escáner)",
        role: "Interfaz operativa y cámara",
        details:
          "Dashboard con progreso/eficiencia, Inventario dual (lista o cuadrícula de códigos), Pantalla de Cuarentena/Update Set, Control de Gastos, Intercambio (QR + texto) y `ScannerScreen` con soporte de cámara y galería.",
      },
      {
        name: "Estado y Reglas de Dominio",
        role: "Riverpod + Modelo contextual `Sticker`",
        details:
          "`AlbumNotifier` y métodos contextuales en `Sticker` calculan en tiempo real pegadas, faltantes, repetidas y bloqueos según el modo de Update Set y variantes doradas activas.",
      },
      {
        name: "Persistencia Hive + ExportService",
        role: "Almacenamiento local y protocolo QR",
        details:
          "5 cajas NoSQL locales con migraciones versionadas (`migrated_official_118_uncalled_v5`), serialización `LAMINITAS_BACKUP_V5`, parser de texto y codificación/decodificación binaria QR (125B + GZIP + Base64).",
      },
    ],
    diagrams: [],
  },
  challenges: [
    {
      title: "Codificar ~1.000 láminas en un QR escaneable e interoperable",
      problem:
        "Un payload JSON o de texto con el estado de 980 láminas supera rápidamente la densidad cómoda de escaneo en pantallas móviles y rompe compatibilidad con otras apps que usan los coleccionistas en terreno.",
      approach:
        "Se implementó el esquema de **dos bitsets de 125 bytes** mapeados por orden oficial de selecciones, comprimidos con **GZIP** (poniendo en cero el campo `MTIME` para evitar variaciones innecesarias) y codificados en **Base64**, logrando QRs compactos compatibles con *Figuritas App* y transacciones con inversión automática de roles (dar/recibir).",
      tradeoff:
        "El formato binario interoperable representa presencia y disponibilidad de repetidas como bits (1 o 0) y no transmite cantidades exactas ni banderas internas; para respaldos completos sin pérdida se diseñó aparte el formato `LAMINITAS_BACKUP_V5`.",
    },
    {
      title: "Coherencia estadística bajo reglas combinables de colección",
      problem:
        "Combinar 4 modos de *Update Set*, 118 jugadores no convocados, variantes doradas (#13) y bloqueos individuales de intercambio fácilmente genera discrepancias entre el Dashboard, la lista de repetidas y el comparador de intercambio.",
      approach:
        "Se centralizaron los cálculos contextuales (`pastedCountWithContext`, `missingCountForExchangeWithContext`, `duplicateCountWithContext`) en el modelo `Sticker` y se cubrieron casos borde (lámina `00`, cuarentena con copia de actualización y consistencia a 980 láminas) en `test/business_logic_test.dart`.",
    },
  ],
  results: [
    {
      category: "Estado técnico verificado",
      title: "Producto compilado y lógica cubierta por pruebas unitarias",
      detail:
        "Versión `1.9.0+138` compilada para Android (`APK`), operando 100% offline con catálogo completo de 980 láminas y 118 reemplazos oficiales, y pruebas de lógica de negocio en `test/business_logic_test.dart` validando paridad de conteo, lámina `00` y reglas de cuarentena.",
    },
  ],
  media: [
    // Grupo 1: Dashboard y vistas del álbum
    {
      id: "collectibles-01-dashboard-resumen",
      title: "Dashboard — Progreso total y eficiencia de colección",
      caption:
        "Indicador circular de avance sobre las 980 láminas oficiales, desglose de figuras únicas, faltantes, repetidas (promedio por lámina) y cálculo de eficiencia de la colección.",
      kind: "screenshot",
      orientation: "portrait",
      group: "Dashboard y vistas del álbum",
      src: "/images/projects/collectibles-app/01-dashboard-resumen.jpg",
      alt: "Pantalla de Dashboard de Laminitas Tracker mostrando progreso total de 980 láminas y métricas de eficiencia",
    },
    {
      id: "collectibles-02-dashboard-grupos",
      title: "Dashboard — Progreso por grupos y selecciones",
      caption:
        "Seguimiento visual por grupo del torneo (Introducción y Grupos A–L) con barras de completitud independientes para cada una de las 48 selecciones.",
      kind: "screenshot",
      orientation: "portrait",
      group: "Dashboard y vistas del álbum",
      src: "/images/projects/collectibles-app/02-dashboard-grupos.jpg",
      alt: "Progreso por grupos y selecciones en el Dashboard de Laminitas Tracker",
    },
    {
      id: "collectibles-03-album-vista-clasica",
      title: "Álbum (Vista Clásica) — Lista detallada y cuarentena inline",
      caption:
        "Navegación rápida mediante barra lateral de banderas, contadores `-/+` por lámina y visualización anidada del Set de Actualización junto al jugador en cuarentena (candado naranja).",
      kind: "screenshot",
      orientation: "portrait",
      group: "Dashboard y vistas del álbum",
      src: "/images/projects/collectibles-app/03-album-vista-clasica.jpg",
      alt: "Vista Clásica del álbum mostrando láminas de México y estado de cuarentena del Set de Actualización",
    },
    {
      id: "collectibles-04-album-vista-codigos",
      title: "Álbum (Vista Códigos) — Cuadrícula rápida con badges de estado",
      caption:
        "Cuadrícula densa de 4 columnas optimizada para revisión veloz en intercambios, destacando candados de cuarentena, variantes especiales (#13), contadores de repetidas e indicador de intercambiable.",
      kind: "screenshot",
      orientation: "portrait",
      group: "Dashboard y vistas del álbum",
      src: "/images/projects/collectibles-app/04-album-vista-codigos.jpg",
      alt: "Vista Códigos en cuadrícula del álbum mostrando badges de cuarentena, variante #13 y repetidas",
    },

    // Grupo 2: Reglas granulares y Set de Actualización
    {
      id: "collectibles-05-lamina-opciones",
      title: "Opciones granulares por lámina y protección de intercambios",
      caption:
        "Modal contextual por lámina permitiendo distinguir entre copia pegada vs. sin pegar (guardada), ocultar repetidas de los intercambios o marcar deseo de conseguir una copia extra.",
      kind: "screenshot",
      orientation: "portrait",
      group: "Reglas granulares y Set de Actualización",
      src: "/images/projects/collectibles-app/05-lamina-opciones.jpg",
      alt: "Modal de opciones granulares para la lámina NOR15 en Laminitas Tracker",
    },
    {
      id: "collectibles-06-update-set-ajustes",
      title: "Set de Actualización — Modos de cuarentena y regla McDonald's",
      caption:
        "Configuración del motor de reglas para los 118 jugadores no convocados: estado de compra del set, modos Cuarentena Avanzada, Cuarentena Simple o Exclusión, más la regla extra de doble versión McDonald's.",
      kind: "screenshot",
      orientation: "portrait",
      group: "Reglas granulares y Set de Actualización",
      src: "/images/projects/collectibles-app/06-update-set-ajustes.jpg",
      alt: "Pantalla de ajustes del Set de Actualización con modos de cuarentena y regla McDonald's",
    },
    {
      id: "collectibles-07-update-set-seguimiento",
      title: "Set de Actualización — Seguimiento por estado (Nóminas / En Espera / Completo)",
      caption:
        "Organización en 5 pestañas (`Ajustes`, `Nóminas`, `Faltan`, `En Espera`, `Completo`) para auditar qué jugadores no convocados ya cuentan con su reemplazo pegado y su copia de resguardo.",
      kind: "screenshot",
      orientation: "portrait",
      group: "Reglas granulares y Set de Actualización",
      src: "/images/projects/collectibles-app/07-update-set-seguimiento.jpg",
      alt: "Vista de seguimiento del Set de Actualización en pestaña Completo por selección",
    },

    // Grupo 3: Intercambio, control de gastos y respaldo
    {
      id: "collectibles-08-intercambio-texto",
      title: "Generador de Intercambio — Resumen y texto listo para WhatsApp",
      caption:
        "Desglose inmediato de pegadas, intercambiables, en cuarentena y guardadas, junto con la vista previa formateada con banderas y copia directa al portapapeles excluyendo láminas bloqueadas.",
      kind: "screenshot",
      orientation: "portrait",
      group: "Intercambio, control de gastos y respaldo",
      src: "/images/projects/collectibles-app/08-intercambio-texto.jpg",
      alt: "Generador de intercambio con resumen de colección y vista previa de lista de texto para WhatsApp",
    },
    {
      id: "collectibles-09-intercambio-qr",
      title: "Intercambio por QR interoperable, Intercambio Libre y por texto",
      caption:
        "QR binario comprimido (bitsets 125B + GZIP + Base64) interoperable con *Figuritas App*, botón de escaneo (cámara/galería) y accesos a Intercambio Libre y comparador de listas de texto.",
      kind: "screenshot",
      orientation: "portrait",
      group: "Intercambio, control de gastos y respaldo",
      src: "/images/projects/collectibles-app/09-intercambio-qr.jpg",
      alt: "Pantalla de intercambio por QR interoperable, Intercambio Libre e Intercambio por texto",
    },
    {
      id: "collectibles-10-control-gastos",
      title: "Control de Gastos — Finanzas del coleccionista y costos promedio",
      caption:
        "Balance de gasto neto, gasto bruto e ingresos por venta de láminas, métricas de sobres/láminas compradas, costo promedio por sobre, por lámina y por lámina nueva, e historial de movimientos.",
      kind: "screenshot",
      orientation: "portrait",
      group: "Intercambio, control de gastos y respaldo",
      src: "/images/projects/collectibles-app/10-control-gastos.jpg",
      alt: "Pantalla de Control de Gastos mostrando gasto neto, métricas del álbum y costos promedio",
    },
    {
      id: "collectibles-11-perfil-ajustes",
      title: "Perfil y Ajustes — Preferencias de vista y respaldo portable",
      caption:
        "Personalización de usuario, acceso directo al Set de Actualización, conmutador entre *Vista Clásica* y *Vista Códigos*, y exportación/importación de respaldos portables (`LAMINITAS_BACKUP_V5`).",
      kind: "screenshot",
      orientation: "portrait",
      group: "Intercambio, control de gastos y respaldo",
      src: "/images/projects/collectibles-app/11-perfil-ajustes.jpg",
      alt: "Pantalla de Perfil y Ajustes con selector de vista y opciones de exportar e importar álbum",
    },

    // Grupo 4: Videos demostrativos (Pendientes)
    {
      id: "collectibles-video-general",
      title: "Video general de la aplicación",
      caption:
        "[PENDIENTE: Agregar video recorriendo el catálogo de 980 láminas, modos de Update Set, control de gastos y respaldo portable.]",
      kind: "video-demo",
      group: "Videos demostrativos (Pendientes)",
      checklistRef: "Aplicación de coleccionables · Video general",
    },
    {
      id: "collectibles-qr-demo",
      title: "Video de interoperabilidad QR",
      caption:
        "[PENDIENTE: Agregar video demostrando generación y escaneo de QR de perfil/transacción entre dispositivos y apps compatibles.]",
      kind: "video-demo",
      group: "Videos demostrativos (Pendientes)",
      checklistRef: "Aplicación de coleccionables · Video de interoperabilidad QR",
    },
  ],
  seo: {
    title: "Laminitas Tracker (App de Coleccionables) — Caso de Estudio",
    description:
      "Caso de estudio de aplicación móvil Flutter offline para gestionar 980 láminas con protocolo binario de interoperabilidad QR (GZIP + Base64), motor de reglas Update Set y control de gastos.",
  },
};

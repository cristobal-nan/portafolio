import { collectiblesAppEs } from "@/content/locales/es/projects/collectibles-app";
import { data2oCdpIntegrationsEs } from "@/content/locales/es/projects/data2o-cdp-integrations";
import { maveposEs } from "@/content/locales/es/projects/mavepos";
import { udpAttendanceEs } from "@/content/locales/es/projects/udp-attendance";
import type { ProjectCaseStudy } from "@/content/types";

/**
 * Orden definido por profundidad de contenido (proyectos públicos activos):
 * 1. MavePOS (Muy detallada)
 * 2. Asistencia UDP (Detallada)
 * 3. Coleccionables / Laminitas Tracker (Intermedia)
 *
 * Nota: `data2oCdpIntegrationsEs` se mantiene en `archivedProjectsEs`
 * para reactivarlo fácilmente sin perder contenido ni tipado.
 */
export const projectsEs: ProjectCaseStudy[] = [
  maveposEs,
  udpAttendanceEs,
  collectiblesAppEs,
];

export const archivedProjectsEs: ProjectCaseStudy[] = [
  data2oCdpIntegrationsEs,
];

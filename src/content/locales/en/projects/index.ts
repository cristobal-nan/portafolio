import { collectiblesAppEn } from "@/content/locales/en/projects/collectibles-app";
import { data2oCdpIntegrationsEn } from "@/content/locales/en/projects/data2o-cdp-integrations";
import { maveposEn } from "@/content/locales/en/projects/mavepos";
import { udpAttendanceEn } from "@/content/locales/en/projects/udp-attendance";
import type { ProjectCaseStudy } from "@/content/types";

/**
 * Ordered by content depth (active public projects):
 * 1. MavePOS (Very detailed)
 * 2. UDP Attendance (Detailed)
 * 3. Collectibles App / Laminitas Tracker (Intermediate)
 *
 * Note: `data2oCdpIntegrationsEn` is kept in `archivedProjectsEn`
 * so it can be re-enabled cleanly at any time.
 */
export const projectsEn: ProjectCaseStudy[] = [
  maveposEn,
  udpAttendanceEn,
  collectiblesAppEn,
];

export const archivedProjectsEn: ProjectCaseStudy[] = [
  data2oCdpIntegrationsEn,
];

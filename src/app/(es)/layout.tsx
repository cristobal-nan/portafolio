import type { ReactNode } from "react";
import { RootDocument } from "@/components/layout/RootDocument";
import { SiteShell } from "@/components/layout/SiteShell";
import { getUi } from "@/content";

export default function EsRootLayout({ children }: { children: ReactNode }) {
  const ui = getUi("es");
  return (
    <RootDocument locale="es">
      <SiteShell locale="es" ui={ui}>
        {children}
      </SiteShell>
    </RootDocument>
  );
}

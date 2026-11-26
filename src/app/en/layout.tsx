import type { ReactNode } from "react";
import { RootDocument } from "@/components/layout/RootDocument";
import { SiteShell } from "@/components/layout/SiteShell";
import { getUi } from "@/content";

export default function EnRootLayout({ children }: { children: ReactNode }) {
  const ui = getUi("en");
  return (
    <RootDocument locale="en">
      <SiteShell locale="en" ui={ui}>
        {children}
      </SiteShell>
    </RootDocument>
  );
}

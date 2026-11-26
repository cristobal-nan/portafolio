import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";
import { getUi } from "@/content";
import { buildHomeMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildHomeMetadata("es", getUi("es"));
}

export default function EsHomePage() {
  return <HomePage locale="es" />;
}

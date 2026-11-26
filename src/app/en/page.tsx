import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";
import { getUi } from "@/content";
import { buildHomeMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildHomeMetadata("en", getUi("en"));
}

export default function EnHomePage() {
  return <HomePage locale="en" />;
}

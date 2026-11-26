import type { Metadata } from "next";
import Link from "next/link";
import { RootDocument } from "@/components/layout/RootDocument";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "404 — Página no encontrada / Page Not Found",
  description: "La ruta solicitada no existe en este portafolio.",
};

export default function GlobalNotFound() {
  return (
    <RootDocument locale="es">
      <main className="flex flex-1 items-center py-24">
        <Container className="max-w-xl">
          <p className="font-mono text-xs tracking-wider text-muted uppercase">
            404
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-primary">
            Página no encontrada / Page not found
          </h1>
          <p className="mt-4 text-base leading-7 text-secondary">
            La dirección solicitada no está disponible. Puedes volver al inicio
            en español o en inglés.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-canvas transition-opacity hover:opacity-90"
            >
              Volver al inicio (ES)
            </Link>
            <Link
              href="/en"
              className="inline-flex items-center justify-center rounded-lg border border-border-strong bg-surface px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-subtle"
            >
              Go to Home (EN)
            </Link>
          </div>
        </Container>
      </main>
    </RootDocument>
  );
}

# Portafolio — Cristóbal Nanjarí

Portafolio profesional bilingüe (**Español** `/` · **English** `/en`) enfocado en desarrollo full stack, arquitectura de sistemas e integración de plataformas.

## Casos de estudio destacados

- **MavePOS** — Sistema POS y suite ERP multi-tienda 100% offline para Windows (Electron, React, TypeScript, SQLite WAL).
- **Sistema de Asistencia UDP** — Plataforma web y móvil con tokens QR dinámicos antifraude e integración con Canvas LMS (Python, FastAPI, Next.js, Flutter, Firestore).
- **Laminitas Tracker** — App móvil offline en Flutter/Dart con protocolo binario de interoperabilidad QR (GZIP + Base64), motor de reglas *Update Set* y control de gastos.

## Stack

- **Framework:** Next.js 16 (App Router + `output: "export"`)
- **UI & Estilos:** React 19, TypeScript 5, Tailwind CSS v4 (modo claro/oscuro)
- **Contenido:** Rutas estáticas i18n (`src/content/locales/{es,en}`), `sitemap.xml` y `robots.txt` generados en build.

## Desarrollo local

```bash
npm install
npm run dev      # Servidor local en http://localhost:3000
npm run lint     # Verificación ESLint
npm run build    # Export estático en /out
```

## Despliegue

Pensado para **Vercel** (detecta Next.js automáticamente). Para SEO y `sitemap.xml`, definir la variable de entorno:

```env
NEXT_PUBLIC_SITE_URL=https://tu-dominio.vercel.app
```

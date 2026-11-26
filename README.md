**Español** · [English](./README.en.md)

# Portafolio — Cristóbal Nanjarí

Portafolio profesional bilingüe desarrollado como sitio web estático con Next.js (App Router), React 19, TypeScript y Tailwind CSS v4.

El proyecto está estructurado como una aplicación de ingeniería de software orientada a mantenibilidad, tipado estricto y generación estática completa, y sirve como vitrina técnica de casos de estudio en desarrollo full stack, arquitectura de sistemas e integración de plataformas.

**Sitio publicado:** [https://cristobal-nanjari.vercel.app/](https://cristobal-nanjari.vercel.app/) (Español en `/` · English en `/en`)

---

## Vista previa

El sitio en producción puede explorarse directamente en [cristobal-nanjari.vercel.app](https://cristobal-nanjari.vercel.app/) (incluye vista de inicio, cambio de idioma ES/EN, tema claro/oscuro y páginas completas de cada caso de estudio).

<!-- Captura principal del portafolio: reemplazar este comentario cuando se agregue el archivo de imagen -->

---

## Características del portafolio

- **Generación estática completa (`output: "export"`):** todas las rutas se pre-renderizan en tiempo de compilación en `/out`, sin servidor en ejecución ni dependencias de base de datos o CMS.
- **Soporte bilingüe nativo (ES / EN):** rutas estáticas dedicadas para español (`/`) e inglés (`/en`), con selector de idioma que preserva la página actual.
- **Tema claro y oscuro sin parpadeo (FOUC):** detección inicial de `prefers-color-scheme`, persistencia en `localStorage`, sincronización entre pestañas y aplicación previa al primer pintado mediante script síncrono.
- **Casos de estudio técnicos estructurados:** cada proyecto incluye contexto, problema, solución, responsabilidades, stack, arquitectura, ADRs, desafíos con *trade-offs*, resultados, benchmarks, desglose de pruebas y galería multimedia con tabla de contenidos fija (*sticky TOC*) y navegación secuencial.
- **Superficie mínima de JavaScript en cliente:** arquitectura *Server-First* donde solo 4 componentes interactivos utilizan `"use client"`.
- **Recursos descargables y contacto directo:** descarga de CV en PDF (`/cv/cv.pdf`), documentos técnicos adjuntos (como la memoria de tesis en PDF) y copia directa de correo electrónico al portapapeles.
- **Manejo global de rutas 404 bilingüe:** página `global-not-found.tsx` con enlaces de retorno a `/` y `/en`.

---

## Casos de estudio destacados

| Proyecto | Enfoque y stack principal | Estado / Alcance destacado | Ruta |
| :--- | :--- | :--- | :--- |
| **MavePOS** | Sistema POS offline-first y suite ERP multi-tienda para Windows (Electron 31, React 18, TypeScript 5, SQLite 3 WAL, caché *write-through* en RAM, ESC/POS + C# GDI RAW, sincronización diferida vía Google Drive). | Operativo en 2 sucursales (~5.500 productos por tienda; una de ellas supera las 1.200 ventas/mes), 1.118 pruebas automatizadas aprobadas y 19 ADRs. | [`/projects/mavepos`](https://cristobal-nanjari.vercel.app/projects/mavepos) |
| **Sistema Integral de Asistencia UDP** | Plataforma web (Next.js), app móvil (Flutter) y backend asíncrono (Python, FastAPI, WebSocket, Firebase Auth, Cloud Firestore) con tokens QR dinámicos firmados e integración bidireccional con Canvas LMS. | Tesis de título (2025) probada en piloto de 5 secciones (~40 estudiantes/sección), modelamiento para 2.650 usuarios proyectados y matriz de validación funcional/no funcional (backend retirado). Incluye memoria en PDF. | [`/projects/udp-attendance`](https://cristobal-nanjari.vercel.app/projects/udp-attendance) |
| **Laminitas Tracker** | App móvil offline en Flutter y Dart 3.7 (Riverpod, Hive) para gestionar las 980 láminas del álbum FIFA World Cup 2026, con protocolo binario QR (bitsets de 125 B + GZIP + Base64), motor de reglas *Update Set* y control de gastos. | Compilada y probada en Android (`v1.9.0+138`; iOS no validado), interoperable mediante QR y respaldos portables sin nube. | [`/projects/collectibles-app`](https://cristobal-nanjari.vercel.app/projects/collectibles-app) |

> Un cuarto caso de estudio (`data2o-cdp-integrations`) se conserva tipado en el repositorio dentro de `archivedProjects`, excluido de `PROJECT_SLUGS` para no publicarse en el build actual.

---

## Stack tecnológico y versiones

| Categoría | Tecnología | Versión (`package.json`) |
| :--- | :--- | :--- |
| Framework | Next.js (App Router + Turbopack + Static Export) | `16.4.6` |
| Biblioteca UI | React / React DOM | `19.3.0` |
| Lenguaje | TypeScript (`strict: true`) | `^5` |
| Estilos | Tailwind CSS + `@tailwindcss/turbopack` | `4.3.3` |
| Linting | ESLint + `eslint-config-next` (`core-web-vitals`, `typescript`) | `^9` / `16.4.6` |
| Tipografías | Geist Sans y Geist Mono (`next/font/google`) | Incluido en Next.js |
| Despliegue | Vercel | Hosting estático |

---

## Arquitectura y estructura de carpetas

Las rutas bajo `src/app/` actúan como envoltorios livianos que definen metadatos, parámetros estáticos y el idioma del documento, delegando la presentación a componentes reutilizables en `src/components/` y a módulos de contenido fuertemente tipados en `src/content/`.

```text
.
├── public/
│   ├── cv/                       # Currículum descargable (cv.pdf)
│   ├── docs/                     # Documentos técnicos (memoria-asistencia-udp.pdf)
│   └── images/projects/          # Capturas y diagramas por caso de estudio
├── src/
│   ├── app/
│   │   ├── (es)/                 # Root layout y rutas en español (/, /projects/[slug])
│   │   ├── en/                   # Root layout y rutas en inglés (/en, /en/projects/[slug])
│   │   ├── global-not-found.tsx  # Página 404 global bilingüe
│   │   ├── globals.css           # Tokens de color claro/oscuro, @theme y reglas base
│   │   ├── robots.ts             # Generación estática de robots.txt
│   │   └── sitemap.ts            # Generación estática de sitemap.xml con hreflang
│   ├── components/
│   │   ├── case-study/           # Bloques de arquitectura, desafíos, resultados, TOC y galería
│   │   ├── layout/               # RootDocument, SiteShell, Header, Footer, ThemeToggle, LanguageSwitcher
│   │   ├── pages/                # HomePage y ProjectCaseStudyPage compartidos por ambos idiomas
│   │   ├── sections/             # Secciones de inicio (Hero, Projects, Experience, Skills, Education, Contact)
│   │   └── ui/                   # Primitivas reutilizables (Badge, ButtonLink, Container, Icons)
│   ├── content/
│   │   ├── locales/{es,en}/      # Diccionarios de UI, perfil y casos de estudio por idioma
│   │   ├── index.ts              # Selectores de contenido por locale y slug
│   │   ├── site.ts               # Configuración global, enlaces y slugs publicados (PROJECT_SLUGS)
│   │   └── types.ts              # Contratos TypeScript compartidos para UI, perfil y proyectos
│   └── lib/
│       ├── i18n.ts               # Utilidades de rutas bilingües y switchLocalePath
│       ├── seo.ts                # Constructores de Metadata, Open Graph y JSON-LD
│       └── theme.ts              # Clave de almacenamiento y script síncrono anti-FOUC
├── eslint.config.mjs
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## Decisiones técnicas relevantes

1. **Exportación estática (`output: "export"`) con `images.unoptimized: true`**  
   El contenido del portafolio cambia únicamente en cada publicación. Exportar HTML, CSS y activos estáticos elimina la necesidad de un servidor Node.js en producción, simplifica el despliegue en CDN y garantiza rutas deterministas mediante `generateStaticParams` y `dynamicParams = false`.

2. **Internacionalización basada en árboles de rutas (`(es)/` y `en/`) sin middleware**  
   En Next.js, el middleware en tiempo de ejecución no está disponible con exportación estática. Separar las rutas en dos *root layouts* dedicados permite asignar `<html lang="es">` o `<html lang="en">` de forma nativa, mantener URLs estáticas indexables y evitar dependencias externas de i18n.

3. **Contenido tipado en módulos TypeScript en lugar de un CMS externo**  
   Tanto la interfaz como los casos de estudio implementan las interfaces de `src/content/types.ts`. Esto garantiza paridad estructural entre español e inglés en tiempo de compilación, historial completo en Git y cero latencia de red al construir el sitio.

4. **Tema claro/oscuro sin FOUC con `useSyncExternalStore`**  
   `RootDocument` inyecta `THEME_INIT_SCRIPT` de forma síncrona antes del pintado inicial para aplicar la clase `.dark` según `localStorage` o `prefers-color-scheme`. El componente `ThemeToggle` sincroniza el estado mediante `useSyncExternalStore` y eventos `storage`, evitando advertencias de hidratación y manteniendo pestañas sincronizadas.

5. **Enfoque *Server-First* con 4 *Client Components***  
   Solo `LanguageSwitcher`, `ThemeToggle`, `MobileNav` y `CopyEmailButton` llevan la directiva `"use client"`. Todas las páginas, tablas de métricas, bloques de arquitectura y galerías se renderizan en compilación sin enviar código innecesario al navegador.

6. **Página 404 global para múltiples *root layouts***  
   Se habilita `experimental.globalNotFound: true` junto a `src/app/global-not-found.tsx` para ofrecer una respuesta 404 consistente y bilingüe fuera de los segmentos `(es)` y `en`.

---

## Internacionalización

- **Idioma por defecto:** español en `/` y `/projects/[slug]`.
- **Idioma secundario:** inglés en `/en` y `/en/projects/[slug]`.
- **Atributo de documento:** cada *root layout* renderiza `<RootDocument locale="es" | "en">`, configurando `<html lang="...">`.
- **Cambio de idioma contextual:** `LanguageSwitcher` utiliza `switchLocalePath()` (`src/lib/i18n.ts`) para navegar a la ruta equivalente en el otro idioma sin perder la página actual, incluyendo `hrefLang` y `aria-current="page"`.
- **Consistencia de contenido:** ambos idiomas comparten los tipos `UiDictionary`, `ProfileContent` y `ProjectCaseStudy` definidos en `src/content/types.ts`.
- **Indexación multilingüe:** las etiquetas `alternates.languages` (`es`, `en`, `x-default`) se generan tanto en metadatos HTML como en `sitemap.xml`.

---

## SEO, accesibilidad y rendimiento

Las siguientes son **prácticas implementadas en el código fuente** (no sustituyen auditorías externas de Lighthouse ni mediciones de Core Web Vitals en producción):

### SEO
- Metadatos generados por ruta e idioma (`src/lib/seo.ts`): `title`, `description`, URL canónica, `alternates.languages` (`es`, `en`, `x-default`), Open Graph (`website` / `article`, `es_CL` / `en_US`) y Twitter Cards (`summary`).
- Datos estructurados **JSON-LD (`schema.org`)**: tipo `Person` en las páginas de inicio y tipo `CreativeWork` en cada caso de estudio.
- Generación estática (`dynamic = "force-static"`) de `sitemap.xml` (con enlaces alternativos por idioma) y `robots.txt` en `src/app/sitemap.ts` y `src/app/robots.ts`.

### Accesibilidad
- Enlace de salto al contenido principal (`SkipLink` hacia `#main-content`).
- Etiquetas y estados ARIA explícitos (`aria-label`, `aria-expanded`, `aria-controls`, `aria-current="page"`, `role="group"` y `aria-live="polite"` en la copia de correo).
- Cierre del menú móvil con la tecla `Escape`.
- Indicador global de foco visible (`:focus-visible`) definido en `src/app/globals.css`.
- Respeto por la preferencia del sistema `prefers-reduced-motion: reduce`, desactivando desplazamiento suave y reduciendo duraciones de animaciones y transiciones.
- Uso de elementos semánticos (`<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<figure>`, `<figcaption>`, `<footer>`) y atributos `alt` en las imágenes de los casos de estudio.

### Rendimiento
- Pre-renderizado 100% estático en build (`output: "export"` y `generateStaticParams`).
- Hidratación acotada exclusivamente a 4 *Client Components*.
- Carga de tipografías mediante `next/font/google` (`Geist` y `Geist_Mono`) con `display: "swap"`.
- Precarga controlada (`preload="metadata"`) en elementos de video dentro de `MediaGallery`.

---

## Requisitos e instalación

### Requisitos
- **Node.js** `>= 20.9.0` (requerido por Next.js `16.4.6`)
- **npm** (el repositorio utiliza `package-lock.json`)

### Instalación

```bash
git clone https://github.com/cristobal-nan/portafolio.git
cd portafolio
npm ci
```

---

## Comandos de desarrollo, validación y compilación

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor local de desarrollo en `http://localhost:3000`. |
| `npm run lint` | Ejecuta ESLint con las reglas de Next.js (`core-web-vitals` y `typescript`). |
| `npm run typecheck` | Ejecuta la verificación estática de tipos TypeScript (`tsc --noEmit`) en modo estricto. |
| `npm run build` | Compila la aplicación y genera la exportación estática en el directorio `out/`. |
| `npm run preview` | Sirve localmente la exportación estática (`npx serve out`) para verificación previa al despliegue. |

> Nota: al usar `output: "export"`, `next start` no es aplicable sobre la salida estática generada en `out/`.

---

## Variables de entorno

| Variable | Obligatoria | Valor por defecto | Uso |
| :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | No | `https://cristobal-nanjari.vercel.app` | URL base pública para URLs canónicas, `hreflang`, Open Graph, JSON-LD, `sitemap.xml` y `robots.txt` (`src/content/site.ts`). |

Para sobrescribirla en desarrollo local, crea un archivo `.env.local` en la raíz del repositorio:

```env
NEXT_PUBLIC_SITE_URL=https://tu-dominio.vercel.app
```

---

## Despliegue en Vercel

El proyecto está configurado para desplegarse directamente en **Vercel**:

1. Importar el repositorio en Vercel (la plataforma detecta Next.js automáticamente).
2. Mantener el comando de compilación `npm run build` (Next.js genera los artefactos estáticos en `out/`).
3. Definir `NEXT_PUBLIC_SITE_URL` en **Project Settings → Environment Variables** únicamente si se publica bajo un dominio distinto a `https://cristobal-nanjari.vercel.app`.

---

## Autor y enlaces profesionales

**Cristóbal Nanjarí** — Ingeniero Civil en Informática y Telecomunicaciones (Santiago, Chile)

- **Portafolio:** [https://cristobal-nanjari.vercel.app/](https://cristobal-nanjari.vercel.app/)
- **GitHub:** [https://github.com/cristobal-nan](https://github.com/cristobal-nan)
- **LinkedIn:** [https://www.linkedin.com/in/cristóbal-nanjarí-100377109](https://www.linkedin.com/in/crist%C3%B3bal-nanjar%C3%AD-100377109)
- **Correo:** [cristobal.nan@gmail.com](mailto:cristobal.nan@gmail.com)

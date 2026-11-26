[Español](./README.md) | **English**

# Portfolio — Cristóbal Nanjarí

Bilingual professional portfolio built as a static web application using Next.js (App Router), React 19, TypeScript, and Tailwind CSS v4.

The project is engineered as a software engineering artifact focused on maintainability, strict typing, and full static export, while serving as a technical showcase of case studies in full-stack development, systems architecture, and platform integration.

**Live site:** [https://cristobal-nanjari.vercel.app/](https://cristobal-nanjari.vercel.app/) (Spanish at `/` · English at `/en`)

---

## Preview

The deployed site can be explored directly at [cristobal-nanjari.vercel.app](https://cristobal-nanjari.vercel.app/) (including the home view, ES/EN language switcher, light/dark theme toggle, and full case study pages).

<!-- Main portfolio screenshot: replace this comment once the image file is added -->

---

## Portfolio Features

- **Full static export (`output: "export"`):** all routes are pre-rendered at build time into `/out`, with no runtime server, database, or external CMS dependencies.
- **Native bilingual support (ES / EN):** dedicated static routes for Spanish (`/`) and English (`/en`), with a language switcher that preserves the current page.
- **FOUC-free light and dark theme:** initial detection via `prefers-color-scheme`, persistence in `localStorage`, cross-tab synchronization, and pre-paint class application through a synchronous inline script.
- **Structured technical case studies:** each project includes context, problem, solution, responsibilities, stack, architecture, ADRs, technical challenges with trade-offs, results, benchmarks, test suite breakdowns, and a media gallery with a sticky table of contents and sequential project navigation.
- **Minimal client-side JavaScript surface:** Server-First architecture where only 4 interactive components use `"use client"`.
- **Downloadable resources and direct contact:** downloadable PDF resume (`/cv/cv.pdf`), attached technical documents (such as the undergraduate thesis PDF), and one-click email copy to clipboard.
- **Global bilingual 404 handling:** `global-not-found.tsx` providing return links to `/` and `/en`.

---

## Featured Case Studies

| Project | Focus & primary stack | Status / Highlighted scope | Route |
| :--- | :--- | :--- | :--- |
| **MavePOS** | 100% offline multi-store POS and ERP suite for Windows (Electron 31, React 18, TypeScript 5, SQLite 3 WAL, write-through RAM cache, ESC/POS + C# GDI RAW, Google Drive sync). | Running in 2 retail branches (~5,500 products and 1,200+ monthly sales per store), 1,118 automated tests, and 19 ADRs. | [`/en/projects/mavepos`](https://cristobal-nanjari.vercel.app/en/projects/mavepos) |
| **UDP Attendance System** | Web platform (Next.js), mobile app (Flutter), and async backend (Python, FastAPI, WebSocket, Firebase Auth, Cloud Firestore) with anti-fraud dynamic QR tokens and bidirectional Canvas LMS integration. | Undergraduate thesis validated in real classes and under load (> 50,000 records and 1,500 concurrent). Includes full thesis PDF. | [`/en/projects/udp-attendance`](https://cristobal-nanjari.vercel.app/en/projects/udp-attendance) |
| **Laminitas Tracker** | 100% offline mobile app in Flutter and Dart 3.7 (Riverpod, Hive) to manage the 980-sticker FIFA World Cup 2026 album, featuring a binary QR protocol (125 B bitsets + GZIP + Base64), Update Set rule engine, and expense tracking. | Built for Android (`v1.9.0+138`), QR-interoperable with third-party apps, and portable cloud-free backups. | [`/en/projects/collectibles-app`](https://cristobal-nanjari.vercel.app/en/projects/collectibles-app) |

> A fourth case study (`data2o-cdp-integrations`) is preserved and typed in the repository under `archivedProjects`, excluded from `PROJECT_SLUGS` so it is not published in the current build.

---

## Tech Stack & Versions

| Category | Technology | Version (`package.json`) |
| :--- | :--- | :--- |
| Framework | Next.js (App Router + Turbopack + Static Export) | `16.4.6` |
| UI Library | React / React DOM | `19.3.0` |
| Language | TypeScript (`strict: true`) | `^5` |
| Styling | Tailwind CSS + `@tailwindcss/turbopack` | `4.3.3` |
| Linting | ESLint + `eslint-config-next` (`core-web-vitals`, `typescript`) | `^9` / `16.4.6` |
| Typography | Geist Sans and Geist Mono (`next/font/google`) | Bundled with Next.js |
| Deployment | Vercel | Static hosting |

---

## Architecture & Folder Structure

Routes under `src/app/` act as thin wrappers that declare metadata, static params, and document locale, delegating rendering to shared components in `src/components/` and strongly typed content modules in `src/content/`.

```text
.
├── public/
│   ├── cv/                       # Downloadable resume (cv.pdf)
│   ├── docs/                     # Technical documents (memoria-asistencia-udp.pdf)
│   └── images/projects/          # Screenshots and diagrams per case study
├── src/
│   ├── app/
│   │   ├── (es)/                 # Spanish root layout and routes (/, /projects/[slug])
│   │   ├── en/                   # English root layout and routes (/en, /en/projects/[slug])
│   │   ├── global-not-found.tsx  # Bilingual global 404 page
│   │   ├── globals.css           # Light/dark color tokens, @theme, and base styles
│   │   ├── robots.ts             # Static robots.txt generation
│   │   └── sitemap.ts            # Static sitemap.xml generation with hreflang
│   ├── components/
│   │   ├── case-study/           # Architecture, challenges, results, TOC, and gallery blocks
│   │   ├── layout/               # RootDocument, SiteShell, Header, Footer, ThemeToggle, LanguageSwitcher
│   │   ├── pages/                # Shared HomePage and ProjectCaseStudyPage for both locales
│   │   ├── sections/             # Home sections (Hero, Projects, Experience, Skills, Education, Contact)
│   │   └── ui/                   # Reusable primitives (Badge, ButtonLink, Container, Icons)
│   ├── content/
│   │   ├── locales/{es,en}/      # UI dictionaries, profile, and case studies per locale
│   │   ├── index.ts              # Content selectors by locale and slug
│   │   ├── site.ts               # Global config, social links, and published slugs (PROJECT_SLUGS)
│   │   └── types.ts              # Shared TypeScript contracts for UI, profile, and projects
│   └── lib/
│       ├── i18n.ts               # Bilingual route helpers and switchLocalePath
│       ├── seo.ts                # Metadata, Open Graph, and JSON-LD builders
│       └── theme.ts              # Storage key and synchronous anti-FOUC script
├── eslint.config.mjs
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## Key Technical Decisions

1. **Static export (`output: "export"`) with `images.unoptimized: true`**  
   Portfolio content changes only on deployment. Exporting static HTML, CSS, and assets removes the need for a production Node.js server, simplifies CDN delivery, and guarantees deterministic routes through `generateStaticParams` and `dynamicParams = false`.

2. **Route-tree internationalization (`(es)/` and `en/`) without middleware**  
   Runtime middleware is not supported with Next.js static export. Splitting routes across two dedicated root layouts ensures accurate `<html lang="es">` and `<html lang="en">` attributes, indexable static URLs, and zero third-party i18n dependencies.

3. **Strongly typed TypeScript content modules instead of an external CMS**  
   Both UI dictionaries and case studies conform to the interfaces in `src/content/types.ts`. This enforces structural parity between Spanish and English at compile time, keeps full history in Git, and eliminates network latency during builds.

4. **FOUC-free dark mode with `useSyncExternalStore`**  
   `RootDocument` injects `THEME_INIT_SCRIPT` synchronously before first paint to apply the `.dark` class from `localStorage` or `prefers-color-scheme`. `ThemeToggle` synchronizes state via `useSyncExternalStore` and `storage` events, preventing hydration mismatches and keeping browser tabs in sync.

5. **Server-First approach with 4 Client Components**  
   Only `LanguageSwitcher`, `ThemeToggle`, `MobileNav`, and `CopyEmailButton` declare `"use client"`. All pages, metric tables, architecture blocks, and media galleries render at build time without shipping unnecessary JavaScript to the browser.

6. **Global 404 page across multiple root layouts**  
   `experimental.globalNotFound: true` paired with `src/app/global-not-found.tsx` provides a consistent bilingual 404 response outside both `(es)` and `en` layout trees.

---

## Internationalization

- **Default locale:** Spanish at `/` and `/projects/[slug]`.
- **Secondary locale:** English at `/en` and `/en/projects/[slug]`.
- **Document language attribute:** each root layout renders `<RootDocument locale="es" | "en">`, setting `<html lang="...">`.
- **Context-preserving language switcher:** `LanguageSwitcher` uses `switchLocalePath()` (`src/lib/i18n.ts`) to navigate to the matching route in the target language without losing context, including `hrefLang` and `aria-current="page"`.
- **Content consistency:** both locales share the `UiDictionary`, `ProfileContent`, and `ProjectCaseStudy` contracts defined in `src/content/types.ts`.
- **Multilingual indexing:** `alternates.languages` (`es`, `en`, `x-default`) are generated in both HTML metadata and `sitemap.xml`.

---

## SEO, Accessibility & Performance

The following practices are implemented and verified directly in the source code:

### SEO
- Per-route and per-locale metadata (`src/lib/seo.ts`): `title`, `description`, canonical URL, `alternates.languages` (`es`, `en`, `x-default`), Open Graph (`website` / `article`, `es_CL` / `en_US`), and Twitter Cards (`summary`).
- **JSON-LD (`schema.org`)** structured data: `Person` on home pages and `CreativeWork` on each case study page.
- Static generation (`dynamic = "force-static"`) of `sitemap.xml` (including language alternates) and `robots.txt` via `src/app/sitemap.ts` and `src/app/robots.ts`.

### Accessibility
- Skip-to-content link (`SkipLink` targeting `#main-content`).
- Explicit ARIA attributes and live regions (`aria-label`, `aria-expanded`, `aria-controls`, `aria-current="page"`, `role="group"`, and `aria-live="polite"` on the email copy button).
- Mobile navigation closes on `Escape`.
- Global visible focus indicator (`:focus-visible`) defined in `src/app/globals.css`.
- Support for `prefers-reduced-motion: reduce`, disabling smooth scrolling and reducing animation/transition durations.
- Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<figure>`, `<figcaption>`, `<footer>`) and `alt` attributes on case study images.

### Performance
- 100% static pre-rendering at build time (`output: "export"` and `generateStaticParams`).
- Hydration scoped exclusively to 4 Client Components.
- Font loading via `next/font/google` (`Geist` and `Geist_Mono`) with `display: "swap"`.
- Controlled video preloading (`preload="metadata"`) in `MediaGallery`.

---

## Requirements & Installation

### Requirements
- **Node.js** `>= 20.9.0` (required by Next.js `16.4.6`)
- **npm** (repository uses `package-lock.json`)

### Installation

```bash
git clone https://github.com/cristobal-nan/portafolio.git
cd portafolio
npm install
```

---

## Development, Validation & Build Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local development server at `http://localhost:3000`. |
| `npm run lint` | Runs ESLint with Next.js rules (`core-web-vitals` and `typescript`). |
| `npx tsc --noEmit` | Runs strict TypeScript static type checking. |
| `npm run build` | Builds the application and generates the static export in `out/`. |
| `npx serve out` | Serves the generated static export locally for pre-deployment verification. |

> Note: because `output: "export"` is enabled, `next start` does not apply to the static build output in `out/`.

---

## Environment Variables

| Variable | Required | Default value | Usage |
| :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | No | `https://cristobal-nanjari.vercel.app` | Public base URL used for canonical URLs, `hreflang`, Open Graph, JSON-LD, `sitemap.xml`, and `robots.txt` (`src/content/site.ts`). |

To override it locally, create a `.env.local` file in the repository root:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

---

## Deployment on Vercel

The project is ready for direct deployment on **Vercel**:

1. Import the repository into Vercel (Next.js is detected automatically).
2. Keep the build command as `npm run build` (Next.js outputs static artifacts to `out/`).
3. Set `NEXT_PUBLIC_SITE_URL` under **Project Settings → Environment Variables** only if deploying to a domain other than `https://cristobal-nanjari.vercel.app`.

---

## Author & Professional Links

**Cristóbal Nanjarí** — Computer Science & Telecommunications Engineer (Santiago, Chile)

- **Portfolio:** [https://cristobal-nanjari.vercel.app/](https://cristobal-nanjari.vercel.app/)
- **GitHub:** [https://github.com/cristobal-nan](https://github.com/cristobal-nan)
- **LinkedIn:** [https://www.linkedin.com/in/cristóbal-nanjarí-100377109](https://www.linkedin.com/in/crist%C3%B3bal-nanjar%C3%AD-100377109)
- **Email:** [cristobal.nan@gmail.com](mailto:cristobal.nan@gmail.com)

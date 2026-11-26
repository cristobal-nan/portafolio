import type { ProjectCaseStudy } from "@/content/types";

export const collectiblesAppEn: ProjectCaseStudy = {
  slug: "collectibles-app",
  depth: "intermediate",
  depthLabel: "Focused case study",
  title: "Laminitas Tracker — Collectibles Mobile App & QR Interoperability",
  shortTitle: "Collectibles Mobile App",
  tagline:
    "Offline-first Flutter & Dart mobile app for managing the 980-sticker FIFA World Cup 2026 album with a compressed binary QR interoperability protocol, Update Set rule engine, and collector expense tracking.",
  category: "Mobile Application · Offline Flutter",
  organization: "Independent project (Android APK v1.9.0)",
  role: "Software Engineer — Independent Project",
  period: "May 2026 — Aug 2026",
  status: "Built & tested on Android (v1.9.0+138 · iOS not validated)",
  summary:
    "Offline mobile app built with Flutter, Riverpod, and Hive for the 980-sticker album (48 teams + FWC). Features independent cross-app QR interoperability via 125-byte GZIP+Base64 bitsets, quarantine rules for 118 Update Set replacements, text-list matching, and financial tracking.",
  featuredTags: [
    { label: "Flutter · Dart 3.7" },
    { label: "Riverpod · Offline Hive" },
    { label: "QR Bitsets (GZIP + Base64)" },
    { label: "Cross-app interoperability" },
  ],
  links: [
    {
      label: "View repository on GitHub",
      href: "https://github.com/cristobal-nan/laminitas-tracker/blob/main/README.en.md",
      type: "repository",
    },
    {
      label: "Download APK v1.9.0 (Android)",
      href: "https://github.com/cristobal-nan/laminitas-tracker/releases/tag/v1.9.0",
      type: "repository",
    },
    {
      label: "General walkthrough video",
      type: "demo",
      placeholderNote: "General walkthrough demo video pending upload.",
      checklistRef: "Collectibles App · General video",
    },
    {
      label: "QR interoperability video",
      type: "demo",
      placeholderNote:
        "Video demonstrating interoperable QR-based trading across devices/apps pending upload.",
      checklistRef: "Collectibles App · QR interoperability video",
    },
  ],
  context: [
    {
      text: "Offline-first mobile application (`album_tracker` / **Laminitas Tracker**, v1.9.0+138, 21 Dart source files under `lib/`) built for collectors of the **FIFA World Cup 2026** album (48 national teams + FWC = **980 official stickers**), running locally without backend servers or mandatory accounts.",
    },
  ],
  problem: [
    {
      text: "Generic album trackers reduce each sticker to a plain counter, leaving real-world collector edge cases unsolved: printed players omitted from final squads and replaced by the *Update Set*, special gold variants, reserved stickers that must not be offered in swaps, lack of net-cost visibility, and incompatibility when trading in person with collectors using other apps.",
    },
  ],
  solution: [
    {
      text: "Engineered a **Flutter / Dart 3.7** app using **Riverpod** reactive state and **5 local Hive boxes** (`teams`, `stickers`, `settings`, `transactions`, `swap_transactions`), combining a contextual per-sticker rule engine, a binary QR protocol compatible with third-party ecosystem apps, a plain-text swap matcher (WhatsApp), an expense tracker, and a portable text backup format (`LAMINITAS_BACKUP_V5`).",
    },
  ],
  differentiators: [
    {
      text: "**Cross-app binary QR interoperability:** `ExportService` encodes the full collection into two 125-byte bitsets (missing and tradable duplicates), **GZIP**-compressed (zeroing `MTIME` bytes 4–7 for deterministic output) and **Base64**-encoded to interoperate with *Figuritas App* (independent implementation, with no affiliation or compatibility guarantee across future third-party releases). Distinguishes profile QRs (`⋋~...`) from swap transaction QRs (`;⋋~...`) with automatic give/receive perspective inversion, supporting live camera (`mobile_scanner`) and gallery image decoding (`image_picker`).",
    },
    {
      text: "**Update Set rule engine (118 uncalled players):** Supports 4 modes (`none`, `quarantine`, `quarantineSimple`, `exclusion`) backed by the official 118-player replacement table (`UpdateSetData`), warning collectors before pasting quarantined stickers and dynamically recalculating missing, duplicate, and tradable counts.",
    },
    {
      text: "**Gold variants & granular sticker reservations:** Tracks gold variants independently (`goldCount` for sticker #13 / McDonald's mode) alongside fine-grained flags (`not pasted yet`, `tradable while unpasted`, `do not trade`, `wants extra copy`) so reserved stickers are excluded from trade lists and QRs.",
    },
    {
      text: "**Text-list comparator, expense analytics & serverless backup:** Parses Spanish/English WhatsApp swap lists to compute *what I can give* vs. *what they can give*; logs pack purchases, single-sticker buys, and sales to compute net spend, real cost per unique sticker, and efficiency (`GastosScreen`); and exports full app state as a compact portable backup (`LAMINITAS_BACKUP_V5`).",
    },
  ],
  responsibilities: [
    {
      text: "Autonomous end-to-end design and engineering of the offline-first Flutter & Dart 3.7 mobile app, covering the 980-sticker domain model, reactive Riverpod state management, and local persistence across 5 Hive boxes with versioned migrations.",
    },
    {
      text: "Engineered the cross-app binary QR interoperability protocol (dual 125-byte bitsets compressed with deterministic-`MTIME` GZIP + Base64), live camera and gallery QR scanning, and the Spanish/English plain-text WhatsApp swap-list comparator.",
    },
    {
      text: "Built the Update Set rule engine (118 official replacements across 4 quarantine modes), gold-variant and granular reservation flags, collector expense analytics, portable text backups (`LAMINITAS_BACKUP_V5`), and unit tests covering business-logic edge cases.",
    },
  ],
  technologies: [
    {
      group: "Framework & State",
      items: [
        "Flutter",
        "Dart 3.7",
        "flutter_riverpod",
        "go_router",
        "Material Design (Slate/Indigo dark theme)",
      ],
    },
    {
      group: "Persistence, QR & Interoperability",
      items: [
        "Hive + hive_flutter (5 local boxes)",
        "qr_flutter",
        "mobile_scanner",
        "image_picker (gallery QR analysis)",
        "125B Bitsets + GZIP + Base64",
        "flutter_test",
      ],
    },
  ],
  architecture: {
    overview: {
      text: "Three-layer offline-first architecture: a 5-tab persistent UI (`IndexedStack`: Dashboard, Album with *Classic* and *Codes Grid* views, Expenses, Exchange, and Profile), reactive state and derived metrics in **Riverpod** (`AlbumNotifier`, `expenseStatsProvider`), and pure domain services for local persistence with idempotent migrations (`StorageService` on Hive) and interoperability/backup (`ExportService`).",
    },
    components: [
      {
        name: "UI Layer (5 modules + scanner)",
        role: "Mobile UX & camera",
        details:
          "Progress/efficiency Dashboard, dual-mode Inventory (detailed list or compact code grid), Quarantine/Update Set manager, Expenses screen, Exchange hub (QR + text), and `ScannerScreen` (camera & gallery).",
      },
      {
        name: "State & Domain Rules",
        role: "Riverpod + contextual `Sticker` model",
        details:
          "`AlbumNotifier` and contextual methods on `Sticker` compute pasted, missing, duplicate, and blocked counts dynamically under active Update Set and gold-variant rules.",
      },
      {
        name: "Hive Persistence + ExportService",
        role: "Local storage & QR protocol",
        details:
          "5 local NoSQL boxes with versioned migrations (`migrated_official_118_uncalled_v5`), `LAMINITAS_BACKUP_V5` serializer, text swap parser, and 125B GZIP+Base64 binary QR encoder/decoder.",
      },
    ],
    diagrams: [],
  },
  challenges: [
    {
      title: "Packing ~1,000 stickers into a fast, cross-app scannable QR",
      problem:
        "Encoding 980 sticker states as JSON or plain text produces overly dense QR codes that scan poorly on mobile screens and break compatibility with third-party collector apps.",
      approach:
        "Implemented a **dual 125-byte bitset** layout mapped by official team ordering, **GZIP**-compressed with zeroed `MTIME` header bytes for deterministic payloads, and **Base64**-encoded—achieving compact QRs interoperable with *Figuritas App* plus automatic give/receive inversion on trade scans.",
      tradeoff:
        "The cross-app binary protocol encodes presence and duplicate availability as single bits without carrying exact duplicate counts or internal reservation flags; lossless device migrations are therefore handled separately via `LAMINITAS_BACKUP_V5`.",
    },
    {
      title: "Statistical consistency across composable collection rules",
      problem:
        "Combining 4 *Update Set* modes, 118 uncalled players, gold variants (#13), and per-sticker trade locks easily causes mismatches between Dashboard stats, duplicate lists, and exchange matchers.",
      approach:
        "Centralized contextual calculators (`pastedCountWithContext`, `missingCountForExchangeWithContext`, `duplicateCountWithContext`) directly on the `Sticker` domain model and covered edge cases (sticker `00`, quarantine with update copy, and 980-sticker completion) in `test/business_logic_test.dart`.",
    },
  ],
  results: [
    {
      category: "Verified technical status",
      title: "Compiled Android build & business-logic test coverage",
      detail:
        "Version `1.9.0+138` built for Android (`APK`), operating 100% offline with the full 980-sticker catalog and 118 official replacements, plus unit tests in `test/business_logic_test.dart` validating count parity, sticker `00`, and quarantine rules.",
    },
  ],
  media: [
    // Group 1: Dashboard & album views
    {
      id: "collectibles-01-dashboard-resumen",
      title: "Dashboard — Total progress & collection efficiency",
      caption:
        "Circular completion gauge across all 980 official stickers, breakdown of unique, missing, and duplicate counts (average per sticker), and overall collection efficiency.",
      kind: "screenshot",
      orientation: "portrait",
      group: "Dashboard & album views",
      src: "/images/projects/collectibles-app/01-dashboard-resumen.jpg",
      alt: "Laminitas Tracker Dashboard showing 980-sticker progress and collection efficiency metrics",
    },
    {
      id: "collectibles-02-dashboard-grupos",
      title: "Dashboard — Group & national team breakdown",
      caption:
        "Visual progress grouped by tournament stage (Introduction and Groups A–L) with individual completion bars for all 48 national teams.",
      kind: "screenshot",
      orientation: "portrait",
      group: "Dashboard & album views",
      src: "/images/projects/collectibles-app/02-dashboard-grupos.jpg",
      alt: "Group and national team progress bars in Laminitas Tracker Dashboard",
    },
    {
      id: "collectibles-03-album-vista-clasica",
      title: "Album (Classic View) — Detailed list with inline quarantine",
      caption:
        "Fast jump-to-team flag rail on the right, per-sticker `-/+` counters, and nested rendering of Update Set replacements alongside quarantined players (orange lock badge).",
      kind: "screenshot",
      orientation: "portrait",
      group: "Dashboard & album views",
      src: "/images/projects/collectibles-app/03-album-vista-clasica.jpg",
      alt: "Classic View of the album showing Mexico stickers and inline Update Set quarantine state",
    },
    {
      id: "collectibles-04-album-vista-codigos",
      title: "Album (Codes Grid) — Compact grid with status badges",
      caption:
        "Dense 4-column grid designed for rapid lookup during in-person trades, surfacing quarantine locks, special variants (#13), duplicate counts, and tradable indicators.",
      kind: "screenshot",
      orientation: "portrait",
      group: "Dashboard & album views",
      src: "/images/projects/collectibles-app/04-album-vista-codigos.jpg",
      alt: "Codes Grid view displaying quarantine locks, #13 special variant badge, and tradable duplicates",
    },

    // Group 2: Granular rules & Update Set
    {
      id: "collectibles-05-lamina-opciones",
      title: "Per-sticker granular flags & trade protection",
      caption:
        "Contextual sticker modal allowing collectors to distinguish pasted vs. unpasted (saved) copies, hide duplicates from swaps, or flag a sticker to acquire an extra copy.",
      kind: "screenshot",
      orientation: "portrait",
      group: "Granular rules & Update Set",
      src: "/images/projects/collectibles-app/05-lamina-opciones.jpg",
      alt: "Granular sticker options modal for NOR15 in Laminitas Tracker",
    },
    {
      id: "collectibles-06-update-set-ajustes",
      title: "Update Set — Quarantine modes & McDonald's dual-version rule",
      caption:
        "Rule-engine configuration for the 118 uncalled players: Update Set ownership toggle, Advanced Quarantine, Simple Quarantine, or Exclusion modes, plus the optional McDonald's dual-version rule.",
      kind: "screenshot",
      orientation: "portrait",
      group: "Granular rules & Update Set",
      src: "/images/projects/collectibles-app/06-update-set-ajustes.jpg",
      alt: "Update Set settings screen showing quarantine modes and McDonald's promotional rule",
    },
    {
      id: "collectibles-07-update-set-seguimiento",
      title: "Update Set — Status tracking (Squads / Waiting / Complete)",
      caption:
        "Five-tab tracker (`Settings`, `Squads`, `Missing`, `Waiting`, `Complete`) auditing which uncalled players already have both their replacement pasted and their reserved physical copy stored.",
      kind: "screenshot",
      orientation: "portrait",
      group: "Granular rules & Update Set",
      src: "/images/projects/collectibles-app/07-update-set-seguimiento.jpg",
      alt: "Update Set Complete tab listing uncalled players per team with replacement status",
    },

    // Group 3: Exchange, expense tracking & backup
    {
      id: "collectibles-08-intercambio-texto",
      title: "Exchange Generator — Collection summary & WhatsApp list preview",
      caption:
        "Live breakdown of pasted, tradable, quarantined, and saved stickers alongside a flag-formatted text preview ready to copy to the clipboard while excluding locked items.",
      kind: "screenshot",
      orientation: "portrait",
      group: "Exchange, expense tracking & backup",
      src: "/images/projects/collectibles-app/08-intercambio-texto.jpg",
      alt: "Exchange Generator screen showing summary cards and WhatsApp-ready tradable list preview",
    },
    {
      id: "collectibles-09-intercambio-qr",
      title: "Interoperable QR Exchange, Free Swap & Text Comparator",
      caption:
        "Compressed binary QR (125B bitsets + GZIP + Base64) interoperable with *Figuritas App*, scan action (camera/gallery), plus shortcuts to Free Swap and plain-text list matching.",
      kind: "screenshot",
      orientation: "portrait",
      group: "Exchange, expense tracking & backup",
      src: "/images/projects/collectibles-app/09-intercambio-qr.jpg",
      alt: "Interoperable QR Exchange code with Scan button, Free Swap, and Text Exchange options",
    },
    {
      id: "collectibles-10-control-gastos",
      title: "Expense Tracker — Collector finances & average unit costs",
      caption:
        "Tracks net spend, gross spend, and revenue from sticker sales, alongside pack/sticker counts, average cost per pack, per sticker, and per unique sticker, plus full transaction history.",
      kind: "screenshot",
      orientation: "portrait",
      group: "Exchange, expense tracking & backup",
      src: "/images/projects/collectibles-app/10-control-gastos.jpg",
      alt: "Expense Tracker screen showing net spend, album metrics, average costs, and transaction log",
    },
    {
      id: "collectibles-11-perfil-ajustes",
      title: "Profile & Settings — View preferences & portable backup",
      caption:
        "User customization, shortcut to Update Set rules, switcher between *Classic View* and *Codes Grid*, and clipboard export/import for serverless portable backups (`LAMINITAS_BACKUP_V5`).",
      kind: "screenshot",
      orientation: "portrait",
      group: "Exchange, expense tracking & backup",
      src: "/images/projects/collectibles-app/11-perfil-ajustes.jpg",
      alt: "Profile and Settings screen with Classic/Codes view toggle and album export/import backup",
    },

    // Group 4: Pending Demo Videos
    {
      id: "collectibles-video-general",
      title: "General walkthrough video",
      caption:
        "[PENDING: Add video showcasing the 980-sticker catalog, Update Set modes, expense tracking, and portable backup.]",
      kind: "video-demo",
      group: "Demo videos (Pending)",
      checklistRef: "Collectibles App · General video",
    },
    {
      id: "collectibles-qr-demo",
      title: "QR interoperability video",
      caption:
        "[PENDING: Add video demonstrating profile and transaction QR generation/scanning across devices and compatible apps.]",
      kind: "video-demo",
      group: "Demo videos (Pending)",
      checklistRef: "Collectibles App · QR interoperability video",
    },
  ],
  seo: {
    title: "Laminitas Tracker (Collectibles Mobile App) — Case Study",
    description:
      "Case study of an offline Flutter mobile app for managing 980 stickers with a binary QR interoperability protocol (GZIP + Base64), Update Set rule engine, and expense tracking.",
  },
};

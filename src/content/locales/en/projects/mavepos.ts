import type { ProjectCaseStudy } from "@/content/types";

export const maveposEn: ProjectCaseStudy = {
  slug: "mavepos",
  depth: "very-detailed",
  depthLabel: "Deep-dive case study",
  title: "MavePOS — 100% Offline Windows POS & Multi-Store ERP Suite",
  shortTitle: "MavePOS",
  tagline:
    "Windows desktop application engineered to run 100% offline with transactional SQLite (WAL), a write-through RAM catalog cache for up to 50,000 products, hybrid thermal printing, hardware-bound offline licensing, and a lazy-loaded multi-store ERP suite synced via Google Drive.",
  category: "Windows Desktop · Offline POS + ERP",
  organization: "Mave (Independent production product)",
  role: "Software Engineer — Independent Project",
  period: "Aug 2026 — Present",
  status: "Live across 2 branches (~5,500 SKUs · 1,200+ sales/mo per store · v1.0.15)",
  summary:
    "100% offline desktop Point of Sale and modular ERP suite built with Electron, React, TypeScript, and SQLite (WAL), running in production across two retail branches with ~5,500 products and 1,200+ monthly transactions per store. Backed by 1,078 automated tests (100%), benchmarks up to 50,000 SKUs with 0 long tasks, 19 ADRs, and 14 screenshots.",
  featuredTags: [
    { label: "Electron 31 · React 18 · TypeScript 5" },
    { label: "SQLite 3 (WAL) · RAM Cache" },
    { label: "ESC/POS · C# GDI RAW" },
    { label: "1,078 tests · 19 ADRs" },
  ],
  keyMetrics: [
    {
      label: "Automated tests",
      value: "1,078 / 1,078",
      note: "97 suites · 100% in 10.47 s (Electron + real SQLite)",
    },
    {
      label: "Typing latency (50k)",
      value: "8.3 – 8.5 ms p95",
      note: "0 long tasks across Catalog F2 & Quick Search F10",
    },
    {
      label: "Codebase scale",
      value: "64,558 LOC",
      note: "194 source files · 23,179 test LOC · 19 ADRs",
    },
    {
      label: "Accessibility & UI",
      value: "390 / 390",
      note: "WCAG AA (768p/900p/1080p) · 0 layout shift",
    },
  ],
  links: [
    {
      label: "General demo video",
      type: "demo",
      placeholderNote:
        "General product walkthrough video pending recording/upload.",
      checklistRef: "MavePOS · General demo video",
    },
    {
      label: "Hardware demo video (ESC/POS + HID + drawer)",
      type: "demo",
      placeholderNote:
        "Physical hardware demo video (USB HID scanner, 58/80mm thermal printer, RJ11 cash drawer) pending upload.",
      checklistRef: "MavePOS · Hardware demo video",
    },
    {
      label: "Multi-store sync demo video",
      type: "demo",
      placeholderNote:
        "Multi-store synchronization video (Google Drive snapshots & warehouse transfers) pending upload.",
      checklistRef: "MavePOS · Sync demo video",
    },
  ],
  context: [
    {
      text: "MavePOS is a standalone Windows desktop product (84.1 MB NSIS installer, 21 progressive builds from v1.0.0 through v1.0.15) built for retail stores and multi-branch businesses requiring full operational continuity without internet dependency or recurring cloud SaaS fees.",
    },
    {
      text: "From a single codebase, it ships both a core Point of Sale (POS) edition and a decoupled, lazy-loaded ERP suite tailored for businesses operating a central warehouse, multiple branches, and customer credit accounts.",
    },
  ],
  problem: [
    {
      text: "Small and mid-sized retailers regularly face intermittent internet outages that halt cloud POS tools, noticeable UI lag when searching catalogs with tens of thousands of products and variations, and high per-register SaaS subscription costs.",
    },
    {
      text: "Operationally, coordinating a central warehouse with remote branches via manual spreadsheets causes double inventory deductions, price/SKU drift across branches, slow cash-register reconciliations, and weak auditability for returns and credit sales.",
    },
  ],
  solution: [
    {
      text: "**100% Offline Core POS:** Cash shift open/close denomination counting (separating sales cash vs. top-up cash), a write-through RAM catalog for instant keyboard search (`ProductSearch` with `%` AND fragments and leading-zero tolerance), simple/variable/variation catalog hierarchy with cascading updates, N:M suppliers, concurrent SQLite-persisted pending tickets, 30-day product exchanges, immutable chronological Kardex, hybrid thermal printing (ESC/POS 58/80mm + C# GDI Windows Spooler RAW + A4), Excel import/export, Recharts analytics, and consistent rotating backups via `db.backup()`.",
    },
    {
      text: "**Modular ERP Suite (unlocked via offline hardware license):** Adds Customer & Accounts Receivable management with Chilean RUT validation (Modulo 11), credit limits, and auditable credit reversals with store credit balances; plus Warehouse & Multi-Store logistics featuring Pure Warehouse mode, atomic JSON snapshot sync over Google Drive for Desktop, Smart Distribution calculated from pack size and min stock, a Transfer Desk with F3 scanning and durable partial dispatch, and a Consolidated Catalog with live batch homologation (`patch_batch_*.json`).",
    },
  ],
  responsibilities: [
    {
      text: "Autonomously architected and engineered the offline-first desktop POS + ERP system end to end, spanning sales, inventory, cash finance, accounts receivable, and multi-branch warehouse operations.",
    },
    {
      text: "Integrated commercial peripherals (USB HID barcode scanner, hybrid ESC/POS + C# GDI Windows Spooler RAW printing, RJ11 cash drawer) and designed serverless multi-store inventory sync, transfers, and catalog homologation.",
    },
    {
      text: "Optimized catalog search performance across 10,000–50,000 SKUs (< 15 ms p95), authored the dual-theme WCAG AA design system, 19 ADRs, 26 SQLite migrations, and 1,078 automated tests.",
    },
  ],
  technologies: [
    {
      group: "Desktop & Frontend",
      items: [
        "Electron 31",
        "React 18",
        "TypeScript 5",
        "Vite (electron-vite)",
        "Zustand",
        "Tailwind CSS",
        "Recharts",
        "Lucide React",
      ],
    },
    {
      group: "Persistence, Data & Export",
      items: [
        "SQLite 3 (better-sqlite3)",
        "WAL Mode + Foreign Keys ON",
        "26 versioned migrations",
        "Write-through RAM cache",
        "SheetJS (xlsx)",
        "Google Drive Desktop (JSON sync)",
      ],
    },
    {
      group: "Hardware, Security & Packaging",
      items: [
        "USB HID Barcode Scanner",
        "node-thermal-printer (ESC/POS 58/80mm)",
        "Windows Spooler RAW (C# GDI)",
        "RJ11 Cash Drawer",
        "HMAC-SHA256 + MachineGuid",
        "electron-builder (Windows NSIS)",
      ],
    },
    {
      group: "Quality, Rules & Benchmarks",
      items: [
        "Vitest 2.1 (ELECTRON_RUN_AS_NODE=1)",
        "check:rules (architectural linter)",
        "Electron Perf Harness (scripts/catalog-perf)",
        "Automated WCAG AA audit",
      ],
    },
  ],
  architecture: {
    overview: {
      text: "Isolated Electron multi-process architecture (`contextIsolation: true`) communicating over a strictly typed IPC preload bridge. The Renderer maintains a write-through RAM index (`memoryCatalogStore`) synced with the Main Process, which runs all critical mutations inside SQLite `IMMEDIATE` transactions (WAL mode, 26 migrations). The ERP suite lives behind a lazy-loaded runtime (`ErpRuntime`) revalidated via offline HMAC-SHA256 licensing, preserving a clean static dependency graph for the base POS edition.",
    },
    components: [
      {
        name: "Renderer Process + memoryCatalogStore",
        role: "Operational UI & RAM index",
        details:
          "POS views (F1–F6 / F10) and lazy-loaded ERP chunks backed by a write-through memory store and DOM-windowed tables (`WindowedTableBody`) sustaining smooth interaction at 50,000 products.",
      },
      {
        name: "Preload Bridge + Main Process",
        role: "Typed IPC, Core services & ErpRuntime",
        details:
          "Core Sales, Product, Cash, Inventory, Report, Backup, and HMAC License services. `ErpRuntime` loads Customer, Warehouse, Distribution, Transfer, and Sync services only when authorized.",
      },
      {
        name: "SQLite WAL + Peripherals + Drive Sync",
        role: "Persistence, hardware & multi-store",
        details:
          "SQLite 3 with `foreign_keys = ON`, 7-copy rotating `db.backup()`, hybrid `PrinterService` (ESC/POS + C# GDI RAW + A4), and atomic JSON payload exchange (`stock`/`transfer`/`patch`) over Google Drive Desktop.",
      },
    ],
    diagrams: [
      {
        id: "mavepos-arch-general",
        title: "General system architecture (processes, persistence & ERP isolation)",
        caption:
          "Process separation across Renderer (POS + lazy-loaded ERP + write-through RAM cache), typed Preload IPC bridge, Main Process (Core services, HMAC-gated ErpRuntime, hybrid PrinterService), SQLite WAL, peripherals, and Google Drive Desktop.",
        kind: "architecture-diagram",
        src: "/images/projects/mavepos/arquitectura-general.png",
        alt: "MavePOS general architecture diagram showing Electron processes, SQLite WAL, lazy-loaded ERP, hardware peripherals, and sync",
      },
      {
        id: "mavepos-arch-multistore",
        title: "Offline multi-store ERP flow, transfers & catalog homologation",
        caption:
          "End-to-end workflow connecting Central Warehouse and branches through atomic JSON snapshots, smart distribution, durable partial dispatch, and batch catalog homologation (`patch_batch_*.json`).",
        kind: "architecture-diagram",
        src: "/images/projects/mavepos/flujo-erp-multitienda.png",
        alt: "MavePOS offline multi-store ERP workflow diagram across central warehouse and branches via Google Drive",
      },
    ],
    adrs: [
      {
        id: "ADR-0008",
        title: "Hardware-bound offline licensing",
        summary:
          "HMAC-SHA256 cryptographic signatures bound to Windows `MachineGuid` with a standalone private generator, eliminating online activation servers.",
      },
      {
        id: "ADR-0010",
        title: "Modular ERP isolation",
        summary:
          "ERP routes, Zustand stores, and Main services split into lazy-loaded chunks revalidated at runtime so the base POS keeps a clean static graph.",
      },
      {
        id: "ADR-0012",
        title: "Orthogonal commercial matrix (4 tiers)",
        summary:
          "A single codebase governs 4 commercial tiers by combining Edition (`pos` / `erp`) and Topology (`single-register` / `multi-register`).",
      },
      {
        id: "ADR-0015 & ADR-0019",
        title: "Transfer desk & durable emission",
        summary:
          "Partial dispatch without double inventory deduction, batch isolation between runs, and safe retries across sync interruptions.",
      },
      {
        id: "ADR-0016 & ADR-0017",
        title: "Credit reversals & dual cash reconciliation",
        summary:
          "Auditable reversals with store-credit balances without mutating accounting history, plus separate reconciliation of sales cash vs. top-up cash with effective-date bank deposits.",
      },
    ],
  },
  designSystem: {
    overview: {
      text: "Formally documented in `docs/UI_SYSTEM.md` and ADR-0006 for sustained operation on retail monitors (`1366×768`, `1600×900`, `1920×1080`), emphasizing keyboard velocity, tabular legibility, and zero layout shift.",
    },
    pillars: [
      {
        title: "Light Mode & Deep Slate Dark Mode decoupled from accents",
        details:
          "Deep Slate surfaces (`#0F172A` / `#1E293B` / `#334155`) orthogonally decoupled from 4 accent themes (`lilac`, `emerald`, `ocean`, `graphite`) with WCAG AA verified contrast (normal text ≥ 4.5:1, borders ≥ 3.07:1, focus ≥ 3.10:1).",
      },
      {
        title: "14px typographic floor & tabular numerals",
        details:
          "14px minimum floor configured in `tailwind.config.js` to prevent glyph clipping on POS monitors, paired with `tabular-nums` and `font-mono` for CLP amounts, stock quantities, receipts, and timestamps.",
      },
      {
        title: "Fixed desktop geometry & Zero Layout Shift validation",
        details:
          "Standardized screen anatomy (`ViewHeader` → `SubTabs` → fixed-geometry workspace), inline validation preserving row/card heights, and a physical thermal ticket preview that always remains crisp `#FFFFFF` paper.",
      },
      {
        title: "Keyboard-first operation & ARIA accessibility",
        details:
          "F1–F12 shortcuts, permanent USB HID barcode autofocus, themed `:focus-visible` rings, `role=\"dialog\"` / `aria-modal` / `Escape` modals, `aria-live=\"polite\"` toasts, and strict `motion-reduce` compliance.",
      },
    ],
  },
  challenges: [
    {
      title: "Sustaining responsive UX across 10,000–50,000 product catalogs",
      problem:
        "In the baseline build, rendering large tables, 1,000-guide histories, and the equivalents picker across 50,000 products caused 150–352 ms p95 input latency (up to 1,770 ms on equivalents) with > 50 ms long tasks disrupting rapid cashier typing.",
      approach:
        "Combined the write-through RAM index with DOM windowing (`WindowedTableBody`, capping mounted DOM rows to ~20–23), pre-indexed lookups, and ranking cache capped at 50 results in the equivalents picker—verified via a production Electron benchmark harness.",
      tradeoff:
        "Maintaining an in-memory catalog requires guaranteed parity with SQLite on sorting, pagination, and inherited categories; enforced continuously by 22 parity test suites (242 tests).",
    },
    {
      title: "Multi-store synchronization with $0/month cloud infrastructure",
      problem:
        "Coordinating inventory, partial warehouse dispatches, and catalog homologation across branches using only Google Drive Desktop risks partial writes, double deductions, or lost transfers during outages.",
      approach:
        "Designed an atomic JSON snapshot protocol, audited manual inbox reception, durable emission with safe retries (ADR-0019), and batch-isolated partial dispatch (ADR-0015).",
      tradeoff:
        "Consistency is eventual (syncing as soon as connectivity resumes) rather than real-time; therefore remote branch stock lookups in F10 are deferred on demand (`F8`) so local checkout never blocks.",
    },
    {
      title: "Reliable thermal printing & offline anti-piracy licensing",
      problem:
        "Windows 58/80mm thermal printers frequently suffer driver/ESC-POS mismatches, while offline commercial distribution needs license enforcement without operating activation servers.",
      approach:
        "Built a hybrid `PrinterService` (native ESC/POS + C# GDI Windows Spooler RAW bridge + A4 fallback) alongside offline HMAC-SHA256 licenses bound to Windows `MachineGuid` (ADR-0008).",
    },
  ],
  testSuiteBreakdown: {
    summary:
      "Executed with Vitest 2.1.9 under the real Electron binary (`ELECTRON_RUN_AS_NODE=1`) validating SQL queries, `IMMEDIATE` transactions, and 26 migrations against real `better-sqlite3`.",
    staticChecks: [
      "npm run check:rules — 0 errors (architectural & theme rules)",
      "tsc --noEmit (Node: Main + Preload) — 0 errors",
      "tsc --noEmit (Web: Renderer) — 0 errors",
    ],
    totalSuites: 97,
    totalTests: 1078,
    duration: "10.47 s",
    domains: [
      {
        domain: "Warehouse ERP, Distributions, Transfers & Sync",
        suites: 31,
        tests: 310,
        scope:
          "Atomic JSON snapshots, partial dispatch without double deduction, F3 reception, consolidated catalog, and Pure Warehouse mode",
      },
      {
        domain: "Catalog, RAM/SQLite Search & Suppliers",
        suites: 22,
        tests: 242,
        scope:
          "Exact RAM vs. SQLite parity, `%` AND rules and leading zeros, Excel import/export, and SKU safety",
      },
      {
        domain: "Sales, Checkout & Exchanges",
        suites: 11,
        tests: 151,
        scope:
          "IMMEDIATE transactions, CLP totals and stock integrity, global receipts, mixed/cash/credit checkout, and 30-day exchanges",
      },
      {
        domain: "Cash Register, Reconciliation, Top-Ups & Deposits",
        suites: 8,
        tests: 112,
        scope:
          "Separate sales vs. top-up reconciliation, open-shift daily logs, and effective-date bank deposits",
      },
      {
        domain: "Licensing, ERP Isolation, DB & Settings",
        suites: 13,
        tests: 101,
        scope:
          "HMAC-SHA256 verification, static POS vs. ERP graph isolation, ErpRuntime, db.backup(), and transactional restore rollback",
      },
      {
        domain: "ERP Customers, Credit & Reversals",
        suites: 5,
        tests: 61,
        scope:
          "Chilean RUT Modulo 11, credit limits, cash payments into register, reversals, and store-credit balances",
      },
      {
        domain: "Thermal Printing, ESC/POS & Documents",
        suites: 3,
        tests: 53,
        scope:
          "58/80mm templates, thermal preview, dispatch guides, and product lists",
      },
      {
        domain: "Inventory & Kardex",
        suites: 2,
        tests: 30,
        scope:
          "Relative/override adjustments, adjustment voids, low-stock alerts, and Kardex audit trail",
      },
      {
        domain: "Reports & Analytics",
        suites: 2,
        tests: 18,
        scope:
          "Period aggregations, estimated margins, payment breakdowns, and Excel export",
      },
    ],
  },
  benchmarks: {
    environment:
      "Isolated production Electron harness (`scripts/catalog-perf/`), AMD Ryzen 5 5600X (12 threads), 15.92 GiB RAM, Windows, Electron 31.7.7 (Chromium 126, React 18.3.1), deterministic 10,000 and 50,000 product datasets driven with native keyboard events (`webContents.sendInputEvent`).",
    methodologyNote:
      "Methodological note: interaction latencies were measured via double `requestAnimationFrame` + `MutationObserver` (DOM/frame proxy with observers and tracing active). They complement rather than replace physical scanner/printer and live multi-PC Google Drive testing.",
    comparisons: [
      {
        scenario: "Catalog (F2) — Input p95 (24 scenarios, 960 events)",
        before: "22.3 ms · 35 long tasks (max 106 ms)",
        after: "8.5 ms · 0 long tasks (max 14.2 ms)",
        improvement: "Zero > 50 ms long tasks",
      },
      {
        scenario: "Quick Search (F10) — Input p95 (960 events)",
        before: "14.1 ms · 14 long tasks (max 67 ms)",
        after: "8.3 ms · 0 long tasks (max 13.9 ms)",
        improvement: "~23 DOM rows for 2,100 logical rows",
      },
      {
        scenario: "Smart Distribution (Warehouse) — Typing p95",
        before: "57.1 – 124.4 ms (106 ms long task)",
        after: "11.2 – 12.1 ms · 0 long tasks",
        improvement: "Pre-indexing + fixed DOM window",
      },
      {
        scenario: "Transfer Desk — Typing p95",
        before: "96.9 – 282.2 ms (319 ms long task)",
        after: "14.1 – 14.4 ms · 0 long tasks",
        improvement: "> 90% latency reduction",
      },
      {
        scenario: "Consolidated Catalog — Typing p95 (50k)",
        before: "150.0 – 163.8 ms (165 ms long task)",
        after: "31.1 – 37.3 ms · 0 long tasks",
        improvement: "Sustained smoothness at 50k SKUs",
      },
      {
        scenario: "Document History (1,000 guides, 140 ms cadence)",
        before: "1,000 DOM rows · 352.7 ms p95 (371 ms stall)",
        after: "21 DOM rows · 19.0 ms p95 · 0 long tasks",
        improvement: "1,000-guide open: 307.4 ms → 31.5 ms",
      },
      {
        scenario: "Equivalents Picker (50,000 products)",
        before: "1,770.5 / 1,728.5 ms (1,761 ms stall)",
        after: "55.3 / 51.7 ms (max 50 ms pause)",
        improvement: "~32× faster (ranking cache + top-50 cap)",
      },
    ],
    specialized: [
      {
        test: "Real SQLite :memory: + IPC fallback (no RAM cache)",
        scope: "24 scenarios · 960 events · 492 IPC calls",
        result:
          "Input p95: 12.7 ms (F2) / 11.2 ms (F10) · Main p95: 23.2 ms · 0 long tasks",
      },
      {
        test: "Extended input stress + remote stock lookups",
        scope: "1,400 native events (113-char paste + sustained backspace)",
        result:
          "Input p95: 9.1 – 12.5 ms · Warm F10 p95: 33.2 – 36.7 ms · 0 long tasks (prior isolated peak: 85.1 ms)",
      },
      {
        test: "ERP payload stress (Inbox)",
        scope: "5,000 patches (100 batches) + 200 guides × 200 items",
        result:
          "301 logical receptions / 20 DOM rows · 200-item detail open: 39 ms · 0 long tasks",
      },
      {
        test: "Visual stability, focus, border & WCAG AA contrast audit",
        scope: "3 resolutions (768p/900p/1080p) × Light/Dark",
        result:
          "390 / 390 states (2,634 controls, 266 inputs) + 108 / 108 contrast/geometry · Text ≥ 4.5:1 · 0 layout shift",
      },
    ],
  },
  commercialMatrix: {
    overview:
      "A single codebase supports 4 commercial tiers (ADR-0012), delivering $0/month cloud infrastructure cost, hardware-bound offline HMAC-SHA256 licensing, and an 84.1 MB standalone Windows NSIS installer (21 progressive builds from v1.0.0 to v1.0.15).",
    plans: [
      {
        plan: "1. Single-Register POS",
        edition: "pos · 1 standalone PC (local SQLite)",
        topology: "Single-register",
        status: "In production",
        target: "Independent retail shops, convenience stores, and markets",
      },
      {
        plan: "2. Single-Register POS + ERP",
        edition: "erp · 1 PC + Google Drive Multi-Store Sync",
        topology: "Single-register + Sync",
        status: "In production",
        target: "Multi-branch retailers with a central warehouse and credit sales",
      },
      {
        plan: "3. Multi-Register POS",
        edition: "pos · 1 LAN Server + N client registers",
        topology: "LAN Multi-register",
        status: "Planned (Phase 3)",
        target: "High-throughput stores with multiple checkout lanes",
      },
      {
        plan: "4. Multi-Register POS + ERP",
        edition: "erp · Full suite + LAN topology",
        topology: "LAN Multi-register + ERP",
        status: "Planned (Phase 3–4)",
        target: "Department stores or chains with centralized operations",
      },
    ],
    advantages: [
      "$0/month cloud infrastructure cost (100% local on Windows + existing Google Drive Desktop).",
      "Offline anti-piracy via hardware-bound HMAC-SHA256 signatures with no activation server.",
      "Automatic SQLite schema migrations (26 versions) and 7-copy rotating backups via db.backup().",
      "Full checkout continuity during internet outages and crash recovery via SQLite-persisted tickets.",
    ],
  },
  results: [
    {
      category: "Production deployment",
      title: "Live operation across two retail branches",
      detail:
        "Currently running in production across **two retail branches** managing approximately **5,500 products per store**, enabling daily stock replenishment, transfers, and catalog homologation with $0/month cloud infrastructure cost.",
    },
    {
      category: "Production transaction volume",
      title: "1,200+ monthly transactions per branch",
      detail:
        "Under live Monday–Saturday retail operation, a single branch processes **1,276 monthly transactions** (**363 in the latest week**, ~60 daily sales), validating SQLite WAL durability, write-through RAM search, and hybrid thermal printing under sustained checkout load.",
    },
  ],
  media: [
    // Group 1: Checkout & Catalog Operations (Light)
    {
      id: "mavepos-01-ventas-claro",
      title: "Sales (F1) — HID scanner, pending tickets & fast checkout",
      caption:
        "Permanent barcode autofocus, concurrent SQLite-persisted pending tickets, last-sale bar, and keyboard shortcuts (F10/F12/Ctrl+P).",
      kind: "screenshot",
      group: "Checkout & catalog operations (Light)",
      src: "/images/projects/mavepos/01-ventas-claro.png",
      alt: "MavePOS Sales F1 screen in light mode",
    },
    {
      id: "mavepos-02-ventas-f10-claro",
      title: "Quick Search (F10) — Hierarchy & multi-store stock",
      caption:
        "Keyboard-driven modal over the RAM catalog supporting prefix search, `%` AND fragments, leading-zero tolerance, and deferred remote branch stock lookup (F8).",
      kind: "screenshot",
      group: "Checkout & catalog operations (Light)",
      src: "/images/projects/mavepos/02-ventas-f10-claro.png",
      alt: "MavePOS Quick Search F10 modal in light mode",
    },
    {
      id: "mavepos-03-productos-claro",
      title: "Products (F2) — Hierarchical catalog & N:M suppliers",
      caption:
        "Unified management of simple, variable parent, and variation products with cascading updates, combinable filters, and Excel import/export.",
      kind: "screenshot",
      group: "Checkout & catalog operations (Light)",
      src: "/images/projects/mavepos/03-productos-claro.png",
      alt: "MavePOS Products F2 catalog screen in light mode",
    },
    {
      id: "mavepos-04-inventario-claro",
      title: "Inventory (F3) — Kardex, low-stock alerts & daily audit",
      caption:
        "Immutable Kardex movement log, automatic low-stock alerts, customizable keyboard adjustment reasons, and Excel-exportable daily audit trails.",
      kind: "screenshot",
      group: "Checkout & catalog operations (Light)",
      src: "/images/projects/mavepos/04-inventario-claro.png",
      alt: "MavePOS Inventory and Kardex F3 screen in light mode",
    },

    // Group 2: ERP Suite (Light)
    {
      id: "mavepos-05-bodega-repartos-claro",
      title: "Warehouse ERP — Smart multi-branch distribution",
      caption:
        "Cross-references central warehouse stock with remote branch snapshots, computes suggested quantities from pack sizes and min stock, and prints thermal packing guides.",
      kind: "screenshot",
      group: "ERP suite: multi-store logistics & customers (Light)",
      src: "/images/projects/mavepos/05-bodega-repartos-claro.png",
      alt: "MavePOS Warehouse ERP Smart Distribution screen in light mode",
    },
    {
      id: "mavepos-06-bodega-consolidado-claro",
      title: "Warehouse ERP — Consolidated catalog & live homologation",
      caption:
        "Multi-store comparison matrix highlighting price discrepancies, missing/unlinked SKUs, and batch unification (`patch_batch_*.json`).",
      kind: "screenshot",
      group: "ERP suite: multi-store logistics & customers (Light)",
      src: "/images/projects/mavepos/06-bodega-consolidado-claro.png",
      alt: "MavePOS Consolidated Multi-Store Catalog in light mode",
    },
    {
      id: "mavepos-07-clientes-claro",
      title: "Customers ERP — Accounts receivable & credit checkout",
      caption:
        "Chilean RUT Modulo 11 validation, credit limits, credit checkout without distorting expected drawer cash, atomic register payments, and store-credit reversals.",
      kind: "screenshot",
      group: "ERP suite: multi-store logistics & customers (Light)",
      src: "/images/projects/mavepos/07-clientes-claro.png",
      alt: "MavePOS Customers and Accounts Receivable ERP screen in light mode",
    },

    // Group 3: Financial Controls, Analytics & Settings (Light)
    {
      id: "mavepos-08-corte-caja-claro",
      title: "Cash Reconciliation (F4) — CLP denominations & top-up drawer",
      caption:
        "Dual open/close denomination counting, independent sales vs. top-up cash reconciliation, automated withdrawal rules, and bank deposit tracking.",
      kind: "screenshot",
      group: "Financial controls, analytics & settings (Light)",
      src: "/images/projects/mavepos/08-corte-caja-claro.png",
      alt: "MavePOS Cash Register Reconciliation F4 screen in light mode",
    },
    {
      id: "mavepos-09-reportes-claro",
      title: "Reports & Analytics (F5) — KPIs, trends & profitability",
      caption:
        "Period comparisons, revenue/transaction trends, payment method breakdown, Top 10 products, category breakdown, and one-click Excel export.",
      kind: "screenshot",
      group: "Financial controls, analytics & settings (Light)",
      src: "/images/projects/mavepos/09-reportes-claro.png",
      alt: "MavePOS Reports and Analytics F5 dashboard in light mode",
    },
    {
      id: "mavepos-10-configuracion-claro",
      title: "Settings (F6) — Modular panel with unsaved-change guard",
      caption:
        "Card-based settings hub (9 sections in POS / 10 in ERP) with global save and strict navigation guard on dirty state (`isDirty`, ADR-0004).",
      kind: "screenshot",
      group: "Financial controls, analytics & settings (Light)",
      src: "/images/projects/mavepos/10-configuracion-claro.png",
      alt: "MavePOS Settings F6 screen in light mode",
    },

    // Group 4: Dark Mode (Deep Slate)
    {
      id: "mavepos-11-ventas-oscuro",
      title: "Sales (F1) — Dark Mode (Deep Slate)",
      caption:
        "Deep Slate surfaces (#0F172A / #1E293B / #334155) decoupled from the 4 accent palettes with verified WCAG AA contrast.",
      kind: "screenshot",
      group: "Dark mode (Deep Slate palette)",
      src: "/images/projects/mavepos/11-ventas-oscuro.png",
      alt: "MavePOS Sales F1 screen in Deep Slate dark mode",
    },
    {
      id: "mavepos-12-productos-oscuro",
      title: "Products Catalog (F2) — Dark Mode",
      caption:
        "High-density tables with tabular numerals and tonal semantic badges in dark mode.",
      kind: "screenshot",
      group: "Dark mode (Deep Slate palette)",
      src: "/images/projects/mavepos/12-productos-oscuro.png",
      alt: "MavePOS Products F2 catalog in dark mode",
    },
    {
      id: "mavepos-13-bodega-consolidado-oscuro",
      title: "Consolidated Catalog ERP — Dark Mode",
      caption:
        "Multi-store comparison matrix preserving discrepancy readability and homologation controls in low-light environments.",
      kind: "screenshot",
      group: "Dark mode (Deep Slate palette)",
      src: "/images/projects/mavepos/13-bodega-consolidado-oscuro.png",
      alt: "MavePOS Consolidated Catalog ERP in dark mode",
    },
    {
      id: "mavepos-14-reportes-oscuro",
      title: "Reports & Analytics (F5) — Dark Mode",
      caption:
        "Recharts visualizations and KPI cards adapted to the Deep Slate token architecture.",
      kind: "screenshot",
      group: "Dark mode (Deep Slate palette)",
      src: "/images/projects/mavepos/14-reportes-oscuro.png",
      alt: "MavePOS Reports and Analytics F5 dashboard in dark mode",
    },

    // Group 5: Pending Demo Videos
    {
      id: "mavepos-video-general",
      title: "General product walkthrough video",
      caption:
        "[PENDING: Full MavePOS walkthrough covering F1 checkout, F10 search, inventory, cash reconciliation, and analytics.]",
      kind: "video-demo",
      group: "Demo videos (Pending)",
      checklistRef: "MavePOS · General demo video",
    },
    {
      id: "mavepos-video-hardware",
      title: "Hardware integration video",
      caption:
        "[PENDING: Physical demonstration of USB HID barcode scanning, 58/80mm ESC/POS thermal receipt printing, and RJ11 cash drawer trigger.]",
      kind: "video-demo",
      group: "Demo videos (Pending)",
      checklistRef: "MavePOS · Hardware demo video",
    },
    {
      id: "mavepos-video-sync",
      title: "Multi-store synchronization video",
      caption:
        "[PENDING: Demonstration of offline snapshot sync, smart distribution, and transfer reception between warehouse and branch via Google Drive.]",
      kind: "video-demo",
      group: "Demo videos (Pending)",
      checklistRef: "MavePOS · Sync demo video",
    },
  ],
  seo: {
    title: "MavePOS — Technical Case Study",
    description:
      "Deep-dive case study of MavePOS: 100% offline Windows POS & multi-store ERP suite built with Electron, React, TypeScript, and SQLite WAL with 1,078 tests and 50k-product benchmarks.",
  },
};

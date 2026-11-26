# Recopilación de Material — 19 de 32 tareas completadas (59%)

Orden y profundidad definida para los 4 casos de estudio principales:

| Orden | Proyecto | Profundidad | Estado |
| :---: | :--- | :--- | :---: |
| 1 | **MavePOS** | Muy detallada | 6 / 9 *(2 sucursales · ~5.500 SKU · 1.276 tx/mes por tienda)* |
| 2 | **Asistencia UDP** | Detallada | 3 / 6 *(memoria, 10 capturas y 3 diagramas integrados)* |
| 3 | **Aplicación de coleccionables** | Intermedia | 3 / 5 *(11 capturas reales integradas)* |
| — | **Integraciones CDP (oculto temporalmente)** | Intermedia | 3 / 4 *(preservado en `archivedProjects`, inaccesible en rutas públicas)* |

---

## MavePOS (6 / 9)

- [x] **Informe técnico del repositorio** — Extraído desde `C:\Users\crist\Documents\mave\pos` (`PORTAFOLIO_MAVEPOS.md`, `README.md`, `package.json`, 19 ADRs) en `src/content/locales/{es,en}/projects/mavepos.ts`
- [x] **Métricas comerciales reales** — Integradas en ES y EN: operativo en 2 sucursales, ~5.500 productos por tienda y 1.276 transacciones mensuales (363 en la última semana, ~60 diarias) en operación real lunes a sábado por sucursal
- [x] **12–16 capturas** — 14 capturas reales (10 claro + 4 oscuro a 1600×900) copiadas en `public/images/projects/mavepos/` e integradas en la galería
- [ ] **Video de demostración general** — Colocar `.mp4`/`.webm` o URL en `media` (`id: "mavepos-video-general"`) y `links`
- [ ] **Video de hardware** — Colocar `.mp4`/`.webm` o URL en `media` (`id: "mavepos-video-hardware"`) mostrando escáner HID, impresora térmica 58/80 mm y cajón RJ11
- [ ] **Video de sincronización** — Colocar `.mp4`/`.webm` o URL en `media` (`id: "mavepos-video-sync"`) mostrando sync multi-tienda vía Google Drive y recepción en bodega
- [x] **Diagramas de arquitectura** — `arquitectura-general.png` y `flujo-erp-multitienda.png` copiados e integrados en `architecture.diagrams`
- [x] **Resultados de testing y benchmarks** — 1.078 / 1.078 pruebas (97 suites) + benchmarks Antes vs. Después (10k–50k productos) + auditoría WCAG AA 390/390 integrados
- [x] **Sistema de diseño** — Extraído desde `docs/UI_SYSTEM.md` y ADR-0006 (Slate Profundo, 4 acentos, piso 14px, `tabular-nums`, cero layout shift) e integrado en `designSystem`

## Asistencia UDP (3 / 6)

- [ ] **Informe técnico del repositorio** — Ya integrados arquitectura de 5 componentes, 9 colecciones Firestore, 24 casos de uso, integración Canvas API y estudio de factibilidad desde la memoria; pendiente solo si deseas añadir métricas del repositorio de código
- [x] **Documento de memoria** — Copiado a `public/docs/memoria-asistencia-udp.pdf` y enlazado directamente en el caso de estudio
- [x] **8–12 capturas** — 10 capturas curadas extraídas a resolución original del PDF (6 web + 4 móvil) en `public/images/projects/udp-attendance/`
- [ ] **Video de registro de asistencia** — Colocar `.mp4`/`.webm` o URL en `media` (`id: "udp-attendance-video"`)
- [x] **Diagramas técnicos** — 3 diagramas originales extraídos de la memoria (Arquitectura Fig. 4.1, Flujo QR Fig. 4.3 e Integración Canvas Fig. 4.4)
- [ ] **Evidencias de pruebas de carga** — Ya integradas la cifra verificada del CV (*> 50.000 registros y 1.500 simultáneos*), el modelamiento de capacidad (4,2 TPS / 8,4 req/s) y la matriz de 37 casos de prueba; faltan gráficos/evidencias crudas de la corrida de carga

## Integraciones CDP (3 / 4 — caso sanitizado sin pendientes visibles)

- [x] **Descripción de experiencia profesional** — Extraída del CV (Data2o mar.–dic. 2025: 10 entornos e-commerce, equipo de 3, REST APIs/JS/Vue.js/Tracardi/Docker/AWS/Supabase/Postman, demos Chile & LatAm, detección de carritos abandonados; + entorno e-commerce de pruebas DigitalTex ene.–mar. 2024)
- [x] **Diagramas de integración** — 2 diagramas SVG genéricos sanitizados en ES y EN (`diagram-01-arquitectura-cdp-{es,en}.svg` y `diagram-02-carrito-abandonado-{es,en}.svg`) en `public/images/projects/data2o-cdp/`
- [x] **Capturas autorizadas o recreaciones identificadas** — Resuelto como caso arquitectónico sanitizado por confidencialidad (NDA): sin capturas de entornos de clientes; la sección de galería se omite automáticamente cuando `media` está vacío
- [ ] **Evidencia de contribuciones a Tracardi** — *(Opcional)* Si más adelante cuentas con un enlace público de GitHub/documentación de Tracardi, se puede añadir en `links` dentro de `projects/data2o-cdp-integrations.ts`

## Aplicación de coleccionables (3 / 5)

- [x] **Informe técnico del repositorio** — Extraído desde `C:\Users\crist\Documents\album_app` (`album_tracker` / Laminitas Tracker v1.9.0+138 en Flutter, Dart 3.7, Riverpod y 5 cajas Hive)
- [x] **Descripción de funcionalidades diferenciadoras** — Protocolo binario QR interoperable (bitsets 125B + GZIP sin `MTIME` + Base64), motor de reglas Update Set (118 jugadores), variantes doradas/reservas granulares, comparador de texto WhatsApp, control de gastos y respaldo `LAMINITAS_BACKUP_V5`
- [x] **6–10 capturas** — 11 capturas reales renombradas (`01-dashboard-resumen.jpg` a `11-perfil-ajustes.jpg`) en `public/images/projects/collectibles-app/` e integradas en la galería (ES y EN)
- [ ] **Video general** — Colocar `.mp4`/`.webm` o URL en `media` (`id: "collectibles-video-general"`)
- [ ] **Video de interoperabilidad QR** — Colocar `.mp4`/`.webm` o URL en `media` (`id: "collectibles-qr-demo"`)

## MikroTik (0 / 4) *(Infraestructura / Homelab — pendiente de definir si será caso de estudio adicional o sección de laboratorio)*

- [ ] **Descripción técnica**
- [ ] **Fotografías del hardware**
- [ ] **Capturas de contenedores y mediciones**
- [ ] **Diagrama de arquitectura**

## Información personal (4 / 4)

- [x] **CV actualizado** — Copiado a `public/cv/cv.pdf` y descarga activada en `src/content/site.ts` (`CV_Cristobal_Nanjari.pdf`)
- [x] **LinkedIn actualizado** — Integrado en `src/content/site.ts` (`linkedin.com/in/cristóbal-nanjarí-100377109`)
- [x] **GitHub** — Integrado en `src/content/site.ts` (`https://github.com/cristobal-nan`)
- [x] **Presentación profesional en español e inglés** — Integrada en `src/content/site.ts` y `src/content/locales/{es,en}/profile.ts`

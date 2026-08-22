# design-sync — notas del repo

## Qué es este repo

No existía librería: la carpeta sólo tenía el manual de marca (`digiall-marca.html`)
y los tres SVG de logo. La librería `@digiall/ui` se construyó **desde ese manual**
en agosto de 2026. Los SVG y el HTML del manual siguen siendo la fuente de verdad de
la identidad — si cambia el logo, se regeneran los marks, no se editan a mano.

## Cadena de build

`npm run build` corre tres pasos en orden, y los tres importan:

1. `build:marks` — `scripts/gen-marks.mjs` extrae la geometría de los tres SVG a
   `src/components/Logo/marks.ts`. Ese archivo es **generado**; no editarlo.
2. `build:js` — tsup (ESM + .d.ts). El convertidor entra por `./dist/index.js`.
3. `build:css` — Tailwind v4 CLI, `src/styles/theme.css` → `dist/digiall-ui.css`.

Las fuentes se bajan con `node scripts/fetch-fonts.mjs` (Archivo variable + IBM Plex
Mono, subsets latin y latin-ext) y quedan committeadas en `src/styles/fonts/`. No hace
falta re-correrlo salvo que cambie la selección tipográfica; requiere red.

## Gotchas resueltos

- **El safelist de Tailwind no es opcional.** Escanear sólo `src/` compila únicamente
  las clases que nuestros propios componentes usan; todo lo demás (`gap-3`, `max-w-3xl`,
  `grid-cols-*`) queda fuera del CSS y **falla en silencio** tanto en las previews como
  en cualquier diseño que el agente construya. `src/styles/theme.css` lleva un bloque
  `@source inline(...)` que compila ~1,980 utilidades. Si el agente de diseño reporta
  que una clase estándar no hace nada, es ahí donde se agrega.
- **Sin compilador en runtime, no hay valores arbitrarios nuevos.** Los `[...]` que
  funcionan son los que ya usan los componentes. Documentado en `conventions.md`.
- **`title` y `prefix` chocan con los props del DOM.** `CardProps`, `SectionHeaderProps`
  e `InputProps` los ensanchan a `ReactNode`, así que las interfaces hacen `Omit<…>` del
  nombre antes de extender. Sin eso, `tsc` y el dts build fallan con TS2430.
- **Playwright**: en macOS el caché vive en `~/Library/Caches/ms-playwright`, no en
  `~/.cache/ms-playwright`. `npx playwright install chromium` puede salir 0 sin instalar
  nada; usar `./node_modules/.bin/playwright install chromium` desde `.ds-sync/`.
- **`cardMode: "column"`** está puesto para Logo, Table, Card, SectionHeader, Badge e
  Input. En rejilla las celdas quedan tan angostas que la prosa se parte en una palabra
  por línea. Sólo Button se queda en rejilla (son chips).

## Riesgos para el próximo sync

- **Las fuentes vienen de Google Fonts vía red.** Están committeadas, así que un re-sync
  no depende de la red — pero si alguien borra `src/styles/fonts/`, `fetch-fonts.mjs`
  las vuelve a bajar y el hash de los woff2 puede cambiar (Google versiona: hoy Archivo
  v25, IBM Plex Mono v20). Eso mueve el anchor sin que cambie ningún componente.
- **`marks.ts` se regenera en cada build.** Si alguien edita un SVG de logo, cambia el
  render de `Logo` y el grade de sus seis celdas se invalida — correcto, hay que
  revisarlas de nuevo.
- **El safelist es una lista curada, no exhaustiva.** Va a quedarse corto conforme el
  agente de diseño intente utilidades que nadie previó. Al agregar familias, revisar
  que el CSS no crezca sin control (hoy 220 KB).
- **La cobertura es un kit inicial, no la librería completa.** Faltan navbar, sidebar,
  modal, tabs, alert, paginación y estados vacíos. Agregarlos es trabajo normal:
  componente en `src/`, preview en `.design-sync/previews/`, rebuild, capture, grade.

## Known render warns

Ninguno. El último `package-validate.mjs` salió limpio, sin advertencias.

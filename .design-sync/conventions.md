## Cómo construir con DIGIALL

Consultora de TI mexicana. La marca es sobria y tipográfica: un solo acento (plum),
neutros cálidos, Archivo con su eje de ancho como firma, IBM Plex Mono para todo lo
que sea etiqueta o dato.

### Sin provider, sin contexto

Los siete componentes son funciones puras. **No hay ThemeProvider ni contexto que
envolver** — montarlos directamente funciona. Las fuentes (Archivo variable e IBM
Plex Mono) viajan en `fonts/` y las carga `styles.css`; no agregues `<link>` a Google
Fonts ni declares `@font-face` propio.

### El idioma: Tailwind v4 con el tema DIGIALL

La hoja de estilos está **precompilada**: no hay un compilador de Tailwind corriendo
detrás. Disponible está el surtido estándar (layout, spacing 0–32, tipografía, bordes,
sombras, variantes `hover:`/`focus:`/`disabled:` y breakpoints `sm:`/`md:`/`lg:`) más
las familias de marca de abajo.

**No puedes inventar valores arbitrarios.** `bg-[#624159]`, `p-[13px]` o `text-[17px]`
no resuelven a nada. Los pocos entre corchetes que sí existen son los que ya usan los
componentes y aparecen citados en este archivo — `[font-stretch:…]`, `tracking-[-0.03em]`,
`tracking-[0.14em]`, `tracking-[0.12em]`, `text-[0.6875rem]`, `text-[0.625rem]`,
`rounded-[14px]`, `max-w-[66ch]`. Para cualquier otro valor puntual usa `style={{ … }}`
con la variable CSS: `style={{ background: 'var(--color-plum)' }}`.

**Color** — familias `bg-`, `text-`, `border-`, `ring-`, `fill-`, `stroke-`, con `hover:`,
`focus:`, `disabled:` y pasos alfa (`/10`, `/25`, `/55`…):

| Token | Uso |
|---|---|
| `plum` `#624159` | el único acento de marca: acciones primarias, cifras, el logo |
| `plum-950` `#20121C` | fondos oscuros e inversos |
| `plum-100` / `plum-200` | fondos y bordes suaves de estado "interno" |
| `ink` `#272426` | texto principal |
| `muted` `#726F71` | texto secundario, leads, notas, etiquetas |
| `line` `#E8E5E7` / `line-strong` `#D6D3D5` | hairlines y bordes de campo |
| `surface` `#F5F2F4` | fondos de bloque y filas alternas |
| `accent` `#006B68` / `accent-bright` `#48C7C3` | eyebrows y estado OK (`bright` sobre oscuro) |
| `warn` `#9A6B12` / `danger` `#A33A18` | atención y error |

**Tipografía** — `font-display` y `font-sans` son Archivo; `font-mono` es IBM Plex Mono.
El eje de ancho se aplica con `[font-stretch:62%|74%|87%|100%|112%|125%]`:

- Título de página: `font-display text-4xl font-bold [font-stretch:125%] tracking-[-0.03em]`
- Título de sección: `font-display text-xl font-semibold [font-stretch:112%]`
- Eyebrow (siempre sobre el título): `font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-accent`
- Encabezado de tabla y label de campo: `font-mono text-[0.625rem] uppercase tracking-[0.12em] text-muted`
- Cuerpo: por defecto. Los párrafos de intro van `text-muted max-w-[66ch]`.

**Forma** — cards y bloques a `rounded-[14px] border border-line`; controles a `rounded-lg`.
Padding de card: `p-5`.

### Reglas de marca que no se negocian

- El logo se usa con `<Logo />`. Nunca reescribas "DIGIALL" ni el descriptor con texto:
  la geometría está en curvas y el tracking ya está resuelto. No lo estires, inclines,
  contornees ni le pongas sombra.
- `variant`: `stacked` (≥120 px), `horizontal` (≥28 px de alto, para navbar y membrete),
  `wordmark` (≥64 px) y `monogram` (≥16 px, favicon y avatar). Por debajo del mínimo se
  cambia de versión, no se encoge.
- `tone="inverse"` sólo sobre `plum-950`, negro o foto con capa oscura al 55 % mínimo.
- Un solo `Button variant="primary"` por vista; lo demás es `secondary` o `ghost`.
- Los tonos de `Badge` significan estado, no decoran: `accent` = ok, `warn` = atención,
  `danger` = fallo, `plum` = interno, `neutral` = sin dato.

### Dónde está la verdad

`_ds/<carpeta>/styles.css` y sus `@import` son la hoja real — léela antes de inventar
una clase. Cada componente trae su contrato en
`components/general/<Name>/<Name>.d.ts` y su guía de uso en `<Name>.prompt.md`.

### Ejemplo idiomático

```jsx
const { SectionHeader, Card, Badge, Button } = window.DigiallUI;

<div className="mx-auto max-w-5xl p-8">
  <SectionHeader
    level="page"
    eyebrow="Implementación · Odoo 19"
    title="Migración Empire Fitness"
    lead="Consolidamos membresías, punto de venta y facturación CFDI en una sola instancia."
    actions={<Button size="sm">Agregar entregable</Button>}
  />
  <div className="mt-8 grid gap-4 md:grid-cols-3">
    <Card eyebrow="Fase 02" title="Configuración" note="En curso.">
      <p className="text-sm text-muted">Parametrización de Odoo y reglas de inventario.</p>
      <Badge tone="warn" dot className="mt-3">Por vencer</Badge>
    </Card>
  </div>
</div>
```

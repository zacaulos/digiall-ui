import * as React from 'react'
import { MARKS, type Mark } from './marks'

const PLUM = '#624159'
const WHITE = '#FFFFFF'
const BLACK = '#000000'

export type LogoVariant = 'stacked' | 'horizontal' | 'wordmark' | 'monogram'
export type LogoTone = 'plum' | 'inverse' | 'black'

export interface LogoProps extends Omit<React.SVGProps<SVGSVGElement>, 'width'> {
  /** Which lockup to draw. Below 120px wide the stacked lockup loses its descriptor — use `wordmark`. */
  variant?: LogoVariant
  /** `plum` on light backgrounds, `inverse` on plum-950/black/photography, `black` for one-ink reproduction. */
  tone?: LogoTone
  /** Stacked only: adds the hairline rule used on proposal covers and letterhead. */
  withRule?: boolean
  /** Rendered width. Respect the per-variant minimums: stacked 120px, horizontal 28px tall, wordmark 64px, monogram 16px. */
  width?: number | string
  /** Accessible name. Set to `""` and pass `aria-hidden` when the logo is decorative. */
  title?: string
}

const MIN_WIDTH_PX: Record<LogoVariant, number> = {
  stacked: 120,
  horizontal: 133,
  wordmark: 64,
  monogram: 16,
}

function markFor(variant: LogoVariant, withRule: boolean): Mark {
  if (variant === 'stacked' && withRule) return MARKS.stackedRule
  return MARKS[variant]
}

function inkFor(tone: LogoTone): string {
  if (tone === 'inverse') return WHITE
  if (tone === 'black') return BLACK
  return PLUM
}

/**
 * The DIGIALL logo, drawn from the outlined brand geometry — no font dependency at runtime.
 *
 * The descriptor ("Consultores de TI") is justified to the exact wordmark width with its
 * tracking baked into the outlines. Never re-typeset it; never recolor it apart from the
 * wordmark; never stretch, skew, outline, or shadow the mark.
 */
export function Logo({
  variant = 'stacked',
  tone = 'plum',
  withRule = false,
  width,
  title = 'DIGIALL',
  className,
  style,
  ...rest
}: LogoProps) {
  const mark = markFor(variant, withRule)
  const ink = inkFor(tone)
  const resolvedWidth = width ?? MIN_WIDTH_PX[variant] * 2

  if (variant === 'monogram') {
    const background = tone === 'inverse' ? WHITE : ink
    const glyph = tone === 'inverse' ? PLUM : WHITE
    return (
      <svg
        viewBox={mark.viewBox}
        width={resolvedWidth}
        height={resolvedWidth}
        role="img"
        aria-label={title || undefined}
        className={className}
        style={{ display: 'block', ...style }}
        {...rest}
      >
        {title ? <title>{title}</title> : null}
        <rect width={mark.size} height={mark.size} rx={mark.radius} fill={background} />
        {mark.paths.map((p, i) => (
          <path key={i} d={p.d} transform={p.transform ?? undefined} fill={glyph} />
        ))}
      </svg>
    )
  }

  return (
    <svg
      viewBox={mark.viewBox}
      width={resolvedWidth}
      role="img"
      aria-label={title || undefined}
      className={className}
      style={{ display: 'block', height: 'auto', ...style }}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <g fill={ink}>
        {mark.paths.map((p, i) => (
          <path key={i} d={p.d} transform={p.transform ?? undefined} />
        ))}
        {mark.rects?.map((r, i) => (
          <rect key={i} x={r.x} y={r.y} width={r.width} height={r.height} opacity={r.opacity} />
        ))}
      </g>
    </svg>
  )
}

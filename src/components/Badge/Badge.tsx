import * as React from 'react'
import { cx } from '../../lib/cx'

export type BadgeTone = 'neutral' | 'plum' | 'accent' | 'warn' | 'danger'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Maps to status meaning, never to decoration: `accent` = active/ok, `warn` = attention, `danger` = failed. */
  tone?: BadgeTone
  /** Renders a filled dot before the label — for live states in tables and lists. */
  dot?: boolean
}

const TONES: Record<BadgeTone, string> = {
  neutral: 'bg-surface text-muted border-line-strong',
  plum: 'bg-plum-100 text-plum border-plum-200',
  accent: 'bg-accent/10 text-accent border-accent/25',
  warn: 'bg-warn/10 text-warn border-warn/25',
  danger: 'bg-danger/10 text-danger border-danger/25',
}

/** Compact status label in IBM Plex Mono — the same voice as the eyebrows and table headers. */
export function Badge({ tone = 'neutral', dot = false, className, children, ...rest }: BadgeProps) {
  return (
    <span
      className={cx(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5',
        'font-mono text-[0.6875rem] uppercase tracking-[0.12em]',
        TONES[tone],
        className,
      )}
      {...rest}
    >
      {dot ? <span aria-hidden className="size-1.5 rounded-full bg-current" /> : null}
      {children}
    </span>
  )
}

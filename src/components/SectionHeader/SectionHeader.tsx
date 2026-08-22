import * as React from 'react'
import { cx } from '../../lib/cx'

export type SectionHeaderLevel = 'page' | 'section'

export interface SectionHeaderProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  /** Mono uppercase kicker — numbered (`01 · Lockup principal`) in documents, plain elsewhere. */
  eyebrow?: React.ReactNode
  /** The heading itself. Archivo expanded 700 at `page`, semi-expanded 600 at `section`. */
  title: React.ReactNode
  /** One-paragraph intro, capped at 66ch so the measure stays readable. */
  lead?: React.ReactNode
  /** `page` is the h1 at the top of a view; `section` is the h2 that opens a block. */
  level?: SectionHeaderLevel
  /** Actions aligned to the heading's right edge — typically a `Button`. */
  actions?: React.ReactNode
}

/**
 * The typographic opener that gives every DIGIALL page its voice: mono eyebrow,
 * Archivo expanded heading with negative tracking, muted lead at a 66ch measure.
 */
export function SectionHeader({
  eyebrow,
  title,
  lead,
  level = 'section',
  actions,
  className,
  ...rest
}: SectionHeaderProps) {
  const Heading = level === 'page' ? 'h1' : 'h2'
  return (
    <header className={cx('flex items-start justify-between gap-6', className)} {...rest}>
      <div className="min-w-0">
        {eyebrow ? (
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-accent">
            {eyebrow}
          </p>
        ) : null}
        <Heading
          className={cx(
            'font-display',
            level === 'page'
              ? 'mt-2 text-4xl font-bold [font-stretch:125%] tracking-[-0.03em] leading-none'
              : 'mt-1.5 text-xl font-semibold [font-stretch:112%] tracking-[-0.01em]',
          )}
        >
          {title}
        </Heading>
        {lead ? <p className="mt-3 max-w-[66ch] text-[0.9375rem] text-muted">{lead}</p> : null}
      </div>
      {actions ? <div className="flex shrink-0 items-center gap-2">{actions}</div> : null}
    </header>
  )
}

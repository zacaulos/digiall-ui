import * as React from 'react'
import { cx } from '../../lib/cx'

export type CardTone = 'light' | 'surface' | 'dark'

export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** `dark` flips the card onto plum-950 and switches the eyebrow to accent-bright — for hero and inverse blocks. */
  tone?: CardTone
  /** Mono uppercase kicker above the title, e.g. `01 · Lockup principal`. */
  eyebrow?: React.ReactNode
  /** Card heading in Archivo semi-expanded. */
  title?: React.ReactNode
  /** Small muted caption rendered under the body — the manual's `.note` slot. */
  note?: React.ReactNode
  /** Removes the inner padding so the body can bleed to the border (media, tables). */
  flush?: boolean
}

const TONES: Record<CardTone, string> = {
  light: 'bg-white border-line text-ink',
  surface: 'bg-surface border-line text-ink',
  dark: 'bg-plum-950 border-plum-950 text-white',
}

const EYEBROW_TONES: Record<CardTone, string> = {
  light: 'text-accent',
  surface: 'text-accent',
  dark: 'text-accent-bright',
}

const NOTE_TONES: Record<CardTone, string> = {
  light: 'text-muted',
  surface: 'text-muted',
  dark: 'text-line-strong',
}

/** The DIGIALL container: 1px border, 14px radius, generous padding. The whole system is built out of these. */
export function Card({
  tone = 'light',
  eyebrow,
  title,
  note,
  flush = false,
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={cx('overflow-hidden rounded-[14px] border', TONES[tone], !flush && 'p-5', className)}
      {...rest}
    >
      {eyebrow ? (
        <p
          className={cx(
            'font-mono text-[0.6875rem] uppercase tracking-[0.14em]',
            EYEBROW_TONES[tone],
            flush && 'px-5 pt-5',
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h3
          className={cx(
            'mt-1.5 font-display text-xl font-semibold [font-stretch:112%] tracking-[-0.01em]',
            flush && 'px-5',
          )}
        >
          {title}
        </h3>
      ) : null}
      {children ? <div className={cx(Boolean(eyebrow || title) && 'mt-3')}>{children}</div> : null}
      {note ? (
        <p className={cx('mt-3.5 text-[0.8125rem]', NOTE_TONES[tone], flush && 'px-5 pb-5')}>
          {note}
        </p>
      ) : null}
    </div>
  )
}

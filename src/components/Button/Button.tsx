import * as React from 'react'
import { cx } from '../../lib/cx'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** `primary` is plum-filled — one per view. `secondary` outlines, `ghost` is for toolbars, `danger` for destructive confirms. */
  variant?: ButtonVariant
  size?: ButtonSize
  /** Stretches to the container width. Use in forms and mobile sheets. */
  fullWidth?: boolean
  /** Swaps the label for a spinner and blocks interaction. */
  loading?: boolean
  /** Icon rendered before the label, sized to the label's cap height. */
  leadingIcon?: React.ReactNode
}

const VARIANTS: Record<ButtonVariant, string> = {
  primary: 'bg-plum text-white hover:bg-plum-950 focus-visible:outline-plum',
  secondary:
    'bg-white text-plum border border-plum hover:bg-plum-100 focus-visible:outline-plum',
  ghost: 'bg-transparent text-ink hover:bg-surface focus-visible:outline-plum',
  danger: 'bg-danger text-white hover:brightness-90 focus-visible:outline-danger',
}

const SIZES: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-xs gap-1.5',
  md: 'h-10 px-4 text-sm gap-2',
  lg: 'h-12 px-6 text-base gap-2.5',
}

/**
 * The DIGIALL action button — Archivo semi-expanded, 8px radius, plum as the single accent.
 *
 * Exactly one `primary` per view; everything else is `secondary` or `ghost`.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  leadingIcon,
  disabled,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cx(
        'inline-flex items-center justify-center rounded-lg font-display font-semibold',
        '[font-stretch:112%] tracking-[-0.01em] whitespace-nowrap',
        'transition-colors duration-150',
        'focus-visible:outline-2 focus-visible:outline-offset-2',
        'disabled:opacity-40 disabled:pointer-events-none',
        VARIANTS[variant],
        SIZES[size],
        fullWidth && 'w-full',
        className,
      )}
      {...rest}
    >
      {loading ? (
        <span
          aria-hidden
          className="size-4 animate-spin rounded-full border-2 border-current border-r-transparent"
        />
      ) : (
        leadingIcon
      )}
      {children}
    </button>
  )
}

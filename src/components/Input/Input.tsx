import * as React from 'react'
import { cx } from '../../lib/cx'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  /** Always label an input. Rendered in mono uppercase, matching the table headers. */
  label?: React.ReactNode
  /** Helper text under the field. Replaced by `error` when that is set. */
  hint?: React.ReactNode
  /** Error message. Setting it turns the border danger and wires `aria-invalid`. */
  error?: React.ReactNode
  /** Non-interactive affix inside the field — a currency symbol, a unit, a search glyph. */
  prefix?: React.ReactNode
  /** Stretches the field to the container width. */
  fullWidth?: boolean
}

/** Single-line text field. Label, hint, and error are wired to the input for screen readers. */
export function Input({
  label,
  hint,
  error,
  prefix,
  fullWidth = false,
  className,
  id,
  disabled,
  ...rest
}: InputProps) {
  const reactId = React.useId()
  const inputId = id ?? reactId
  const messageId = `${inputId}-message`
  const message = error ?? hint

  return (
    <div className={cx('flex flex-col gap-1.5', fullWidth && 'w-full', className)}>
      {label ? (
        <label
          htmlFor={inputId}
          className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-muted"
        >
          {label}
        </label>
      ) : null}
      <div
        className={cx(
          'flex items-center gap-2 rounded-lg border bg-white px-3',
          'focus-within:outline-2 focus-within:outline-offset-[-1px]',
          error
            ? 'border-danger focus-within:outline-danger'
            : 'border-line-strong focus-within:outline-plum',
          disabled && 'opacity-50',
        )}
      >
        {prefix ? <span className="shrink-0 text-sm text-muted">{prefix}</span> : null}
        <input
          id={inputId}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={message ? messageId : undefined}
          className={cx(
            'h-10 w-full min-w-0 bg-transparent text-sm text-ink',
            'placeholder:text-muted focus:outline-none disabled:cursor-not-allowed',
          )}
          {...rest}
        />
      </div>
      {message ? (
        <p id={messageId} className={cx('text-xs', error ? 'text-danger' : 'text-muted')}>
          {message}
        </p>
      ) : null}
    </div>
  )
}

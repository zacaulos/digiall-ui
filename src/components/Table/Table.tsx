import * as React from 'react'
import { cx } from '../../lib/cx'

export interface TableColumn<Row> {
  /** Stable key — also the default cell accessor when `render` is omitted. */
  key: keyof Row & string
  /** Header label. Rendered mono uppercase at 10px with 0.12em tracking. */
  header: React.ReactNode
  /** Cell renderer. Omit to print `String(row[key])`. */
  render?: (row: Row) => React.ReactNode
  /** Right-align numeric columns; `mono` also switches the cell to IBM Plex Mono. */
  align?: 'left' | 'right'
  /** Sets the cell in mono — for ids, SKUs, amounts, versions. */
  mono?: boolean
}

export interface TableProps<Row> extends Omit<React.TableHTMLAttributes<HTMLTableElement>, 'children'> {
  columns: TableColumn<Row>[]
  rows: Row[]
  /** Key extractor. Defaults to the row index. */
  rowKey?: (row: Row, index: number) => React.Key
  /** Shown in place of the body when `rows` is empty. */
  emptyState?: React.ReactNode
}

/** Data table in the manual's own idiom: mono uppercase headers, hairline rules, no vertical borders. */
export function Table<Row>({
  columns,
  rows,
  rowKey,
  emptyState = 'Sin registros',
  className,
  ...rest
}: TableProps<Row>) {
  return (
    <table className={cx('w-full border-collapse text-sm', className)} {...rest}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={col.key}
              scope="col"
              className={cx(
                'pr-3 pb-2.5 font-mono text-[0.625rem] font-normal uppercase tracking-[0.12em] text-muted',
                col.align === 'right' ? 'pl-4 text-right' : 'text-left',
              )}
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.length === 0 ? (
          <tr>
            <td colSpan={columns.length} className="border-t border-line py-6 text-center text-muted">
              {emptyState}
            </td>
          </tr>
        ) : (
          rows.map((row, index) => (
            <tr key={rowKey ? rowKey(row, index) : index}>
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={cx(
                    'border-t border-line py-2.5 pr-3 align-top',
                    col.align === 'right' && 'pl-4 text-right tabular-nums',
                    col.mono && 'font-mono text-[0.8125rem]',
                  )}
                >
                  {col.render ? col.render(row) : String(row[col.key] ?? '')}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  )
}

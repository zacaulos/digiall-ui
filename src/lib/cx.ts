/** Joins class names, dropping falsy entries. No merge logic — later classes win by CSS order. */
export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ')
}

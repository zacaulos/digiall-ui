// Ships the typography with the package. theme.css deliberately does not import
// fonts.css — consumers opt into the webfonts — so the stylesheet and the .woff2
// files have to reach dist/ on their own or the brand faces silently fall back.
// Regenerate with: node scripts/copy-fonts.mjs
import { cpSync, mkdirSync } from 'node:fs'

const from = (f) => new URL(`../src/styles/${f}`, import.meta.url)
const to = (f) => new URL(`../dist/${f}`, import.meta.url)

mkdirSync(to('fonts'), { recursive: true })
cpSync(from('fonts'), to('fonts'), { recursive: true })
cpSync(from('fonts.css'), to('fonts.css'))

console.log('copied fonts.css + fonts/ to dist/')

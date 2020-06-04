import { v4 } from 'uuid'
import marked from 'marked'
import DomPurify from 'dompurify'

export function renderMD(content: string) {
  const html = marked(content, {
    gfm: true,
    breaks: true,
  })

  return DomPurify.sanitize(html)
}

export const uuid = v4

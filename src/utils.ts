import marked from 'marked'
import DomPurify from 'dompurify'

export function renderMD(content: string) {
  const html = marked(content, {
    gfm: true,
    breaks: true,
  })

  return DomPurify.sanitize(html)
}

export function dateStr(date: Date = new Date()) {
  const p = (s: string | number) => s.toString().padStart(2, '0')

  const dd = p(date.getDay())
  const MM = p(date.getMonth() + 1)
  const YYYY = p(date.getFullYear())

  const HH = p(date.getHours())
  const mm = p(date.getMinutes())
  const ss = p(date.getSeconds())

  return `${YYYY}-${MM}-${dd} ${HH}:${mm}:${ss}`
}

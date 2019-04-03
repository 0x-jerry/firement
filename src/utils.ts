import * as marked from 'marked'

export function renderMD(content: string) {
  return marked(content, {
    sanitize: true,
    gfm: true,
    breaks: true,
  })
}

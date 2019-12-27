import marked from 'marked'

export function renderMD(content: string) {
  return marked(content, {
    gfm: true,
    breaks: true
  })
}

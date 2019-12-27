import marked from 'marked'
import DomPurify from 'dompurify'

export function renderMD(content: string) {
  const html = marked(content, {
    gfm: true,
    breaks: true
  })

  return DomPurify.sanitize(html)
}

export function uuid() {
  let uuid = ''

  for (let i = 0; i < 32; i += 1) {
    switch (i) {
      case 8:
      case 20:
        uuid += '-'
        uuid += ((Math.random() * 16) | 0).toString(16)
        break
      case 12:
        uuid += '-'
        uuid += ((Math.random() * 16) | 0).toString(16)
        break
      case 16:
        uuid += '-'
        uuid += ((Math.random() * 4) | 8).toString(16)
        break
      default:
        uuid += ((Math.random() * 16) | 0).toString(16)
    }
  }

  return uuid
}

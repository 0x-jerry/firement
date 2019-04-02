import * as marked from 'marked'
import { getArticleComment, init, pushComment } from './src/firement'
import { login, LoginTypes, logout } from './src/login'
import { addCommentByTpl } from './src/components/template'

const loggedInfo = {
  logged: false,
  user: null as IUser,
}

// Initialize Firebase
const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.PROJECT_ID + '.firebaseapp.com',
  databaseURL: `https://${process.env.PROJECT_ID}.firebaseio.com`,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.PROJECT_ID + '.appspot.com',
}

init(config)

getArticleComment('test')
  .then((data) => {
    interface ISortComment {
      key: string
      comment: IComment
    }

    const list: ISortComment[] = []

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const element = data[key]
        list.push({ key, comment: element })
      }
    }

    list
      .sort((a, b) => (a.comment.timestamp < b.comment.timestamp ? 1 : -1))
      .forEach((e) => addCommentDom(e.comment, e.key))
  })
  .catch((e) => {
    console.log(e)
  })

const content = document.getElementsByClassName('firement-content')[0] as HTMLInputElement

content.onkeyup = (e) => {
  const element = e.target as HTMLInputElement
  const markdown = marked(element.value)
  document.getElementsByClassName('firement-preview')[0].innerHTML = markdown
}

const loginButtons = document.getElementsByClassName('firement-login')

for (const button of loginButtons) {
  (button as HTMLDivElement).onclick = () => {
    const id = button.getAttribute('data-id') as LoginTypes
    login(id)
      .then((data) => {
        loggedInfo.logged = true
        loggedInfo.user = data
      })
      .catch((e) => {
        console.log(e)
      })
  }
}

document.getElementById('commit').onsubmit = (ev) => {
  let elements = Array.from(ev.target as HTMLFormElement) as HTMLInputElement[]
  elements = elements.filter((e) => !!e.name)
  const data = {
    content: '',
    email: '',
    name: '',
  }

  elements.forEach((e) => (data[e.name] = e.value))

  if (data.name.length) {
    loggedInfo.user.name = data.name
  }

  if (data.email.length) {
    loggedInfo.user.email = data.email
  }

  if (loggedInfo.logged) {
    pushComment('test', loggedInfo.user, data.content)
      .then(() => {
        elements.forEach((e) => (e.value = ''))
        alert('评论成功')
        console.log('comment ok', loggedInfo)
      })
      .catch((err) => {
        console.warn('comment fail', err)
      })
  } else {
    console.log('please sign in first')
  }

  ev.preventDefault()
}

function addCommentDom(comment: IComment, id: string) {
  const $firement = document.getElementById('firement')
  addCommentByTpl($firement, id, comment)
}

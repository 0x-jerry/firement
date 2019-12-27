import firebase from 'firebase'
import { IComment, IUser, IInitOptions, IBlog } from './typedef'

function init(config: IInitOptions) {
  firebase.initializeApp(config)
}

function uid(): string {
  return Math.random()
    .toString()
    .substr(2)
}

async function getArticleComment(title: string): Promise<IBlog> {
  const data = await firebase
    .database()
    .ref(`/${title}`)
    .once('value')
  return data.val()
}

async function updateCommentInfo(title: string, uid: string, info: object) {
  const keys = Object.keys(info)

  for await (const key of keys) {
    firebase
      .database()
      .ref(`/${title}/${uid}/${key}`)
      .set(info[key])
  }
}

function pushComment(title: string, user: IUser, content: string) {
  const comment: IComment = {
    ...user,
    id: uid(),
    likes: {},
    content,
    timestamp: new Date().getTime().toString()
  }

  return firebase
    .database()
    .ref(`/${title}/${comment.id}/`)
    .set(comment)
}

async function addLike(title: string, id: string, uid: string) {
  if (!uid) {
    throw new Error('please login')
  }

  const data = await firebase
    .database()
    .ref(`/${title}/${id}`)
    .once('value')

  const comment: IComment = data.val()
  comment.likes = comment.likes || {}

  if (comment.likes[uid]) {
    throw new Error('liked')
  }

  comment.likes[uid] = true

  return updateCommentInfo(title, id, {
    likes: comment.likes
  })
}

export { init, getArticleComment, pushComment, updateCommentInfo, addLike }

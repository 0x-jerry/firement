import firebase from 'firebase'
import { IComment, IUser, IInitOptions, IBlog, ObjectAny } from './typedef'
import { uuid } from './utils'

export enum ErrorType {
  NeedLogin
}

export class CustomError extends Error {
  type: ErrorType
  constructor(msg: string, type: ErrorType) {
    super(msg)
    this.type = type
  }
}

export function init(config: IInitOptions) {
  firebase.initializeApp(config)
}

export async function getArticleComment(title: string): Promise<IBlog> {
  const data = await firebase
    .database()
    .ref(`/${title}`)
    .once('value')
  const result = await data.val()

  console.log(result)
  return result
}

export async function updateCommentInfo(title: string, uid: string, info: ObjectAny) {
  const keys = Object.keys(info)

  for await (const key of keys) {
    firebase
      .database()
      .ref(`/${title}/${uid}/${key}`)
      .set(info[key])
  }
}

export function pushComment(title: string, user: IUser, content: string) {
  const comment: IComment = {
    ...user,
    id: uuid(),
    likes: {},
    content,
    timestamp: new Date().getTime().toString()
  }

  return firebase
    .database()
    .ref(`/${title}/${comment.id}/`)
    .set(comment)
}

export async function addLike(title: string, id: string, uid: string) {
  if (!uid) {
    throw new CustomError('Please login', ErrorType.NeedLogin)
  }

  const data = await firebase
    .database()
    .ref(`/${title}/${id}`)
    .once('value')

  const comment: IComment = data.val()
  comment.likes = comment.likes || {}

  if (comment.likes[uid]) {
    return
  }

  comment.likes[uid] = true

  updateCommentInfo(title, id, {
    likes: comment.likes
  })
}

export async function removeLike(title: string, id: string, uid: string) {
  if (!uid) {
    throw new CustomError('Please login', ErrorType.NeedLogin)
  }

  const data = await firebase
    .database()
    .ref(`/${title}/${id}`)
    .once('value')

  const comment: IComment = data.val()
  comment.likes = comment.likes || {}

  if (comment.likes[uid]) {
    return
  }

  comment.likes[uid] = false

  return updateCommentInfo(title, id, {
    likes: comment.likes
  })
}

import * as firebase from 'firebase'

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

function pushComment(title: string, user: IUser, content: string) {
  const comment = user as IComment

  comment.content = content
  comment.timestamp = new Date().getTime().toString()

  return firebase
    .database()
    .ref(`/${title}/${uid()}/`)
    .set(comment)
}

async function addLike(title: string, uid: string) {
  const data = await firebase
    .database()
    .ref(`/${title}/${uid}`)
    .once('value')

  const comment: IComment = data.val()
  const likes = (comment.likes || 0) + 1

  return firebase
    .database()
    .ref(`/${title}/${uid}/likes`)
    .set(likes)
}

export { init, getArticleComment, pushComment }

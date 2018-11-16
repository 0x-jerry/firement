import * as firebase from 'firebase';

function init(config) {
  firebase.initializeApp(config);
}

function uid(): string {
  return Math.random()
    .toString()
    .substr(2);
}

async function getArticleComment(title: string): Promise<IComment> {
  const data = await firebase
    .database()
    .ref(`/${title}`)
    .once('value');
  return data.val();
}

function pushComment(title: string, user: IUser, content: string) {
  const comment = user as IComment;

  comment.content = content;
  comment.timestamp = new Date().getTime().toString();

  return firebase
    .database()
    .ref(`/${title}/${uid()}/`)
    .set(comment);
}

export { init, getArticleComment, pushComment };

import * as firebase from 'firebase';

export enum LoginTypes {
  Google = 'Google',
  GitHub = 'GitHub',
}

async function login(type: LoginTypes = LoginTypes.Google): Promise<IUser> {
  let provider: firebase.auth.AuthProvider = null;

  switch (type) {
    case LoginTypes.Google:
      provider = new firebase.auth.GoogleAuthProvider();
      break;
    case LoginTypes.GitHub:
      provider = new firebase.auth.GithubAuthProvider();
      break;
    default:
      provider = new firebase.auth.GoogleAuthProvider();
      break;
  }

  const result = await firebase.auth().signInWithPopup(provider);

  return {
    avatar: result.user.photoURL,
    email: result.user.email,
    name: result.user.displayName,
    uid: result.user.uid,
  };
}

export { login };

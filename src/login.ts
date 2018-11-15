import * as firebase from 'firebase';

enum LoginTypes {
  Google = 'Google',
  GitHub = 'GitHub',
}

function login(type: LoginTypes = LoginTypes.Google) {
  switch (type) {
    case LoginTypes.Google:
      return loginWithGoogle();

    default:
      return loginWithGoogle();
  }
}

async function loginWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();

  const result = await firebase.auth().signInWithPopup(provider);

  return {
    email: result.user.email,
    uid: result.user.uid,
    avatar: result.user.photoURL,
  };
}

export { login };

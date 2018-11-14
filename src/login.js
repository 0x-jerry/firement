import firebase from 'firebase';

function login(type = 'google') {
  switch (type) {
    case 'google':
      return loginWithGoogle();

    default:
      return loginWithGoogle();
  }
}

function loginWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();

  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      return {
        email: result.user.email,
        uid: result.user.uid,
        avatar: result.user.photoURL,
        // user: result.user,
        // token: result.credential.accessToken,
      };
    });
}

export { login };

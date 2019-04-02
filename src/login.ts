import * as firebase from 'firebase'

export enum LoginTypes {
  Google = 'Google',
  GitHub = 'GitHub',
  Anonymously = 'Anonymously',
}

async function login(type: LoginTypes = LoginTypes.Anonymously): Promise<IUser> {
  let provider: firebase.auth.AuthProvider = null

  switch (type) {
    case LoginTypes.Google:
      provider = new firebase.auth.GoogleAuthProvider()
      break
    case LoginTypes.GitHub:
      provider = new firebase.auth.GithubAuthProvider()
      break
    default:
      provider = null
      break
  }

  const result = provider ? await firebase.auth().signInWithPopup(provider) : await firebase.auth().signInAnonymously()

  return {
    avatar: result.user.photoURL,
    email: result.user.email,
    name: result.user.displayName,
    uid: result.user.uid,
  }
}

function logout() {
  return firebase.auth().signOut()
}

export { login, logout }

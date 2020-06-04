import firebase from 'firebase'
import { IUser } from './typedef'

export enum LoginTypes {
  Google = 'Google',
  GitHub = 'GitHub',
  Anonymously = 'Anonymously',
}

async function login(type: LoginTypes = LoginTypes.Anonymously): Promise<IUser> {
  let provider: firebase.auth.AuthProvider | null = null

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

  const profile: any = result.additionalUserInfo!.profile

  return {
    avatar: result.user!.photoURL!,
    email: result.user!.email!,
    name: result.user!.displayName!,
    id: result.user!.uid,
    homePage: type === 'GitHub' ? profile.html_url : null,
  }
}

function logout() {
  return firebase.auth().signOut()
}

export { login, logout }

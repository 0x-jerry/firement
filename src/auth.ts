import firebase from 'firebase/app'
import { IUser } from './typedef'

export enum LoginTypes {
  Google = 'Google',
  GitHub = 'GitHub',
  Anonymously = 'Anonymously',
}

const cacheKey = 'blog.comment.login.user'

async function login(type: LoginTypes = LoginTypes.Anonymously, useCache = false): Promise<IUser | null> {
  if (useCache) {
    const userStr = localStorage.getItem(cacheKey)

    return userStr ? JSON.parse(userStr) : null
  }

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

  const user = {
    avatar: result.user!.photoURL!,
    email: result.user!.email!,
    name: result.user!.displayName!,
    id: result.user!.uid,
    homePage: type === 'GitHub' ? profile.html_url : null,
  }

  localStorage.setItem(cacheKey, JSON.stringify(user))

  return user
}

function logout() {
  return firebase.auth().signOut()
}

export { login, logout }

export interface IUser {
  id: string
  name: string
  avatar: string
  email?: string
  homePage?: string
}

export interface IComment {
  id: string
  user: IUser
  likes: {
    [uid: string]: boolean
  }
  content: string
  timestamp: string
}

export interface IBlog {
  [title: string]: IComment[]
}

export interface IInitOptions {
  apiKey: string
  authDomain: string
  projectId: string
}

export interface ObjectAny {
  [key: string]: any
}

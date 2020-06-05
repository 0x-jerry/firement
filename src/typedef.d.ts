export interface IUser {
  id: string
  name: string
  avatar: string
  email?: string
  homePage?: string
}

export interface IComment {
  id?: string
  user: IUser
  likes: {
    [uid: string]: boolean
  }
  content: string
  timestamp: number
}

export interface IBlog {
  [title: string]: IComment[]
}

export interface IDBConfig {
  apiKey: string
  authDomain: string
  databaseURL: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
}

export interface IInitOptions {
  db: IDBConfig
  article: string
}

export interface ObjectAny {
  [key: string]: any
}

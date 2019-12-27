import { IConfigs } from './configs'

export interface IUser {
  uid: string
  name: string
  avatar: string
  email?: string
  homePage?: string
}

export interface IComment extends IUser {
  id: string
  likes: {
    [key: string]: boolean
  }
  content: string
  timestamp: string
}

export interface IBlog {
  [title: string]: IComment
}

export interface IInitOptions extends IConfigs {
  apiKey: string
  authDomain: string
  databaseURL: string
  messagingSenderId: string
  projectId: string
  storageBucket: string
}

export interface ObjectAny {
  [key: string]: any
}

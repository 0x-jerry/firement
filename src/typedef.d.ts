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

export interface IInitOptions {
  apiKey: string
  authDomain: string
  projectId: string
}

export interface ObjectAny {
  [key: string]: any
}

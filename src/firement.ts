import firebase from 'firebase'
import { IComment, IUser, IInitOptions } from './typedef'

export enum ErrorType {
  NeedLogin,
}

export class CustomError extends Error {
  type: ErrorType
  constructor(msg: string, type: ErrorType) {
    super(msg)
    this.type = type
  }
}

export enum DBConst {
  Comments = 'comments',
  Likes = 'Likes',
}

class BlogDB {
  db!: firebase.firestore.Firestore

  user: IUser | null

  private _article: string

  get comments() {
    return this.db.collection(this._article)
  }

  constructor() {
    this._article = ''
    this.user = null
  }

  init(config: IInitOptions) {
    this._article = config.article
    firebase.initializeApp(config.db)
    this.db = firebase.firestore()
  }

  async addComment(comment: IComment) {
    await this.comments.add(comment)
  }

  async getAllComments() {
    const data = await this.comments.orderBy('timestamp', 'desc').get()

    return data.docs.map((d) => ({
      ...d.data(),
      id: d.id,
    }))
  }

  async getComment(id: string) {
    const data = await this.comments.doc(id).get()

    return {
      ...data.data(),
      id: data.id,
    }
  }

  async updateComment(id: string, comment: IComment) {
    await this.comments.doc(id).update(comment)
  }

  async updateCommentLike(id: string, like: boolean) {
    await this.comments.doc(id).update({
      likes: {
        [this.user!.id]: like,
      },
    })
  }
}

export const db = new BlogDB()

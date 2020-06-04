import firebase from 'firebase'
import { IComment, IUser, IInitOptions } from './typedef'
import { configs } from './configs'

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
    const data = await this.comments.get()

    console.log(
      'get comments',
      data.docs.map((d) => d.data())
    )
  }

  async getComment(id: string) {
    const data = await this.comments.where('id', '==', id).get()

    console.log('get comment', data.docs)
    return data.docs[0]
  }

  async likeComment(id: string) {
    if (!this.user) {
      throw new CustomError('Please login', ErrorType.NeedLogin)
    }

    const comment = await this.getComment(id)

    console.log('like', comment.data())
    if (!comment) {
      return
    }
  }

  async dislikeComment(commentId: string) {
    if (!this.user) {
      throw new CustomError('Please login', ErrorType.NeedLogin)
    }

    const comment = await this.getComment(commentId)

    console.log('like', comment.data())
    if (!comment) {
      return
    }
  }
}

export const db = new BlogDB()

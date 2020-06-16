import firebase from 'firebase/app'
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

const pageSize = 10

class BlogDB {
  db!: firebase.firestore.Firestore

  user: IUser | null

  latestTag = 0

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

  resetLatestTag() {
    this.latestTag = 0
  }

  async addComment(comment: IComment) {
    await this.comments.add(comment)
  }

  async getAllComments() {
    const data = await this.comments.orderBy('timestamp', 'desc').get()

    return data.docs.map((d) => ({
      ...d.data(),
      id: d.id,
    })) as IComment[]
  }

  async getComment(id: string): Promise<IComment> {
    const data = await this.comments.doc(id).get()

    return {
      ...data.data(),
      id: data.id,
    } as IComment
  }

  async getMoreComments() {
    const sortComment = this.comments.orderBy('timestamp', 'desc').limit(pageSize)

    const data = await (this.latestTag ? sortComment.startAfter(this.latestTag) : sortComment).get()

    const docs = data.docs.map((d) => ({
      ...d.data(),
      id: d.id,
    })) as IComment[]

    this.latestTag = docs.length && docs[docs.length - 1].timestamp

    return docs
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

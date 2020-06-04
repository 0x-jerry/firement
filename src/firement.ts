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

export enum FirementStoreConst {
  Comments = 'comments',
  Likes = 'Likes',
}

/**
 * Blog -1-n-> articles -1-n-> comments -1-n->likes
 */
class FirementStore {
  db!: firebase.firestore.Firestore

  user: IUser | null

  private _article: string

  get currentArticle() {
    return this.db.collection(configs.storeCollection).doc(this._article)
  }

  get currentComments() {
    return this.currentArticle.collection(FirementStoreConst.Comments)
  }

  constructor() {
    this._article = ''
    this.user = null
  }

  init(config: IInitOptions) {
    firebase.initializeApp(config)
    this.db = firebase.firestore()
    this._article = ''
  }

  changeArticle(title: string) {
    this._article = title
  }

  async addComment(comment: IComment) {
    const { likes, ...others } = comment

    await this.currentComments.add(others)
  }

  async getAllComments() {
    const data = await this.currentComments.get()

    console.log(data.docs.map((d) => d.data()))
  }

  async getComment(id: string) {
    const data = await this.currentComments.where('id', '==', id).get()

    return data.docs[0]
  }

  async likeComment(commentId: string) {
    if (!this.user) {
      throw new CustomError('Please login', ErrorType.NeedLogin)
    }

    const comment = await this.getComment(commentId)

    if (!comment) {
      return
    }

    const likedDoc = this.currentComments.doc(comment.id).collection(FirementStoreConst.Likes).doc(this.user.uid)

    const liked: { liked: boolean } = (await likedDoc.get()).data() as any

    if (!liked.liked) {
      // update liked
    }

    likedDoc.set({ liked: true })
  }

  async dislikeComment(commentId: string) {
    if (!this.user) {
      throw new CustomError('Please login', ErrorType.NeedLogin)
    }

    const comment = await this.getComment(commentId)

    if (!comment) {
      return
    }

    this.currentComments.doc(comment.id).collection(FirementStoreConst.Likes).doc(this.user.uid).set({ liked: false })
  }
}

export const firementStore = new FirementStore()

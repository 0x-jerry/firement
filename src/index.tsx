import { h, render, Component } from 'preact'
import { db } from './firement'
import CommentForm from './components/CommentForm'
import Comments from './components/Comments'
import { LoginTypes, login } from './auth'
import { IUser, IComment, IInitOptions } from './typedef'
import { avatar } from './avatar'

export interface IAppState {
  user: IUser
  logged: boolean
  comments: IComment[]
}

class App extends Component<{}, IAppState> {
  constructor() {
    super()
    this.state = {
      comments: [],
      logged: false,
      user: {
        id: '',
        name: '匿名',
        avatar,
      },
    }
  }

  componentWillMount() {
    this.refreshComments()
  }

  refreshComments = async () => {
    const comments = await this.getComments()
    this.setState({
      comments,
    })
  }

  handleLogin = async (type: LoginTypes) => {
    try {
      let user = await login(type)
      if (type === LoginTypes.Anonymously) {
        user.avatar = avatar
        user.name = '匿名'
        user.email = void 0
      }
      Object.keys(user).forEach((key) => {
        // @ts-ignore
        if (user[key] === undefined) {
          // @ts-ignore
          user[key] = null
        }
      })

      db.user = user
      this.setState({
        user,
        logged: true,
      })
    } catch (error) {
      alert('登录失败: ' + error)
    }
  }

  handleLikes = async (comment: IComment, liked: boolean) => {
    if (!this.state.logged) {
      return
    }

    try {
      await db.updateCommentLike(comment.id!, liked)
      const data = await db.getComment(comment.id!)
      const idx = this.state.comments.findIndex((c) => c.id === data.id)

      this.setState({
        [`comments[${idx}]`]: data,
      })
      console.log(idx, data)
    } catch (error) {
      alert('评论失败:' + error)
    }
  }

  async getComments() {
    const list: IComment[] = (await db.getAllComments()) as any
    return list
  }

  render(p: {}, s: IAppState) {
    const { user, logged, comments } = s

    return (
      <div class="firement-root">
        <CommentForm
          refreshComments={this.refreshComments}
          user={user}
          logged={logged}
          handleLogin={this.handleLogin}
        />
        <Comments user={user} comments={comments} handleLikes={this.handleLikes} />
      </div>
    )
  }
}

export default function (opt: IInitOptions, element: HTMLElement) {
  db.init(opt)

  render(<App />, element)
}

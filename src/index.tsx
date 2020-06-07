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
  loading: boolean
  hasMoreComment: boolean
  comments: IComment[]
}

class App extends Component<{}, IAppState> {
  constructor() {
    super()
    this.state = {
      comments: [],
      logged: false,
      loading: false,
      hasMoreComment: true,
      user: {
        id: '',
        name: '匿名',
        avatar,
      },
    }
  }

  componentWillMount() {
    this.refreshComments()
    this.getCacheLoginInfo()
  }

  refreshComments = async () => {
    db.resetLatestTag()
    return this.getMoreComments(true)
  }

  async getCacheLoginInfo() {
    const user = await login(LoginTypes.Anonymously, true)
    if (!user) {
      return
    }
    this.solveLoginUser(user)
  }

  solveLoginUser(user: IUser) {
    Object.keys(user).forEach((key) => {
      // @ts-ignore
      if (user[key] === undefined) {
        // @ts-ignore
        user[key] = null
      }
    })

    user.avatar = user.avatar || avatar

    db.user = user
    this.setState({
      user,
      logged: true,
    })
  }

  handleLogin = async (type: LoginTypes) => {
    try {
      const user = (await login(type))!
      if (type === LoginTypes.Anonymously) {
        user.avatar = avatar
        user.name = '匿名'
        user.email = void 0
      }
      this.solveLoginUser(user)
    } catch (error) {
      alert('登录失败: ' + error)
    }
  }

  handleLikes = async (comment: IComment, liked: boolean) => {
    if (!this.state.logged) {
      return
    }

    const { comments } = this.state

    try {
      await db.updateCommentLike(comment.id!, liked)
      const data = await db.getComment(comment.id!)
      const idx = comments.findIndex((c) => c.id === data.id)
      comments.splice(idx, 1, data)

      this.setState({
        comments,
      })
    } catch (error) {
      alert('评论失败:' + error)
    }
  }

  getMoreComments = async (clear = false) => {
    this.setState({
      loading: true,
    })
    const comments = await db.getMoreComments()

    if (comments.length < 10) {
      this.setState({
        hasMoreComment: false,
      })
    }

    this.setState({
      loading: false,
      comments: clear ? comments : this.state.comments.concat(comments),
    })
  }

  render(p: {}, s: IAppState) {
    const { user, logged, comments, hasMoreComment, loading } = s

    return (
      <div class="firement-root">
        <CommentForm
          refreshComments={this.refreshComments}
          user={user}
          logged={logged}
          handleLogin={this.handleLogin}
        />
        <Comments user={user} comments={comments} handleLikes={this.handleLikes} />
        <div className="firement-more">
          {hasMoreComment ? (
            <button class="firement-more__btn" onClick={() => this.getMoreComments()}>
              {loading ? '加载中...' : '加载更多'}
            </button>
          ) : (
            <div className="firement-more__none">到底了</div>
          )}
        </div>
      </div>
    )
  }
}

export default function (opt: IInitOptions, element: HTMLElement) {
  db.init(opt)

  render(<App />, element)
}

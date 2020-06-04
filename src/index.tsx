import { h, render, Component } from 'preact'
import { db } from './firement'
import CommentForm from './components/CommentForm'
import { ISortComment } from './components/Comments'
import { LoginTypes, login } from './auth'
import { configs } from './configs'
import { IUser, IComment, IInitOptions } from './typedef'
import { avatar } from './avatar'

export interface IAppState {
  user: IUser
  logged: boolean
  comments: ISortComment[]
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
        avatar: configs.defaultAvatar,
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
      const user = await login(type)
      if (type === LoginTypes.Anonymously) {
        user.avatar = configs.defaultAvatar
        user.name = '匿名'
        user.email = void 0
      }

      this.setState({
        user,
        logged: true,
      })
    } catch (error) {
      alert('登录失败: ' + error)
    }
  }

  handleLikes = async (comment: IComment) => {
    try {
      // await addLike(configs.blogTitle, comment.id, this.state.user.uid)
      await this.refreshComments()
    } catch (error) {
      alert('评论失败:' + error)
    }
  }

  async getComments() {
    const list: ISortComment[] = []

    list.sort((a, b) => (a.comment.timestamp < b.comment.timestamp ? 1 : -1))

    return list
  }

  render(p: {}, s: IAppState) {
    return (
      <div class="firement-root">
        <CommentForm
          refreshComments={this.refreshComments}
          user={s.user}
          logged={s.logged}
          handleLogin={this.handleLogin}
        />
        {/* <Comments comments={this.state.comments} handleLikes={this.handleLikes} /> */}
      </div>
    )
  }
}

export default function (opt: IInitOptions, element: HTMLElement) {
  configs.defaultAvatar = avatar

  db.init(opt)

  db.getAllComments()

  render(<App />, element)
}

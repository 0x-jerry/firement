import { h, Component } from 'preact'
import { LoginTypes, login, logout } from '../login'
import { pushComment } from '../firement'
import { renderMD } from '../utils'

export interface ICommentFormProps {
  user?: IUser
  refreshComments: Function
}

export interface ICommentFormState {
  user: IUser
  markdownContent: string
  commentContent: string
}

const defaultAvatar = './static/images/avatar.jpg'

export default class CommentForm extends Component<ICommentFormProps, ICommentFormState> {
  constructor(props: ICommentFormProps) {
    super()
    this.state = {
      user: props.user || {
        uid: '',
        name: '匿名',
        email: null,
        avatar: defaultAvatar,
      },
      markdownContent: '',
      commentContent: '',
    }
  }

  previewMD = (e: Event) => {
    const el = e.target as HTMLInputElement

    this.setState({
      commentContent: el.value || '',
      markdownContent: renderMD(el.value || ''),
    })
  }

  async handleLogin(type: LoginTypes, e?: Event) {
    const user = await login(type)
    if (type === LoginTypes.Anonymously) {
      user.avatar = defaultAvatar
      user.name = '匿名'
      user.email = null
    }

    this.setState({
      user,
    })
  }

  async handleLogout() {
    await logout()
  }

  handleComment = async (e: Event) => {
    e.preventDefault()
    if (!this.state.user.uid) {
      await this.handleLogin(LoginTypes.Anonymously)
    }

    await pushComment('test', this.state.user, this.state.commentContent)

    this.props.refreshComments()
    console.log('comment ok')
  }

  render(props: ICommentFormProps, state: ICommentFormState) {
    return (
      <form class="firement-form">
        <div class="firement-column">
          <div class="firement-column-left">
            <img src={state.user.avatar} alt="avatar" class="firement-avatar" />
            <span class="firement-label"> {state.user.name} </span>
          </div>
          <div class="firement-column-right">
            <label class="firement-label">登录方式:</label>
            <input
              type="button"
              class="firement-login"
              value="Google"
              onClick={this.handleLogin.bind(this, LoginTypes.Google)}
            />
            <input
              type="button"
              class="firement-login"
              value="GitHub"
              onClick={this.handleLogin.bind(this, LoginTypes.GitHub)}
            />
            <input type="button" class="firement-login" value="登出" onClick={this.handleLogout.bind(this)} />
          </div>
        </div>
        <div class="firement-content-box">
          <input type="submit" value="提交评论" class="firement-submit firement-button" onClick={this.handleComment} />
          <textarea
            name="content"
            rows={10}
            placeholder="Markdown Supported"
            class="firement-content"
            onInput={this.previewMD}
          />
          <div class="firement-preview" dangerouslySetInnerHTML={{ __html: state.markdownContent }} />
        </div>
      </form>
    )
  }
}

import { h, Component } from 'preact'
import { LoginTypes, logout } from '../login'
import { pushComment } from '../firement'
import { renderMD } from '../utils'
import { configs } from '../index'

export interface ICommentFormProps {
  user?: IUser
  logged: boolean
  refreshComments: Function
  handleLogin: Function
}

export interface ICommentFormState {
  isPreview: boolean
  markdownContent: string
  commentContent: string
}

export default class CommentForm extends Component<ICommentFormProps, ICommentFormState> {
  constructor(props: ICommentFormProps) {
    super(props)
    this.state = {
      isPreview: false,
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

  handlePreview = () => {
    this.setState({
      isPreview: !this.state.isPreview,
    })
  }

  async handleLogout() {
    await logout()
  }

  handleComment = async (e: Event) => {
    e.preventDefault()

    if (!(this.state.commentContent && this.props.logged)) {
      return
    }

    await pushComment(configs.blogTitle, this.props.user, this.state.commentContent)

    this.props.refreshComments()
  }

  handleLogin(type: LoginTypes, e) {
    this.props.handleLogin(type)
  }

  render(props: ICommentFormProps, state: ICommentFormState) {
    const previewText = '预览: ' + (state.isPreview ? 'ON' : 'OFF')
    return (
      <form class="firement-form">
        <div class="firement-form__header">
          <div class="firement-row">
            <img src={props.user.avatar} alt="avatar" class="firement-avatar" />
            <span class="firement-form__label"> {props.user.name} </span>
          </div>
        </div>
        <div class="firement-form__content">
          {props.logged ? (
            <div className="firement-box firement-form__comment_input">
              {this.state.isPreview ? (
                <div class="firement-box firement-form__preview">
                  <div
                    className="firement-form__preview_content"
                    dangerouslySetInnerHTML={{ __html: state.markdownContent }}
                  />
                </div>
              ) : (
                <textarea
                  name="content"
                  placeholder="Markdown Supported"
                  class="firement-form__textarea"
                  value={state.commentContent}
                  onInput={this.previewMD}
                />
              )}
            </div>
          ) : (
            <div className="firement-box firement-form__not_login">
              <label class="firement-form__label">请登录后评论</label>
              <input
                type="button"
                class="firement-button"
                value="Google"
                onClick={this.handleLogin.bind(this, LoginTypes.Google)}
              />
              <input
                type="button"
                class="firement-button"
                value="GitHub"
                onClick={this.handleLogin.bind(this, LoginTypes.GitHub)}
              />
              <input
                type="button"
                class="firement-button"
                value="Anonymously"
                onClick={this.handleLogin.bind(this, LoginTypes.Anonymously)}
              />
            </div>
          )}
        </div>
        <div className="firement-row">
          <div className="firement-row__right">
            <input type="button" value={previewText} class="firement-button" onClick={this.handlePreview} />
            <input
              type="submit"
              value="提交评论"
              class="firement-submit firement-button"
              onClick={this.handleComment}
            />
          </div>
        </div>
      </form>
    )
  }
}

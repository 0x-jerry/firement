import { h, Component } from 'preact'
import * as marked from 'marked'

export interface ICommentFormProps {
  user?: IUser
}

export interface ICommentFormState {
  user: IUser
  markdownContent: string
}

export default class CommentForm extends Component<ICommentFormProps, ICommentFormState> {
  constructor(props: ICommentFormProps) {
    super()
    this.state = {
      user: props.user || {
        uid: '',
        name: '匿名',
        email: '无',
        avatar: './static/images/avatar.jpg',
      },
      markdownContent: '',
    }
  }

  previewMD = (e: Event) => {
    const el = e.target as HTMLInputElement

    this.setState({
      markdownContent: marked(el.value || ''),
    })
  }

  render(props: ICommentFormProps, state: ICommentFormState) {
    return (
      <form class="firement-form">
        <div class="firement-column">
          <div class="firement-column-left">
            <img src={state.user.avatar} alt="avatar" class="firement-avatar" />
            <label for="name" class="firement-label">
              昵称:
            </label>
            <span class="firement-input"> {state.user.name} </span>
            <label for="email" class="firement-label">
              邮箱:
            </label>
            <span class="firement-input"> {state.user.email} </span>
          </div>
          <div class="firement-column-right">
            <label class="firement-label">登录:</label>
            <input type="button" class="firement-login" data-id="Google" value="Google" />
            <input type="button" class="firement-login" data-id="GitHub" value="GitHub" />
            <input type="button" class="firement-login" data-id="Anonymously" value="匿名" />
          </div>
        </div>
        <div class="firement-content-box">
          <input type="submit" value="提交评论" class="firement-submit firement-button" />
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

import { h, Component } from 'preact'
import Comment from './Comment'
import { getArticleComment } from '../firement'

export interface ISortComment {
  key: string
  comment: IComment
}

export interface ICommentsState {
  comments: ISortComment[]
}

export default class Comments extends Component<{}, ICommentsState> {
  constructor() {
    super()
    this.state = {
      comments: [],
    }
  }

  async getComments() {
    const data = await getArticleComment('test')

    const list: ISortComment[] = []

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const element = data[key]
        list.push({ key, comment: element })
      }
    }

    list.sort((a, b) => (a.comment.timestamp < b.comment.timestamp ? 1 : -1))

    return list
  }

  async componentWillMount() {
    const comments = await this.getComments()
    this.setState({
      comments,
    })
  }
  render() {
    const CommentItems = this.state.comments.map((comment) => <Comment {...comment.comment} uid={comment.key} />)

    return (
      <div className="firement-comments">
        <section class="firement-comment">
          <div class="firement-content">This is awesome</div>
          <span class="firement-likes">
            <span class="firement-likes-icon" />
            11
          </span>
          <div class="firement-info">
            <span class="firement-info-left">
              <span class="firement-info-time">2018-11-17 15:18:22</span>@
              <a href="mailto:test@qq.com" class="firement-info-name">
                cwxyz
              </a>
            </span>
            <span class="firement-info-right">
              <button class="firement-button firement-edit">修改</button>
              <button class="firement-button firement-reply">回复</button>
            </span>
          </div>
        </section>
        {CommentItems}
      </div>
    )
  }
}

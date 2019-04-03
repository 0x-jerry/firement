import { h, render, Component } from 'preact'
import { init, getArticleComment } from './firement'
import CommentForm from './components/CommentForm'
import Comments, { ISortComment } from './components/Comments'
import './style.less'

export interface IAppState {
  comments: ISortComment[]
}

class App extends Component<{}, IAppState> {
  constructor() {
    super()
    this.state = {
      comments: [],
    }
  }

  componentWillMount() {
    this.refreshComments()
  }

  async refreshComments() {
    const comments = await this.getComments()
    this.setState({
      comments,
    })
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

  render() {
    return (
      <div class="firement-root">
        <CommentForm refreshComments={this.refreshComments.bind(this)} />
        <Comments comments={this.state.comments} />
      </div>
    )
  }
}

export default function(config: IInitOptions, element: HTMLElement) {
  init(config)

  render(<App />, element)
}

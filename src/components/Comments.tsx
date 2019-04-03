import { h, Component } from 'preact'
import Comment from './Comment'

export interface ISortComment {
  key: string
  comment: IComment
}

export interface ICommentsProps {
  comments: ISortComment[]
}

export default class Comments extends Component<ICommentsProps, {}> {
  render(props: ICommentsProps) {
    const CommentItems = props.comments.map((comment, i) => (
      <Comment {...comment.comment} uid={comment.key} index={props.comments.length - i} />
    ))

    return <div className="firement-comments">{CommentItems}</div>
  }
}

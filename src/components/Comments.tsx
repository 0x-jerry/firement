import { h, Component } from 'preact'
import Comment from './Comment'
import { IComment, IUser } from '../typedef'

export interface ICommentsProps {
  user: IUser
  comments: IComment[]
  handleLikes: (comment: IComment, liked: boolean) => any
}

export default class Comments extends Component<ICommentsProps, {}> {
  render(props: ICommentsProps) {
    const { comments, user, handleLikes } = props

    return (
      <div className="firement-comments">
        {comments.map((comment, i) => (
          <Comment user={user} comment={comment} index={i} handleLikes={handleLikes} />
        ))}
      </div>
    )
  }
}

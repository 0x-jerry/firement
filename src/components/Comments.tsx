import { h, Component } from 'preact'
import Comment from './Comment'

export interface ISortComment {
  key: string
  comment: IComment
}

export interface ICommentsProps {
  comments: ISortComment[]
  handleLikes: (comment: IComment) => any
}

export default class Comments extends Component<ICommentsProps, {}> {
  render(props: ICommentsProps) {
    const CommentItems = props.comments.map((comment, i) => (
      <Comment
        {...comment.comment}
        uid={comment.key}
        index={props.comments.length - i}
        handleLikes={props.handleLikes}
      />
    ))

    const fakeMsg: IComment = {
      id: '1231',
      avatar: './static/images/avatar.jpg',
      content: '# test',
      email: '',
      likes: {},
      name: 'test',
      timestamp: new Date().getTime().toString(),
      uid: '00001',
    }

    return (
      <div className="firement-comments">
        {/* <Comment {...fakeMsg} index={1} handleLikes={props.handleLikes} />
        <Comment {...fakeMsg} index={2} handleLikes={props.handleLikes} /> */}
        {CommentItems}
      </div>
    )
  }
}

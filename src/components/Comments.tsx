import { h, Component } from 'preact'
import Comment from './Comment'
import { IComment } from '../typedef'
import { configs } from 'src/configs'

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
      user: {
        id: '1231',
        name: 'test',
        avatar: configs.defaultAvatar,
        email: '',
      },
      content: '# test',
      likes: {},
      timestamp: new Date().getTime().toString(),
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

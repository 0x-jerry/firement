import { h } from 'preact'
import { renderMD } from '../utils'
import { IComment, IUser } from '../typedef'
import { avatar } from '../avatar'
import { db } from '../firement'

export interface ICommentProps {
  comment: IComment
  index: number
  user: IUser
  handleLikes: (comment: IComment, liked: boolean) => any
}

export default function Comment(props: ICommentProps) {
  const { handleLikes, comment, user } = props

  const pageLink = comment.user.homePage
  const timeDate = new Date(+props.comment.timestamp).toISOString()

  const liked = user.id ? comment.likes[user.id] : false

  const handleLikeClick = async () => handleLikes(comment, !liked)

  const likeNum = Object.keys(comment.likes).filter((id) => comment.likes[id]).length

  const avatarImg = comment.user.avatar.match(/^[a-z]+\:\/\//) ? comment.user.avatar : avatar

  return (
    <section className="firement-comment firement-form" data-id={comment.id}>
      <div className="firement-form__header firement-row">
        <div className="firement-row__left">
          <a href={pageLink}>
            <img src={avatarImg} alt="avatar" className="firement-avatar" />
          </a>
          <span className="firement-form__label">{comment.user.name}</span>
          <span className="firement-form__label firement-comment__time">comment at: {timeDate}</span>
        </div>
        <div className="firement-row__right">
          <span className="firement-comment__likes">
            <i className="firement-comment__likes_icon" onClick={handleLikeClick} />
            <span className="firement-form__label">{likeNum}</span>
            <span className="firement-form__label firement-comment__layer"># {props.index}</span>
          </span>
        </div>
      </div>
      <div className="firement-content" dangerouslySetInnerHTML={{ __html: renderMD(comment.content) }} />
    </section>
  )
}

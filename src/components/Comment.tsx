import { h } from 'preact'
import { renderMD } from '../utils'
import { IComment } from '../typedef'
import { configs } from 'src/configs'

export interface ICommentProps extends IComment {
  index: number
  handleLikes: (comment: IComment) => any
}

export default function Comment(props: ICommentProps) {
  const pageLink = props.homePage
  const timeDate = new Date(+props.timestamp).toISOString()

  const handleLikeClick = () => {
    const { handleLikes, ...comment } = props
    props.handleLikes(comment)
  }

  const likeNum = Object.keys(props.likes).filter(id => props.likes[id]).length

  const avatar = props.avatar.match(/^[a-z]+\:\/\//)
    ? props.avatar
    : configs.defaultAvatar

  return (
    <section className="firement-comment firement-form" data-id={props.uid}>
      <div className="firement-form__header firement-row">
        <div className="firement-row__left">
          <a href={pageLink}>
            <img src={avatar} alt="avatar" className="firement-avatar" />
          </a>
          <span className="firement-form__label">{props.name}</span>
          <span className="firement-form__label firement-comment__time">
            comment at: {timeDate}
          </span>
        </div>
        <div className="firement-row__right">
          <span className="firement-comment__likes">
            <i
              className="firement-comment__likes_icon"
              onClick={handleLikeClick}
            />
            <span className="firement-form__label">{likeNum}</span>
            <span className="firement-form__label firement-comment__layer">
              # {props.index}
            </span>
          </span>
        </div>
      </div>
      <div
        className="firement-content"
        dangerouslySetInnerHTML={{ __html: renderMD(props.content) }}
      />
    </section>
  )
}

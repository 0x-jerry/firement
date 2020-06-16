import { renderMD, dateStr } from '../utils'
import { IComment, IUser } from '../typedef'
import { avatar } from '../avatar'

export interface ICommentProps {
  comment: IComment
  index: number
  user: IUser
  handleLikes: (comment: IComment, liked: boolean) => any
}

export default function Comment(props: ICommentProps) {
  const { handleLikes, comment, user } = props
  const { email, homePage } = comment.user

  const userEmail = email ? `mailto:${email}` : 'javascript:'
  const userHomePage = homePage || 'javascript:'
  const hasHomePage = !!homePage

  const timeDate = dateStr(new Date(+props.comment.timestamp))

  const liked = user.id ? comment.likes[user.id] : false

  const handleLikeClick = async () => handleLikes(comment, !liked)

  const likeNum = Object.keys(comment.likes).filter((id) => comment.likes[id]).length

  const avatarImg = comment.user.avatar.match(/^[a-z]+\:\/\//) ? comment.user.avatar : avatar

  let _el: HTMLDivElement | null = null

  const handleOnload = (el: HTMLDivElement | null) => {
    _el = el
    setTimeout(() => {
      if (el && el.clientHeight > 200) {
        el.classList.add('hide-more')
      }
    }, 0)
  }

  const handleShowMore = () => {
    _el!.classList.remove('hide-more')
  }

  return (
    <section className="firement-comment firement-form" data-id={comment.id}>
      <div className="firement-form__header firement-row">
        <div className="firement-row__left">
          <a href={userEmail}>
            <img src={avatarImg} alt="avatar" className="firement-avatar" />
          </a>
          <a class="firement-a firement-form__label" target={hasHomePage ? '_blank' : ''} href={userHomePage}>
            {comment.user.name}
          </a>
          <span className="firement-form__label firement-comment__time">{timeDate}</span>
        </div>
        <div className="firement-row__right">
          <span className="firement-comment__likes">
            <i className="firement-comment__likes_icon" onClick={handleLikeClick} />
            <span className="firement-form__label">{likeNum}</span>
            {/* <span className="firement-form__label firement-comment__layer"># {props.index}</span> */}
          </span>
        </div>
      </div>
      <div className="firement-comment__content" ref={handleOnload}>
        <div
          className="firement-comment__content__inner"
          dangerouslySetInnerHTML={{ __html: renderMD(comment.content) }}
        ></div>
        <div data-js="more-content" class="firement-comment__content__more" onClick={handleShowMore}>
          显示更多
        </div>
      </div>
    </section>
  )
}

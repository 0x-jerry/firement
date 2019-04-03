import { h } from 'preact'
import { renderMD } from '../utils'

export interface ICommentProps extends IComment {
  index: number
}

export default function Comment(props: ICommentProps) {
  const pageLink = props.homePage

  return (
    <section className="firement-comment" data-id={props.uid}>
      <span className="firement-likes">
        # {props.index}
        <i className="firement-likes-icon" />
        {+props.likes || 0}
      </span>
      <div className="firement-content" dangerouslySetInnerHTML={{ __html: renderMD(props.content) }} />
      <div className="firement-info">
        <span className="firement-info-left">
          <span className="firement-info-time">{new Date(+props.timestamp).toLocaleDateString()}</span>@
          <a href={pageLink} target="_blank" className="firement-info-name">
            {props.name}
          </a>
        </span>
        <span className="firement-info-right" />
      </div>
    </section>
  )
}

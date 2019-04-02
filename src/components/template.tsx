import * as marked from 'marked'
import { h, render, Component } from 'preact'

export default class Comment extends Component<IComment, any> {
  render(props: IComment) {
    return (
      <section className="firement-comment" data-id={props.uid}>
        <span className="firement-likes">
          <i className="firement-likes-icon" />
          {+props.likes || 0}
        </span>
        <div className="firement-content" dangerouslySetInnerHTML={{ __html: marked(props.content) }} />
        <div className="firement-info">
          <span className="firement-info-left">
            <span className="firement-info-time">{new Date(+props.timestamp).toLocaleDateString()}</span>@
            <a href="mailto:{props.email}" className="firement-info-name">
              {props.name}
            </a>
          </span>
          <span className="firement-info-right" />
        </div>
      </section>
    )
  }
}

export function addCommentByTpl(node: Element, id: string, comment: IComment) {
  render(<Comment {...comment} uid={id} />, node)
}

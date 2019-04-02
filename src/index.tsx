import { h, render } from 'preact'
import { init } from './firement'
import CommentForm from './components/CommentForm'
import Comments from './components/Comments'

export default function(config: IInitOptions, element: HTMLElement) {
  init(config)

  render(
    <div>
      <CommentForm />
      <Comments />
    </div>,
    element,
  )
}

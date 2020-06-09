import { JSXInternal } from 'preact/src/jsx'

declare global {
  namespace JSX {
    type IntrinsicElements = JSXInternal.IntrinsicElements
  }

  function h(): void
}

import { h, render } from 'preact'
import { init } from './src/firement'
import CommentForm from './src/components/CommentForm'
import Comments from './src/components/Comments'

// Initialize Firebase
const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.PROJECT_ID + '.firebaseapp.com',
  databaseURL: `https://${process.env.PROJECT_ID}.firebaseio.com`,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.PROJECT_ID + '.appspot.com',
}

init(config)

render(
  <div>
    <CommentForm />
    <Comments />
  </div>,
  document.getElementById('firement'),
)

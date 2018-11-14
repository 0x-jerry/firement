/*eslint-disable */
import { init } from './src/comment.js';

// Initialize Firebase
const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.PROJECT_ID + '.firebaseapp.com',
  databaseURL: `https://${process.env.PROJECT_ID}.firebaseio.com`,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.PROJECT_ID + '.appspot.com',
  messagingSenderId: '1067882600320',
};

init(config);

console.log(process.env.NODE_ENV);

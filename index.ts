import { init } from './src/comment';

// Initialize Firebase
const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.PROJECT_ID + '.firebaseapp.com',
  databaseURL: `https://${process.env.PROJECT_ID}.firebaseio.com`,
  messagingSenderId: '1067882600320',
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.PROJECT_ID + '.appspot.com',
};

init(config);

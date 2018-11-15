import * as marked from 'marked';
import { getArticleComment, init, pushComment } from './src/comment';
import { login, LoginTypes } from './src/login';

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

getArticleComment('article').then((data) => {
  console.log('data', data);
});

// pushComment('article', { name: 'test', avatar: '123', email: '22@qq.com', uid: '12312' }, 'hello');

document.getElementById('firement-content').onkeyup = (e) => {
  const element = e.target as HTMLInputElement;
  const markdown = marked(element.value);
  document.getElementById('firement-preview').innerHTML = markdown;
};

document.getElementById('login-google').onclick = () => {
  login(LoginTypes.Google).then((data) => {
    console.log(data);
  });
};

document.getElementById('login-github').onclick = () => {
  login(LoginTypes.GitHub).then((data) => {
    console.log(data);
  });
};

document.getElementById('commit').onsubmit = (ev) => {
  let elements = Array.from(ev.srcElement as HTMLFormElement) as HTMLInputElement[];
  elements = elements.filter((e) => !!e.name);
  const data = {};
  elements.forEach((e) => (data[e.name] = e.value));
  console.log(data);
  ev.preventDefault();
};

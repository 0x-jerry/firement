import * as marked from 'marked';
import { getArticleComment, init, pushComment } from './src/comment';
import { login, LoginTypes } from './src/login';

const loggedInfo = {
  logged: false,
  user: null as IUser,
};

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

getArticleComment('test').then((data) => {
  console.log('data', data);
});

document.getElementById('firement-content').onkeyup = (e) => {
  const element = e.target as HTMLInputElement;
  const markdown = marked(element.value);
  document.getElementById('firement-preview').innerHTML = markdown;
};

document.getElementById('login-google').onclick = () => {
  login(LoginTypes.Google).then((data) => {
    console.log(data);
    loggedInfo.logged = true;
    loggedInfo.user = data;
  });
};

document.getElementById('login-github').onclick = () => {
  login(LoginTypes.GitHub).then((data) => {
    console.log(data);
    loggedInfo.logged = true;
    loggedInfo.user = data;
  });
};

document.getElementById('commit').onsubmit = (ev) => {
  let elements = Array.from(ev.srcElement as HTMLFormElement) as HTMLInputElement[];
  elements = elements.filter((e) => !!e.name);
  const data = {
    content: '',
    email: '',
    name: '',
  };

  elements.forEach((e) => (data[e.name] = e.value));

  if (data.name.length) {
    loggedInfo.user.name = data.name;
  }

  if (data.email.length) {
    loggedInfo.user.email = data.email;
  }

  if (loggedInfo.logged) {
    pushComment('test', loggedInfo.user, data.content)
      .then(() => {
        console.log('comment ok', data);
      })
      .catch((err) => {
        console.warn('comment fail');
      });
  } else {
    console.log('please sign in first');
  }

  ev.preventDefault();
};

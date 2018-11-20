import * as marked from 'marked';
import { getArticleComment, init, pushComment } from './src/comment';
import { login, LoginTypes, logout } from './src/login';

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
  interface ISortComment {
    key: string;
    comment: IComment;
  }

  const list: ISortComment[] = [];

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const element = data[key];
      list.push({ key, comment: element });
    }
  }

  list
    .sort((a, b) => (a.comment.timestamp < b.comment.timestamp ? 1 : -1))
    .forEach((e) => addCommentDom(e.comment, e.key));
});

const content = document.getElementsByClassName('firement-content')[0] as HTMLInputElement;

content.onkeyup = (e) => {
  const element = e.target as HTMLInputElement;
  const markdown = marked(element.value);
  document.getElementsByClassName('firement-preview')[0].innerHTML = markdown;
};

const loginButtons = document.getElementsByClassName('firement-login');

for (const button of loginButtons) {
  (button as HTMLDivElement).onclick = () => {
    const id = button.getAttribute('data-id') as LoginTypes;
    login(id).then((data) => {
      loggedInfo.logged = true;
      loggedInfo.user = data;
    });
  };
}

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
        elements.forEach((e) => (e.value = ''));
        alert('评论成功');
        console.log('comment ok', loggedInfo);
      })
      .catch((err) => {
        console.warn('comment fail');
      });
  } else {
    console.log('please sign in first');
  }

  ev.preventDefault();
};

function addCommentDom(comment: IComment, id: string) {
  const template = `
<section class="firement-comment" data-id="${id}">
  <span class="firement-likes">
    <a class="firement-likes-icon"></a>${+comment.likes || 0}
  </span>
  <div class="firement-content">
    ${marked(comment.content)}
  </div>
  <div class="firement-info">
    <span class="firement-info-left">
      <span class="firement-info-time">${new Date(+comment.timestamp).toLocaleString()}</span>
      @<a href="mailto:${comment.email}" class="firement-info-name">${comment.name}</a>
    </span>
    <span class="firement-info-right">
    ${
      comment.uid === (loggedInfo.user && loggedInfo.user.uid)
        ? '<button class="firement-button firement-edit">修改</button>'
        : ''
    }
      <button class="firement-button firement-reply">回复</button>
    </span>
  </div>
</section>`;

  document.getElementsByClassName('firement-comments')[0].innerHTML += template;
}

import * as firebase from 'firebase';
import * as marked from 'marked';
import { login, LoginTypes } from './login';

function init(config) {
  firebase.initializeApp(config);
}

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
  let elements = Array.from(
    ev.srcElement as HTMLFormElement,
  ) as HTMLInputElement[];

  elements = elements.filter((e) => !!e.name);

  const data = {};

  elements.forEach((e) => (data[e.name] = e.value));

  console.log(data);

  ev.preventDefault();
};

export { init };

import * as firebase from 'firebase';
import * as marked from 'marked';
import { login } from './login';

function init(config) {
  firebase.initializeApp(config);
}

document.getElementById('firement-content').onkeyup = (e) => {
  const element = e.target as HTMLInputElement;

  const markdown = marked(element.value);
  document.getElementById('firement-preview').innerHTML = markdown;
};

document.getElementById('login').onclick = () => {
  login().then((data) => {
    console.log(data);
  });
};

const form = document.getElementById('commit');

form.onsubmit = (ev) => {
  let elements = Array.from(ev.srcElement as HTMLFormElement) as HTMLInputElement[];

  elements = elements.filter((e) => !!e.name);

  const data = {};

  elements.forEach((e) => (data[e.name] = e.value));

  console.log(data);

  ev.preventDefault();
};

export { init };

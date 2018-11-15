import * as firebase from 'firebase';
import { login } from './login';
import * as marked from 'marked';

function init(config) {
  firebase.initializeApp(config);
}

document.getElementById('firement-content').onkeyup = (e) => {
  const element = <HTMLInputElement>e.target;

  const markdown = marked(element.value);
  document.getElementById('firement-preview').innerHTML = markdown;
};

document.getElementById('login').onclick = () => {
  login().then((data) => {
    console.log(data);
  });
};

const form = document.getElementById('commit');

form.onsubmit = (e) => {
  let elements = <HTMLInputElement[]>Array.from(<HTMLFormElement>e.srcElement);

  elements = elements.filter((e: HTMLInputElement) => !!e.name);

  const data = {};

  elements.forEach((e) => (data[e.name] = e.value));

  console.log(data);

  e.preventDefault();
};

export { init };

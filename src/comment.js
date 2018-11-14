import firebase from 'firebase';
import { login } from './login';
import marked from 'marked';

function init(config) {
  firebase.initializeApp(config);
}

document.getElementById('firement-content').onkeyup = (e) => {
  const markdown = marked(e.target.value);
  document.getElementById('firement-preview').innerHTML = markdown;
};

document.getElementById('login').onclick = () => {
  login().then((data) => {
    console.log(data);
  });
};

const form = document.getElementById('commit');

/**
 * @param {Event} e
 */
form.onsubmit = (e) => {
  const elements = Array.from(e.srcElement).filter((e) => !!e.name);
  const data = {};
  elements.forEach((e) => {
    data[e.name] = e.value;
  });
  console.log(data);
  e.preventDefault();
};

export { init };

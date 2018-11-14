import firebase from 'firebase';

function init(config) {
  firebase.initializeApp(config);
}

export { init };

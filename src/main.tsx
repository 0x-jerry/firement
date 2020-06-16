import '../style/style.less'
import Firement from './index'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBvtJJAzIKucsyjl7z_DDw43PL5rb0P4hc',
  authDomain: 'jie8440676360.firebaseapp.com',
  databaseURL: 'https://jie8440676360.firebaseio.com',
  projectId: 'jie8440676360',
  storageBucket: 'jie8440676360.appspot.com',
  messagingSenderId: '1067882600320',
  appId: '1:1067882600320:web:b0b5a354a45fdb0ed21365',
}

// Initialize Firebase
Firement(
  {
    db: firebaseConfig,
    article: 'test',
  },
  document.getElementById('app')!
)

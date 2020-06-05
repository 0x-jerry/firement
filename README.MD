# Firebase Comment System

A comment system build on firebase

## 使用方式

```js
import Firement from 'firement'

const firebaseConfig = {
  apiKey: 'xxx',
  authDomain: 'xxx.firebaseapp.com',
  databaseURL: 'https://xxx.firebaseio.com',
  projectId: 'xxx',
  storageBucket: 'xxx.appspot.com',
  messagingSenderId: 'xxx',
  appId: 'xxx',
}

// Initialize Firebase
Firement(
  {
    db: firebaseConfig,
    // 当前页面的标志，可以是标题，或者任何唯一的值
    article: 'test',
  },
  document.getElementById('app')
)
```

## 开始

1. 申请 Firebase 项目
2. 申请 Github app 项目 (Github 登录)
3. Firebase Auth 里面开通 Github, Google, Anonymously 登录方式
4. Firebase Auth 里面添加登录域名限制

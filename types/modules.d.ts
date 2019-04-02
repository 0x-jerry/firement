interface IUser {
  uid: string;
  name: string;
  email: string;
  avatar: string;
}

interface IComment extends IUser {
  likes: 0;
  content: string;
  timestamp: string;
}

interface IBlog {
  [title: string]: IComment;
}

interface IInitOpts {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  messagingSenderId: string;
  projectId: string;
  storageBucket: string;
}
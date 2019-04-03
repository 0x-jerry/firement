interface IUser {
  uid: string;
  name: string;
  avatar: string;
  email?: string;
  homePage?: string;
}

interface IComment extends IUser {
  likes: number;
  content: string;
  timestamp: string;
}

interface IBlog {
  [title: string]: IComment;
}

interface IInitOptions {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  messagingSenderId: string;
  projectId: string;
  storageBucket: string;
}
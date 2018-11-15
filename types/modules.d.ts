interface IUser {
  uid: string;
  name: string;
  email: string;
  avatar: string;
}

interface IComment extends IUser {
  content: string;
  timestamp: string;
}

interface IBlog {
  [title: string]: IComment[];
}

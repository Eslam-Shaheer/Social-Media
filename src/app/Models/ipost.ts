import { IComment } from './icomment';
import { IUser } from './iuser';

export interface IPost {
  body: string;
  title: string;
  id?: string;
  timestamp?: number;
  author?: IUser;
  comments?: IComment[];
}

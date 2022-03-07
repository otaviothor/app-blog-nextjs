import { IAuthor } from "./author";

export interface IPost {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: IAuthor;
  resume: string;
  ogImage: {
    url: string;
  };
  content: string;
}

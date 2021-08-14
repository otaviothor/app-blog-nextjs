import { Author } from "./author";

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  resume: string;
  ogImage: {
    url: string;
  };
  content: string;
};

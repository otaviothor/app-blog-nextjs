import { readFileSync } from "fs";
import matter from "gray-matter";
import { join } from "path";
import { IPost } from "../interfaces/post";
import { POSTS_DIRECTORY } from "../lib/constants";
import { getPostSlugs } from "../lib/helpers";
import { getAuthorBySlug } from "./authorsController";

export const getPostBySlug = (slug: string): IPost => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(POSTS_DIRECTORY, `${realSlug}.md`);
  const fileContents = readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const author = getAuthorBySlug(data.author);

  const post: IPost = {
    slug: realSlug,
    title: data.title,
    date: data.date,
    coverImage: data.coverImage,
    author,
    resume: data.resume,
    ogImage: data.ogImage,
    content,
  };

  return post;
};

export const getPosts = (limit: number = 0): IPost[] => {
  const slugs = getPostSlugs();

  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return limit > 0 ? posts.slice(0, limit) : posts;
};

export const getPostsByAuthor = (
  author: string,
  limit: number = 0
): (IPost | undefined)[] => {
  const slugs = getPostSlugs();

  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    .map((post) => {
      if (post.author.user === author) return post;
    })
    .filter((post) => post !== undefined);

  return limit > 0 ? posts.slice(0, limit) : posts;
};

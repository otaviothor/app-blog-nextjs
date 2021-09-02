import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Post } from "../types/post";
import { Author } from "../types/author";

const postsDirectory = join(process.cwd(), "_data/posts/");
const authorsDirectory = join(process.cwd(), "_data/authors/");

export const getPostSlugs = () => {
  return fs.readdirSync(postsDirectory);
};

export const getAuthorSlugs = () => {
  return fs.readdirSync(authorsDirectory);
};

export const getPostBySlug = (slug: string) => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const author = getAuthorBySlug(data.author);

  const post: Post = {
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

export const getAuthorBySlug = (slug: string) => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(authorsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  const author: Author = {
    user: data.user,
    name: data.name,
    picture: data.picture
  };

  return author;
};

export const getAllAuthors = (limit: number = 0) => {
  const slugs = getAuthorSlugs();

  const authors = slugs
    .map((slug) => getAuthorBySlug(slug));

  return limit > 0 ? authors.slice(0, limit) : authors;
};

export const getAllPosts = (limit: number = 0) => {
  const slugs = getPostSlugs();

  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return limit > 0 ? posts.slice(0, limit) : posts;
};

export const getPostsByAuthor = (author: string, limit: number = 0) => {
  const slugs = getPostSlugs();

  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    .map((post) => {
      if (post.author.user === author) return post;
    }).filter((post) => post !== undefined);    

  return limit > 0 ? posts.slice(0, limit) : posts;
};

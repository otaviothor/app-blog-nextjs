import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Post } from "../types/post";

const postsDirectory = join(process.cwd(), "_data/posts/");
const authorsDirectory = join(process.cwd(), "_data/authors/");

export const getPostSlugs = () => {
  return fs.readdirSync(postsDirectory);
};

export const getAuthorByPost = (author: string) => {
  const fullPath = join(authorsDirectory, `${author}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);
  return {
    user: data.user,
    name: data.name,
    picture: data.picture,
  };
};

export const getPostBySlug = (slug: string) => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const author = getAuthorByPost(data.author);

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

export const getAllPosts = (limit: number = 0) => {
  const slugs = getPostSlugs();

  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return limit > 0 ? posts.slice(0, limit) : posts;
};


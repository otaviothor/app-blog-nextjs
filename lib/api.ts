import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Post } from "../types/post";
import { Author } from "../types/author";

const postsDirectory = join(process.cwd(), "_data/posts/");
const authorsDirectory = join(process.cwd(), "_data/authors/");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getAuthorByPost(author: string): Author {
  const fullPathAuthor = join(authorsDirectory, `${author}.md`);
  const fileContentsAuthor = fs.readFileSync(fullPathAuthor, "utf8");
  const { data } = matter(fileContentsAuthor);
  return {
    user: data.user,
    name: data.name,
    picture: data.picture,
  };
}

export function getPostBySlug(slug: string) {
  const realSlugPost = slug.replace(/\.md$/, "");
  const fullPathPost = join(postsDirectory, `${realSlugPost}.md`);
  const fileContentsPost = fs.readFileSync(fullPathPost, "utf8");
  const { data, content } = matter(fileContentsPost);
  const author: Author = getAuthorByPost(data.author);

  const post: Post = {
    slug,
    title: data.title,
    date: data.date,
    coverImage: data.coverImage,
    author,
    resume: data.resume,
    ogImage: data.ogImage,
    content
  };

  return post;
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  console.log(slugs);
  
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}

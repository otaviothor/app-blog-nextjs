import { readFileSync } from "fs";
import matter from "gray-matter";
import { join } from "path";
import { IAuthor } from "../interfaces/author";
import { AUTHORS_DIRECTORY } from "../lib/constants";
import { getAuthorSlugs } from "../lib/helpers";

export const getAuthorBySlug = (slug: string): IAuthor => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(AUTHORS_DIRECTORY, `${realSlug}.md`);
  const fileContents = readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  const author: IAuthor = {
    user: data.user,
    name: data.name,
    picture: data.picture,
  };

  return author;
};

export const getAuthors = (limit: number = 0): IAuthor[] => {
  const slugs = getAuthorSlugs();

  const authors = slugs.map((slug) => getAuthorBySlug(slug));

  return limit > 0 ? authors.slice(0, limit) : authors;
};

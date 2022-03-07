import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import { IAuthor } from "../interfaces/author";

interface IProps {
  title: string;
  coverImage: string;
  date: string;
  resume: string;
  author: IAuthor;
  slug: string;
}

const PostPreview = ({
  title,
  coverImage,
  date,
  resume,
  author,
  slug,
}: IProps) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{resume}</p>
      <Avatar author={author} />
    </div>
  );
};

export default PostPreview;

import Link from "next/link";
import { Author } from "../types/author";

type Props = {
  author: Author;
};

const Avatar = ({ author }: Props) => {
  return (
    <Link as={`/authors/${author.user}`} href="/authors/[slug]">
      <a className="hover:underline flex items-center">
        <img
          src={author.picture}
          className="w-12 h-12 rounded-full mr-4"
          alt={author.name}
        />
        <div className="text-xl font-bold">{author.name}</div>
      </a>
    </Link>
  );
};

export default Avatar;

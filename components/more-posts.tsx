import PostPreview from "./post-preview";
import { IPost } from "../interfaces/post";

interface IProps {
  title?: string;
  posts: IPost[];
}

const MorePosts = ({ posts, title }: IProps) => {
  return (
    <section>
      {title && (
        <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-16">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            resume={post.resume}
          />
        ))}
      </div>
    </section>
  );
};

export default MorePosts;

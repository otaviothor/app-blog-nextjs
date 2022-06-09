import Container from "../components/container";
import MorePosts from "../components/more-posts";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";
import { BLOG_NAME } from "../lib/constants";
import { IPost } from "../interfaces/post";
import { getPosts } from "../controllers/postsController";

interface IProps {
  posts: IPost[];
}

const Index = ({ posts }: IProps) => {
  const heroPost = posts[0];
  const morePosts = posts.slice(1);
  return (
    <Layout>
      <Head>
        <title>{BLOG_NAME}</title>
      </Head>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            resume={heroPost.resume}
          />
        )}
        {morePosts.length > 0 && (
          <MorePosts title="Mais Postagens" posts={morePosts} />
        )}
        {morePosts.length >= 2 && (
          <div className="text-center mb-16">
            <a href={`/posts`} className="font-bold hover:underline">
              ver mais
            </a>
          </div>
        )}
      </Container>
    </Layout>
  );
};

export default Index;

export const getStaticProps = () => {
  const posts = getPosts(5);

  return {
    props: { posts },
  };
};

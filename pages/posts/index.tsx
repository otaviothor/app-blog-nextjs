import Container from "../../components/container";
import MorePosts from "../../components/more-posts";
import Layout from "../../components/layout";
import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import { API_HOST, BLOG_NAME } from "../../lib/constants";
import { IPost } from "../../interfaces/post";
import Header from "../../components/header";

interface IProps {
  posts: IPost[];
}

const Posts = ({ posts }: IProps) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Postagens | {BLOG_NAME}</title>
        </Head>
        <Container>
          <Header />
          {posts.length > 0 && <MorePosts title="Postagens" posts={posts} />}
        </Container>
      </Layout>
    </>
  );
};

export default Posts;

export const getStaticProps = async () => {
  const posts = await fetch(`${API_HOST}/posts`).then<IPost[]>((res) =>
    res.json()
  );

  return {
    props: { posts },
  };
};

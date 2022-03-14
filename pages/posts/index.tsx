import Container from "../../components/container";
import MorePosts from "../../components/more-posts";
import Layout from "../../components/layout";
import Head from "next/head";
import { API_HOST, BLOG_NAME } from "../../lib/constants";
import { IPost } from "../../interfaces/post";
import Header from "../../components/header";
import api from "../../lib/api";

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
  const posts = await api
    .get<IPost[]>(`${API_HOST}/posts`)
    .then((res) => res.data);

  return {
    props: { posts },
  };
};

import Container from "../components/container";
import MorePosts from "../components/more-posts";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { BLOG_NAME } from "../lib/constants";
import { Post } from "../types/post";
import Header from "../components/header";

type Props = {
  allPosts: Post[];
};

const Posts = ({ allPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Postagens | {BLOG_NAME}</title>
        </Head>
        <Container>
          <Header />
          {allPosts.length > 0 && (
            <MorePosts title="Postagens" posts={allPosts} />
          )}
        </Container>
      </Layout>
    </>
  );
};

export default Posts;

export const getStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: { allPosts },
  };
};

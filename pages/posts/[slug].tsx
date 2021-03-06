import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import { BLOG_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import { IPost } from "../../interfaces/post";
import { IParams } from "../../interfaces/params";
import { getPostBySlug, getPosts } from "../../controllers/postsController";

interface IProps {
  post: IPost;
}

const Post = ({ post }: IProps) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return (
      <ErrorPage
        statusCode={404}
        title={`${BLOG_NAME} | Página não encontrada`}
      />
    );
  }
  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <Head>
              <title>
                {post.title} | {BLOG_NAME}
              </title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <article className="mb-32">
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Post;

export const getStaticProps = async ({ params }: IParams) => {
  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

export const getStaticPaths = () => {
  const posts = getPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

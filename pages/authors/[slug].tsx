import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import Header from "../../components/header";
import Layout from "../../components/layout";
import {
  getAllAuthors,
  getAuthorBySlug,
  getPostsByAuthor,
} from "../../lib/api";
import Head from "next/head";
import { BLOG_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import { IPost } from "../../interfaces/post";
import { IAuthor } from "../../interfaces/author";
import MorePosts from "../../components/more-posts";
import { IParams } from "../../interfaces/params";

interface IProps {
  author: IAuthor;
  posts: IPost[];
}

const Author = ({ posts, author }: IProps) => {
  const router = useRouter();
  if (!router.isFallback && posts.length === 0) {
    return (
      <ErrorPage
        statusCode={404}
        title={`${BLOG_NAME} | Página não encontrada`}
      />
    );
  }
  return (
    <Layout>
      <Head>
        <title>Postagens | {BLOG_NAME}</title>
      </Head>
      <Container>
        <Header />
        {posts.length > 0 && (
          <MorePosts
            title={`Postagens de ${author.name
              .split(" ")
              .slice(0, -1)
              .join(" ")}`}
            posts={posts}
          />
        )}
      </Container>
    </Layout>
  );
};

export default Author;

export const getStaticProps = async ({ params }: IParams) => {
  const author = getAuthorBySlug(params.slug);
  const posts = getPostsByAuthor(author.user);

  return {
    props: {
      author,
      posts,
    },
  };
};

export const getStaticPaths = async () => {
  const authors = getAllAuthors();

  return {
    paths: authors.map((author) => {
      return {
        params: {
          slug: author.user,
        },
      };
    }),
    fallback: false,
  };
};

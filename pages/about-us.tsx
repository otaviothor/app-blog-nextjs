import Container from "../components/container";
import PostBody from "../components/post-body";
import Header from "../components/header";
import Layout from "../components/layout";
import Head from "next/head";
import { BLOG_NAME } from "../lib/constants";
import PostTitle from "../components/post-title";
import CoverImage from "../components/cover-image";

const AboutUs = () => {
  return (
    <Layout>
      <Container>
        <Header />
        <article className="mb-32">
          <Head>
            <title>Sobre nós | {BLOG_NAME}</title>
          </Head>
          <PostTitle>Sobre nós</PostTitle>
          <div className="mb-8 md:mb-16 sm:mx-0 flex justify-center">
            <CoverImage title={`Página sobre nós`} src={`/assets/blog/content/about-us.jpg`} />
          </div>
          <PostBody
            content={`
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              cupiditate eligendi esse nesciunt, quasi dolor aut sequi inventore
              veniam, expedita ratione voluptatibus repudiandae fugiat. Nisi vel
              ipsum recusandae tenetur sint.
            `}
          />
        </article>
      </Container>
    </Layout>
  );
};

export default AboutUs;

// type Params = {
//   params: {
//     slug: string;
//   };
// };

// export async function getStaticProps({ params }: Params) {
//   const post = getPostBySlug(params.slug, [
//     "title",
//     "date",
//     "slug",
//     "author",
//     "content",
//     "ogImage",
//     "coverImage",
//   ]);
//   const content = await markdownToHtml(post.content || "");

//   return {
//     props: {
//       post: {
//         ...post,
//         content,
//       },
//     },
//   };
// }

// export async function getStaticPaths() {
//   const posts = getAllPosts(["slug"]);

//   return {
//     paths: posts.map((post) => {
//       return {
//         params: {
//           slug: post.slug,
//         },
//       };
//     }),
//     fallback: false,
//   };
// }

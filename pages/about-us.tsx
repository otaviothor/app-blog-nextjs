import Container from "../components/container";
import PostBody from "../components/post-body";
import Header from "../components/header";
import Layout from "../components/layout";
import Head from "next/head";
import { BLOG_NAME } from "../lib/constants";

const AboutUs = () => {
  return (
    <Layout>
      <Container>
        <Header />
        <article className="mb-32">
          <Head>
            <title>Sobre nós | {BLOG_NAME}</title>
            {/* <meta property="og:image" content={post.ogImage.url} /> */}
          </Head>
          {/* <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          /> */}
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

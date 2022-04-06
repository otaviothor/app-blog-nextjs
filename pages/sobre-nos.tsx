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
      <Head>
        <title>Sobre nós | {BLOG_NAME}</title>
      </Head>
      <Container>
        <Header />
        <article className="mb-32">
          <PostTitle>Sobre nós</PostTitle>
          <div className="mb-8 md:mb-16 sm:mx-0 flex justify-center">
            <CoverImage
              title={`Página sobre nós`}
              src={`/assets/blog/content/sobre-nos.jpg`}
            />
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
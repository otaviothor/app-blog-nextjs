import Container from "./container";
import { BLOG_NAME, CONTACT } from "../lib/constants";

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-10 flex flex-col lg:flex-row items-center">
          <h3 className="text-3xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 flex items-center">
            <img
              src="/assets/svg/logo.svg"
              alt={`Logo do ${BLOG_NAME}`}
              className="w-8 mr-4"
            />
            {BLOG_NAME}
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://www.instagram.com/nicoand_le/"
              target="_blank"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-3 lg:mb-0"
            >
              Instagram
            </a>
            <a
              href={`/about-us`}
              className="mx-3 my-3 font-bold hover:underline"
            >
              Sobre nós
            </a>
            <a
              href={`mailto:${CONTACT}`}
              target="_blank"
              className="mx-3 my-3 font-bold hover:underline"
            >
              Contato
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

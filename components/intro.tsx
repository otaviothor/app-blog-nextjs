import { BLOG_NAME } from "../lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 flex items-center">
        <img
          src="/assets/svg/logo.svg"
          alt={`Logo do ${BLOG_NAME}`}
          className="w-24 mr-8"
        />
        {BLOG_NAME}
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Um blog de quem ama viajar
      </h4>
    </section>
  );
};

export default Intro;

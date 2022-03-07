import { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const PostTitle = ({ children }: IProps) => {
  return (
    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
      {children}
    </h1>
  );
};

export default PostTitle;

import markdownStyles from "../styles/markdown-styles.module.css";

interface IProps {
  content: string;
}

const PostBody = ({ content }: IProps) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default PostBody;

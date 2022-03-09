import { NextApiRequest, NextApiResponse } from "next";
import { getPostsByAuthor } from "../../../../controllers/postsController";
import { IPost } from "../../../../interfaces/post";
import { IResponseMethods } from "../../../../interfaces/responseMethods";
import { catcher, method } from "../../../../lib/helpers";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const handleCase: IResponseMethods = {
    GET: (_, res: NextApiResponse<(IPost | undefined)[]>): void => {
      try {
        const { author } = req.query;
        const _author = Array.isArray(author) ? author[0] : author;
        res.status(200).json(getPostsByAuthor(_author));
      } catch (error) {
        catcher(res, error);
      }
    },
  };

  const response = handleCase[method(req)];

  if (response) response(req, res);
  else res.status(400).json({ error: "No response for this request." });
};

export default handler;

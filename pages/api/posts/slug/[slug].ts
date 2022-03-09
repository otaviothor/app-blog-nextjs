import { NextApiRequest, NextApiResponse } from "next";
import { getPostBySlug } from "../../../../controllers/postsController";
import { IPost } from "../../../../interfaces/post";
import { IResponseMethods } from "../../../../interfaces/responseMethods";
import { catcher, method } from "../../../../lib/helpers";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const handleCase: IResponseMethods = {
    GET: (_, res: NextApiResponse<IPost>): void => {
      try {
        const { slug } = req.query;
        const _slug = Array.isArray(slug) ? slug[0] : slug;
        res.status(200).json(getPostBySlug(_slug));
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

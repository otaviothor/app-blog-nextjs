import { NextApiRequest, NextApiResponse } from "next";
import { getPosts } from "../../../controllers/postsController";
import { IPost } from "../../../interfaces/post";
import { IResponseMethods } from "../../../interfaces/responseMethods";
import { catcher, method } from "../../../lib/helpers";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const handleCase: IResponseMethods = {
    GET: (req: NextApiRequest, res: NextApiResponse<IPost[]>): void => {
      try {
        const { limit = 0 } = req.query;
        res.status(200).json(getPosts(Number(limit)));
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

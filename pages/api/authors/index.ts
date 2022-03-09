import { NextApiRequest, NextApiResponse } from "next";
import { getAuthors } from "../../../controllers/authorsController";
import { IAuthor } from "../../../interfaces/author";
import { IResponseMethods } from "../../../interfaces/responseMethods";
import { catcher, method } from "../../../lib/helpers";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const handleCase: IResponseMethods = {
    GET: (_, res: NextApiResponse<IAuthor[]>): void => {
      try {
        res.status(200).json(getAuthors());
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

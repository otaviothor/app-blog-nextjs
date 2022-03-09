import { NextApiRequest, NextApiResponse } from "next";

export interface IResponseMethods {
  GET?: (req: NextApiRequest, res: NextApiResponse) => void;
  POST?: (req: NextApiRequest, res: NextApiResponse) => void;
  PUT?: (req: NextApiRequest, res: NextApiResponse) => void;
  DELETE?: (req: NextApiRequest, res: NextApiResponse) => void;
}
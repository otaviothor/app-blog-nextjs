import { readdirSync } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { IResponseMethods } from "../interfaces/responseMethods";
import { AUTHORS_DIRECTORY, POSTS_DIRECTORY } from "./constants";

export const getPostSlugs = () => {
  return readdirSync(POSTS_DIRECTORY);
};

export const getAuthorSlugs = () => {
  return readdirSync(AUTHORS_DIRECTORY);
};

export const method = (req: NextApiRequest): keyof IResponseMethods =>
  req.method as keyof IResponseMethods;

export const catcher = (res: NextApiResponse, error: Error | unknown) =>
  res.status(500).json({ error });

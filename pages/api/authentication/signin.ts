import { NextApiRequest, NextApiResponse } from "next";
import {
	StatusCodes,
} from "http-status-codes"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;
  console.log(email,"email")
  console.log(password,"password")
  res.status(StatusCodes.OK).json(true);
};
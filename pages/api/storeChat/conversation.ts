import { NextApiRequest, NextApiResponse } from "next";
import { StatusCodes } from "http-status-codes";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, first_name, last_name, submit} = req.body;
  console.log(email, "Email");
  console.log(first_name, "first_name");
  console.log(last_name, "last_name");
  console.log(submit, "submit");
  res.status(StatusCodes.OK).json(true);
}

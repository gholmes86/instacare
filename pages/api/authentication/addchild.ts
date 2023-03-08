import { NextApiRequest, NextApiResponse } from "next";
import {
	StatusCodes,
} from "http-status-codes"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { childName, childAge,childDob, childGender, } = req.body;
  console.log(childName, "childName");
  console.log(childAge, "childAge");
  console.log(childDob, "childDob");
  console.log(childGender, "childGender");
  res.status(StatusCodes.OK).json(true);
};
import { NextApiRequest, NextApiResponse } from "next";
import {
	StatusCodes,
} from "http-status-codes"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, phoneNumber, password, confirmPassword } = req.body;
  console.log(name, "name")
  console.log(email,"email")
  console.log(phoneNumber,"phoneNumber")
  console.log(password,"password")
  console.log(confirmPassword, "confirmPassword");
  res.status(StatusCodes.OK).json(true);
};
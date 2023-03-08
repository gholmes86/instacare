import type { NextApiRequest, NextApiResponse } from "next"
import {
	StatusCodes,
} from "http-status-codes"
import sendMail from "../../../helpers/email"

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
	const {email} = req.body
	if(email !== "" || email !== undefined){
		console.log(req.body)
		await sendMail(req.body)
		return res.status(StatusCodes.OK).json({
			success: 1,
			mesg: `Email to ${email} successfully sent `,
			data: {},
		})
	} else {
		return res.status(StatusCodes.BAD_REQUEST).json({
			success: 0,
			mesg: "Valid Email was not provided",
			data: {},
		})
	}
}
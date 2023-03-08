import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST || "",
	port: +(process.env.SMTP_PORT || 0),
	secure: true, // true for 465, false for other ports
	auth: {
	  user: process.env.SMTP_USER ,
	  pass: process.env.SMTP_PASSWORD 
	},
	tls: {
		// do not fail on invalid certs
		rejectUnauthorized: false
	},
})
  
const sendMail = async(data: {modelName:string, email:string}) => {
	try {
		const message = {
			from: `${process.env.SMTP_USER}`,
			to: data.email,
			subject: "Register Successful",
			html: `Congratulations! Your registration was successful.`
		}
		const info = await transporter.sendMail(message)
		return info
    
	} catch (error:any) {
		throw new Error(error.message)
	}
  
}
export default sendMail
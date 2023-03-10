import { Configuration, OpenAIApi } from "openai"
import type { NextApiRequest, NextApiResponse } from "next"

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (!configuration.apiKey) {
		res.status(500).json({
			error: {
				message: "OpenAI API key not configured, please follow instructions in README.md",
			}
		})
		return
	}

	const question = req.body.question || ""
	if (question.trim().length === 0) {
		res.status(400).json({
			error: {
				message: "Please enter a valid question",
			}
		})
		return
	}

	try {
		const completion = await openai.createCompletion({
			model: `${process.env.OPENAI_MODEL}`,
			prompt: question,
			temperature: 0.6,
			max_tokens: 100,
			presence_penalty: 0.0,
			frequency_penalty: 0.0
		})
		console.log(completion.data.choices)
		res.status(200).json({ result: completion.data.choices[0].text?.trim() })
	} catch(error) {
		// Consider adjusting the error handling logic for your use case
		if (error.response) {
			console.error(error.response.status, error.response.data)
			res.status(error.response.status).json(error.response.data)
		} else {
			console.error(`Error with OpenAI API request: ${error.message}`)
			res.status(500).json({
				error: {
					message: "An error occurred during your request.",
				}
			})
		}
	}
}
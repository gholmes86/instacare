import Head from "next/head"
import { useState } from "react"
import styles from "../index.module.css"
import { getResponse } from "../../apis"
import {
	getCsrfToken,
	useSession,
	signIn,
	signOut,
	getSession,
} from "next-auth/react"

export default function Home() {
	const [animalInput, setAnimalInput] = useState("")
	const [result, setResult] = useState()

	async function onSubmit(event:any) {
		event.preventDefault()
		try {
			const response = await getResponse(animalInput)
			const data = await response.json()
			if (response.status !== 200) {
				throw data.error || new Error(`Request failed with status ${response.status}`)
			}

			setResult(data.result)
			setAnimalInput("")
		} catch(error) {
			// Consider implementing your own error handling logic here
			console.error(error)
			alert(error.message)
		}
	}

	return (
		<div>
			<Head>
				<title>WiseCare</title>
				<link rel="icon" href="/Logo.png" />
			</Head>

			<main className={styles.main}>
				<img src="/Logo.png" className={styles.icon} />
				<h3>Name my pet</h3>
				<form onSubmit={onSubmit}>
					<input
						type="text"
						name="animal"
						placeholder="Enter an animal"
						value={animalInput}
						onChange={(e) => setAnimalInput(e.target.value)}
					/>
					<input type="submit" value="Generate names" />
				</form>
				<div className={styles.result}>{result}</div>
			</main>
		</div>
	)
}

export const getServerSideProps = async (ctx:any) => {
	const session = await getSession(ctx)

	if (session)
		return {
			redirect: {
				destination: "/dashboard",
			},
		}

	return {
		props: { session },
	}
}
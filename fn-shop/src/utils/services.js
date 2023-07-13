import { API_KEY, API_URL } from './constans'

export const shopApi = async () => {
	try {
		const response = await globalThis.fetch(API_URL, {
			headers: {
				Authorization: API_KEY
			}
		})
		const data = await response.json()
		return data
	} catch ({ message }) {
		return { error: message }
	}
}
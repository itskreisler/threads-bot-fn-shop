const API_KEY = 'e59898ef-1fb07616-a2649be3-156fc871'
const API_LANG = {
	lang: 'es'
}
const API_URL = 'https://fortniteapi.io/v2/shop?'.concat(new URLSearchParams(API_LANG).toString())

export {
	API_KEY,
	API_URL
}
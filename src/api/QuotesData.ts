import axios from 'axios'

const key = '67GMv2YgUIOGPY4pve1NZw==p1iqpzJ0TALNl7mn'

class Quotes {
	getQuotes() {
		return axios.get('https://api.api-ninjas.com/v1/quotes', {
			headers: {
				'X-Api-Key': key,
			},
			params: {
				category: 'success',
			},
		})
	}
}

export const QuotesAPI = new Quotes()

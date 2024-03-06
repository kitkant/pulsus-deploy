import axios from 'axios'
import { key } from './../constants/data'

class Weather {
	getWeather(city: string | undefined) {
		return axios.get('https://api.weatherapi.com/v1/current.json', {
			params: {
				key,
				q: city === undefined ? 'Moscow' : city,
				aqi: 'no',
			},
		})
	}
}

export const WeatherAPI = new Weather()

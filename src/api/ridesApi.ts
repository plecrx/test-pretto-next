import HttpClient from './httpClient'
import {Ride} from '../models/ride'

export class RidesApi extends HttpClient {
	async getRides(): Promise<Ride[]> {
		const response = await this.instance.get<Ride[]>('/rides')

		if (response) {
			return response.data
		}

		return []
	}
}

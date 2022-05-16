import HttpClient from './httpClient'
import {User} from '../models/user'

export class UsersApi extends HttpClient {
	async getUsers(): Promise<User[]> {
		const response = await this.instance.get<User[]>('/users')

		if (response) {
			return response.data
		}

		return []
	}
}

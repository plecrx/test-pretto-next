type CreationDate = {
	seconds: number
	nano?: number
}

export type User = {
	id: number
	username: string
	email: string
	createdAt?: CreationDate
}

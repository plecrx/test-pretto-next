type CreationDate = {
	seconds: number
	nano?: number
}

export type User = {
	id: string
	username: string
	email: string
	createdAt?: CreationDate
}

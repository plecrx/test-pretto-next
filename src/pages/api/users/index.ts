import type {NextApiRequest, NextApiResponse} from 'next'
import {dbConnect} from '../../../utils/dbConnect'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const {db} = await dbConnect()
	const users = await db.collection('users').find().toArray()

	res.status(200).json(users)
}

export default handler

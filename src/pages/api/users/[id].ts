import type {NextApiRequest, NextApiResponse} from 'next'
import {dbConnect} from '../../../utils/dbConnect'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const {db} = await dbConnect()
	const user = await db.collection('users').find({id: req.query.id}).toArray()

	res.json(user)
}

export default handler

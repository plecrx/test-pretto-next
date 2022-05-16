import type {NextApiRequest, NextApiResponse} from 'next'
import {dbConnect} from '../../../utils/dbConnect'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const {db} = await dbConnect()

	const ride = await db.collection('rides').find({id: req.query.id}).toArray()

	res.json(ride)
}

export default handler

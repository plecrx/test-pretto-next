import React from 'react'
import Table from '../table/table.component'
import {getDate} from '../../utils/getDate'
import NoDataLabel from '../noDataLabel/noDataLabel.component'
import {User} from '../../models/user'

interface UserTableProps {
	users: Array<User>
}

const UserTable = ({users}: UserTableProps) => {
	const columns = [
		{
			Header: 'Created at',
			accessor: 'createdAt',
		},
		{
			Header: 'Name',
			accessor: 'username',
		},
		{
			Header: 'ID',
			accessor: 'id',
		},

		{
			Header: 'Email',
			accessor: 'email',
		},
	]

	const mappedUsers = users.map(user => ({
		...(user.createdAt && {createdAt: getDate(user.createdAt.seconds)}),
		email: user.email,
		id: user.id,
		username: user.username,
	}))

	if (!users.length) return <NoDataLabel />

	return <Table columns={columns} data={mappedUsers} />
}

export default UserTable

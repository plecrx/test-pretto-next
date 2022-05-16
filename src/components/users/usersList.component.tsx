import React, {useState} from 'react'
import styled from 'styled-components'
import {User} from './usersTable.component'
import Card from '../card/card.component'
import Checkbox from '../checkbox/checkbox.component'
import {ButtonMore} from '../button/button'
import {ProtectedStatus} from '../status/status.component'
import NoDataLabel from '../noDataLabel/noDataLabel.component'

const HeaderListContainer = styled.div`
	display: flex;
	align-items: center;
	background-color: ${({theme}) => theme.colors.neutral4Hover};
	color: ${({theme}) => theme.colors.neutral2};
	height: 64px;
	padding: 0 20px;
	gap: 65px;
`

const HeaderList = () => {
	return (
		<HeaderListContainer>
			<Checkbox isChecked={false} onChange={() => ''} />
			<span>Person</span>
		</HeaderListContainer>
	)
}

interface UserListProps {
	users: Array<User>
}

const UserList = ({users}: UserListProps) => {
	const [selectedUsers, setSelectedUsers] = useState([])
	const handleSelect = () => {
		//setSelectedUsers(e.value)
	}
	return (
		<div>
			<HeaderList />
			{!users.length && <NoDataLabel />}
			{users.map((user, index) => (
				<Card
					key={`user-${index}`}
					checked={selectedUsers.includes(selectedUsers[index])}
					onToggle={handleSelect}
					title={user.username}
					id={user.id}
					status={<ProtectedStatus />}
				/>
			))}
			<div style={{display: 'flex', margin: '20px'}}>
				<ButtonMore />
			</div>
		</div>
	)
}

export default UserList

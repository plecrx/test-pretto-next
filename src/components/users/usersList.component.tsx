import React, {useState} from 'react'
import styled from 'styled-components'
import Card from '../card/card.component'
import Checkbox from '../checkbox/checkbox.component'
import {ButtonMore} from '../button/button'
import {ProtectedStatus} from '../status/status.component'
import NoDataLabel from '../noDataLabel/noDataLabel.component'
import {User} from '../../models/user'

const HeaderListContainer = styled.div`
	display: flex;
	align-items: center;
	background-color: ${({theme}) => theme.colors.neutral4Hover};
	color: ${({theme}) => theme.colors.neutral2};
	height: 64px;
	padding: 0 20px;
	gap: 65px;
`

type HeaderListProps = {
	allChecked: boolean
	onChange: () => void
	title: string
}

const HeaderList = ({allChecked, onChange, title}: HeaderListProps) => {
	return (
		<HeaderListContainer>
			<Checkbox isChecked={allChecked} onChange={onChange} />
			<span>{title}</span>
		</HeaderListContainer>
	)
}

interface UserListProps {
	users: Array<User>
}

const UserList = ({users}: UserListProps) => {
	const [selectedUsers, setSelectedUsers] = useState<User[]>([])
	const allChecked = selectedUsers === users
	const handleSelectAll = () => {
		if (allChecked) {
			return setSelectedUsers([])
		}
		return setSelectedUsers(users)
	}

	const handleSelect = (user: User) => {
		if (selectedUsers.includes(user)) {
			return setSelectedUsers(selectedUsers.filter(_u => _u !== user))
		}
		return setSelectedUsers([...selectedUsers, user])
	}
	return (
		<div>
			<HeaderList
				title='Person'
				allChecked={allChecked}
				onChange={handleSelectAll}
			/>
			{!users.length && <NoDataLabel />}
			{users.map((user, index) => (
				<Card
					key={`user-${index}`}
					checked={selectedUsers.includes(user)}
					onToggle={() => handleSelect(user)}
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

import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import UsersTable from './usersTable.component'
import UsersList from './usersList.component'
import {User} from '../../models/user'
import TextField from '../textfield/textfield.component'
import HeroHeader from '../heroHeader/heroHeader.component'

const Container = styled.div<{mobileView: boolean}>`
	display: flex;
	flex-direction: column;
	gap: 40px;
	margin: ${({mobileView}) => (mobileView ? '0' : '0 84px 138px')};
`

interface Size {
	width: number
	height: number
}

type UsersProps = {
	users: User[]
}

const Users = ({users}: UsersProps) => {
	const [size, setSize] = useState<Size>()
	const [displayedUsers, setDisplayedUsers] = useState<Array<User>>([])
	const [textFieldValue, setTextFieldValue] = useState('')
	const isMobile = !size || size.width <= 600

	const resizeHandler = () => {
		const width = window.innerWidth
		const height = window.innerHeight
		setSize({width, height})
	}

	const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTextFieldValue(event.currentTarget.value)
	}

	useEffect(() => {
		setDisplayedUsers(users)
	}, [users])

	useEffect(() => {
		if (textFieldValue === '') {
			setDisplayedUsers(users)
		}
		setDisplayedUsers(users.filter(u => u.username.includes(textFieldValue)))
	}, [textFieldValue, users])

	useEffect(() => {
		window.onresize = resizeHandler
	}, [])

	return (
		<Container mobileView={isMobile}>
			<HeroHeader title={'People'}>
				<TextField
					id='users-searchbar'
					onChange={handleTextFieldChange}
					placeholder='Search...'
					value={textFieldValue}
				/>
			</HeroHeader>
			{isMobile ? (
				<UsersList users={displayedUsers} />
			) : (
				<UsersTable users={displayedUsers} />
			)}
		</Container>
	)
}

export default Users

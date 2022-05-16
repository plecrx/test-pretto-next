import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import UsersTable from './usersTable.component'
import UsersList from './usersList.component'
import {User} from '../../models/user'
import TextField from '../textfield/textfield.component'
import HeroHeader from '../heroHeader/heroHeader.component'
import useSWR from 'swr'
import {fetcher} from '../../utils/fetcher'
import {Size, useWindowSize} from '../../hooks/useWindowSize'

const Container = styled.div<{mobileView: boolean}>`
	display: flex;
	flex-direction: column;
	gap: 40px;
	margin: ${({mobileView}) => (mobileView ? '0' : '0 84px 138px')};
`

const Users = () => {
	const size: Size = useWindowSize()
	const [displayedUsers, setDisplayedUsers] = useState<Array<User>>([])
	const [textFieldValue, setTextFieldValue] = useState('')
	const {data, error} = useSWR('/api/users', fetcher)

	const isMobile = !size || size.width <= 600

	const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTextFieldValue(event.currentTarget.value)
	}

	useEffect(() => {
		setDisplayedUsers(data)
	}, [data])

	useEffect(() => {
		const users = data || []
		if (textFieldValue === '') {
			setDisplayedUsers(users)
		}
		setDisplayedUsers(
			users.filter((u: {username: string}) => u.username.includes(textFieldValue)),
		)
	}, [textFieldValue, data])

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
			{!error && !data && <div>Loading...</div>}
			{error && <div>Failed to load users !</div>}
			{isMobile && <UsersList users={displayedUsers} />}
			{!isMobile && <UsersTable users={displayedUsers} />}
		</Container>
	)
}

export default Users

import React from 'react'
import useSWR from 'swr'
import Users from '../components/users/users.component'
import {FullPageLayout} from '../layouts/fullpage.layout'
import HeroHeader from '../components/heroHeader/heroHeader.component'

const fetcher = (url: RequestInfo) => fetch(url).then(res => res.json())

const Home = () => {
	const {data, error} = useSWR('/api/users', fetcher)

	return (
		<FullPageLayout>
			{!error && !data && <div>Loading...</div>}
			{error && <div>Failed to load users !</div>}
			{data && <Users users={data} />}
		</FullPageLayout>
	)
}

export default Home

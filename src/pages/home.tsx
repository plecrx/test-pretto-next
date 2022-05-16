import React from 'react'
import useSWR from 'swr'
import Users from '../components/users/users.component'
import {FullPageLayout} from '../layouts/fullpage.layout'
import HeroHeader from '../components/heroHeader/heroHeader.component'

const Home = () => {
	return (
		<FullPageLayout>
			<Users />
		</FullPageLayout>
	)
}

export default Home

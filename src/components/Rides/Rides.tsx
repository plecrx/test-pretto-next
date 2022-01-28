import React, {useEffect, useState} from 'react'
import {Ride} from '../../api/RidesApi/types/ride'
import {RidesClient} from '../../api/RidesApi/ridesClient'
import {ListHeading, ListItem} from 'baseui/list'
import styled from '@emotion/styled'
import {H1} from 'baseui/typography'
import {Spinner} from 'baseui/spinner'
import {ArrowDown} from 'baseui/icon'

const Container = styled.div`
	margin-inline: 20em;
	padding: 5em;
`

export const Rides = () => {
	const [rides, setRides] = useState<Ride[]>([])
	const [loading, setLoading] = useState<boolean>(false)

	const fetchRides = async () => {
		const baseUrl = 'https://paristaxiflares.herokuapp.com'
		const ridesClient = new RidesClient(baseUrl)
		const _rides = await ridesClient.getRides()
		setRides(_rides)
		setLoading(false)
	}

	useEffect(() => {
		setLoading(true)
		fetchRides()
	}, [])

	return (
		<Container>
			<ListItem artwork={ArrowDown} artworkSize={64}>
				<H1>Choose a trip</H1>
			</ListItem>
			{!loading ? (
				rides.map(ride => (
					<ListHeading
						key={`ride-${ride.id}`}
						heading={ride.date}
						subHeading={ride.startTime}
						endEnhancer={`€${ride.price}`}
						endEnhancerDescription={`${ride.distance} km`}
					/>
				))
			) : (
				<Spinner />
			)}
		</Container>
	)
}

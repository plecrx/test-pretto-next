import React, {useEffect, useState} from 'react'
import {ListHeading, ListItem} from 'baseui/list'
import styled from '@emotion/styled'
import {H1} from 'baseui/typography'
import {ArrowDown} from 'baseui/icon'
import {Block} from 'baseui/block'
import useSWR from 'swr'
import {Ride} from '../../models/ride'
import {fetcher} from '../../utils/fetcher'

const Container = styled(Block)`
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
`

const StyledList = styled.div`
	width: 60em;
`

const Rides = () => {
	const [rides, setRides] = useState<Ride[]>([])
	const {data, error} = useSWR('/api/rides', fetcher)

	useEffect(() => {
		setRides(data)
	}, [data])

	return (
		<Container
			overrides={{
				Block: {
					style: ({$theme}) => ({
						backgroundColor: $theme.colors.backgroundPrimary,
					}),
				},
			}}
		>
			<StyledList>
				<ListItem
					artwork={ArrowDown}
					artworkSize={64}
					overrides={{
						Root: {
							style: ({$theme}) => ({
								color: $theme.colors.primary,
								backgroundColor: $theme.colors.backgroundSecondary,
							}),
						},
					}}
				>
					<H1>Choose a ride</H1>
				</ListItem>
				{!error && !data && <div>Loading...</div>}
				{error && <div>Failed to load rides !</div>}
				{!error &&
					rides.map(ride => (
						<ListHeading
							key={`ride-${ride.id}`}
							heading={ride.date}
							subHeading={ride.startTime}
							endEnhancer={`€${ride.price}`}
							endEnhancerDescription={`${ride.distance} km`}
							overrides={{
								Root: {
									style: ({$theme}) => ({
										backgroundColor: $theme.colors.backgroundSecondary,
										color: $theme.colors.primary,
									}),
								},
							}}
						/>
					))}
			</StyledList>
		</Container>
	)
}

export default Rides

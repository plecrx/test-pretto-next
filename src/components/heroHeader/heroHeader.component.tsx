import styled from 'styled-components'
import React, {ReactNode} from 'react'

const Container = styled.div`
	margin: 0 24px;
	display: flex;
	flex-direction: column;
`

const HeroTitle = styled.h1`
	font-family: 'Inter', sans-serif;
	font-size: 32px;
	font-weight: 900;
`

type HeroHeaderProps = {
	title: string
	children: ReactNode | ReactNode[]
}

const HeroHeader = ({title, children}: HeroHeaderProps) => {
	return (
		<Container>
			<HeroTitle>{title}</HeroTitle>
			{children}
		</Container>
	)
}

export default HeroHeader

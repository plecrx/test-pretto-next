import React, {ReactNode} from 'react'
import styled from 'styled-components'
import Checkbox from '../checkbox/checkbox.component'
import Options from '../options/options.component'

const Container = styled.div`
	display: flex;
	margin: 20px;
	justify-content: center;
	align-items: start;
	gap: 64px;
`

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: space-around;
	gap: 16px;
`

type CardProps = {
	checked: boolean
	onToggle: () => void
	title: string
	id: number
	status?: ReactNode
}

const Card = ({checked, onToggle, title, id, status}: CardProps) => {
	return (
		<Container>
			<Checkbox isChecked={checked} onChange={onToggle} />
			<Wrapper>
				<span>{title}</span>
				<div>{id}</div>
				<div>{status}</div>
			</Wrapper>
			<div style={{display: 'flex', marginTop: '-15px'}}>
				<Options />
			</div>
		</Container>
	)
}

export default Card

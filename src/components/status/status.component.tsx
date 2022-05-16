import React, {ReactNode} from 'react'
import styled from 'styled-components'
import {ExclamationMarkTriangle, ShieldCheck} from '@pretto/picto'

const Container = styled.div<{isProtected?: boolean}>`
	display: flex;
	color: ${({theme, isProtected}) =>
		isProtected ? theme.colors.primary2 : theme.colors.error1};
	gap: 8px;
`

type StatusProps = {
	isProtected?: boolean
	label: string
	children: ReactNode
}

const Status = ({isProtected, label, children}: StatusProps) => {
	return (
		<Container isProtected={isProtected}>
			{children}
			{label}
		</Container>
	)
}

export const ProtectedStatus = () => {
	return (
		<Status isProtected label={'Protected'}>
			<ShieldCheck />
		</Status>
	)
}

export const VulnerableStatus = () => {
	return (
		<Status label={'Vulnerable'}>
			<ExclamationMarkTriangle />
		</Status>
	)
}

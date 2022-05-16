import {CheckHandwrite} from '@pretto/picto'
import React from 'react'
import styled from 'styled-components'

const CheckboxContainer = styled.span`
	display: inline-block;
	height: 24px;
	position: relative;
	vertical-align: middle;
	width: 24px;
`

const CheckboxInput = styled.input.attrs({type: 'checkbox'})`
	appearance: none;
	border: 2px solid ${({theme}) => theme.colors.neutral3};
	border-radius: 4px;
	height: inherit;
	margin: 0;
	outline-offset: 0;
	padding: 0;
	transition: background-color 150ms ease-in-out 0s,
		border-color 150ms ease-in-out 0s;
	width: inherit;
	&:checked {
		background-color: ${({theme}) => theme.colors.primary2};
		border-color: ${({theme}) => theme.colors.primary2};
	}
	&:disabled {
		cursor: not-allowed;
	}
	&:enabled {
		cursor: pointer;
	}
	&:checked:focus {
		outline: 1px dashed ${({theme}) => theme.colors.primary2};
	}
	&:focus {
		outline: 1px dashed ${({theme}) => theme.colors.neutral3};
	}
`

const CheckboxSymbol = styled(CheckHandwrite)`
	fill: ${({theme}) => theme.colors.white};
	left: 0;
	pointer-events: none;
	position: absolute;
	top: 0;
	transition: visibility 0s linear 150ms;
	visibility: hidden;
	${CheckboxInput}:checked + & {
		transition: visibility 0s linear 0s;
		visibility: visible;
	}
`

interface CheckboxProps {
	id?: string
	isChecked: boolean
	onChange: React.ChangeEventHandler
}

const Checkbox = ({id, isChecked, onChange, ...props}: CheckboxProps) => (
	<CheckboxContainer {...props}>
		<CheckboxInput checked={isChecked} id={id} onChange={onChange} {...props} />
		<CheckboxSymbol />
	</CheckboxContainer>
)

export default Checkbox

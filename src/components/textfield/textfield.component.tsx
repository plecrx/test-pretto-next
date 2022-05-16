import {MagnifyingGlassLeft} from '@pretto/picto'
import React from 'react'
import styled from 'styled-components'

import {inputBook16} from '../../utils/typography'

const TextFieldContainer = styled.span`
	align-items: center;
	display: inline-flex;
`

const TextFieldInput = styled.input`
	${inputBook16};
	appearance: none;
	background-color: ${({theme}) => theme.colors.neutral4};
	border: 1px solid ${({theme}) => theme.colors.neutral3};
	border-radius: 8px;
	color: ${({theme}) => theme.colors.neutral1};
	margin-right: -40px;
	padding: 16px;
	padding-right: 56px;
	&:focus {
		border-color: ${({theme}) => theme.colors.neutral2};
		outline: transparent;
	}
	&::placeholder {
		color: ${({theme}) => theme.colors.neutral2};
	}
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	onChange: React.ChangeEventHandler
	value: string
}

const TextField = ({className, ...props}: TextFieldProps) => (
	<TextFieldContainer className={className}>
		<TextFieldInput {...props} />
		<MagnifyingGlassLeft />
	</TextFieldContainer>
)

export default TextField

import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.button`
	width: 100%;
	height: 64px;
	background-color: ${({theme}) => theme.colors.accent1};
	color: ${({theme}) => theme.colors.white};
	border-radius: 8px;
	&:hover {
		background-color: ${({theme}) => theme.colors.accent1Hover};
	}
	&:disabled {
		background-color: ${({theme}) => theme.colors.accent1Disabled};
	}
`

const LabelButton = styled.span`
	font-family: 'Inter', sans-serif;
	font-weight: 700;
	font-size: 18px;
	line-height: 16px;
`

const ButtonMore = () => {
	return (
		<ButtonContainer>
			<LabelButton>{'Afficher plus'}</LabelButton>
		</ButtonContainer>
	)
}

export default ButtonMore

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 8px;
	width: 40px;
	height: 40px;
	border-radius: 4px;
	cursor: pointer;
	&:hover {
		background-color: ${({theme}) => theme.colors.neutral4Hover};
	}
	&:focus {
		border: ${({theme}) => '1px dashed ' + theme.colors.accent1};
	}
	&:active {
		background-color: ${({theme}) => theme.colors.neutral4Hover};
	}
`

const Vector = () => (
	<svg
		width='6'
		height='20'
		viewBox='0 0 6 20'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M3 14C4.656 14 6 15.344 6 17C6 18.656 4.656 20 3 20C1.344 20 0 18.656 0 17C0 15.344 1.344 14 3 14ZM3 15C4.104 15 5 15.896 5 17C5 18.104 4.104 19 3 19C1.896 19 1 18.104 1 17C1 15.896 1.896 15 3 15ZM3 7C4.656 7 6 8.344 6 10C6 11.656 4.656 13 3 13C1.344 13 0 11.656 0 10C0 8.344 1.344 7 3 7ZM3 8C4.104 8 5 8.896 5 10C5 11.104 4.104 12 3 12C1.896 12 1 11.104 1 10C1 8.896 1.896 8 3 8ZM3 0C4.656 0 6 1.344 6 3C6 4.656 4.656 6 3 6C1.344 6 0 4.656 0 3C0 1.344 1.344 0 3 0ZM3 1C4.104 1 5 1.896 5 3C5 4.104 4.104 5 3 5C1.896 5 1 4.104 1 3C1 1.896 1.896 1 3 1Z'
			fill='#050505'
		/>
	</svg>
)

const Options = () => {
	return (
		<Container>
			<Vector />
		</Container>
	)
}

export default Options

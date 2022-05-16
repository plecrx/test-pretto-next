import React from 'react'
import styled from 'styled-components'
import {ChevronDownBold, ChevronUpBold} from '@pretto/picto'

const TableSortPosition = styled.div`
	display: flex;
	flex-direction: column;
`

const IconColor = styled.span<{hasFocus: boolean}>`
	display: flex;
	color: ${({theme, hasFocus}) =>
		hasFocus ? theme.colors.accent1 : theme.colors.neutral3};
`

type TableSortProps = {
	isDesc?: boolean
	isSorted?: boolean
}

const TableSort = ({isDesc, isSorted}: TableSortProps) => {
	return (
		<TableSortPosition>
			<IconColor hasFocus={Boolean(!isDesc && isSorted)}>
				<ChevronUpBold />
			</IconColor>
			<IconColor hasFocus={Boolean(isDesc && isSorted)}>
				<ChevronDownBold />
			</IconColor>
		</TableSortPosition>
	)
}

export default TableSort

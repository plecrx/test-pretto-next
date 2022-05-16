import React from 'react'
import {ButtonSquare} from '../button/button'
import {ChevronLeftBold, ChevronRightBold} from '@pretto/picto'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	justify-content: end;
	padding: 48px;
	gap: 8px;
`

type TablePaginationProps = {
	previousPage: () => void
	nextPage: () => void
	canPreviousPage: boolean
	canNextPage: boolean
}

const TablePagination = ({
	previousPage,
	nextPage,
	canPreviousPage,
	canNextPage,
}: TablePaginationProps) => {
	return (
		<Container>
			<ButtonSquare onClick={() => previousPage()} disabled={!canPreviousPage}>
				<ChevronLeftBold />
			</ButtonSquare>
			<ButtonSquare onClick={() => nextPage()} disabled={!canNextPage}>
				<ChevronRightBold />
			</ButtonSquare>
		</Container>
	)
}

export default TablePagination

import React, {ReactNode, MouseEvent} from 'react'
import {TableHeaderProps} from 'react-table'
import styled from 'styled-components'
import TableSort from './tableSort.component'

const Container = styled.th<{cursor?: string}>`
	cursor: ${p => p.cursor || 'default'};
`

const WrapperContent = styled.div`
	display: flex;
	justify-content: space-between;
`

type THeaderProps = {
	headerProps: TableHeaderProps
	label: ReactNode
	isSortable: boolean
	cursor?: string
	isSorted: boolean
	isSortedDesc?: boolean
	onClick?: (e: MouseEvent) => void
}

const TableHeader = ({
	headerProps,
	label,
	isSortable,
	cursor,
	isSorted,
	isSortedDesc,
	onClick,
}: THeaderProps) => (
	<Container onClick={onClick} cursor={cursor} {...headerProps}>
		<WrapperContent>
			{label}
			{isSortable && <TableSort isSorted={isSorted} isDesc={isSortedDesc} />}
		</WrapperContent>
	</Container>
)

export default TableHeader

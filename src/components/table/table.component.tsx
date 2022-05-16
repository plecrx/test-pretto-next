import React from 'react'
import {useTable, Column, useRowSelect, useSortBy} from 'react-table'
import styled from 'styled-components'
import Checkbox from '../checkbox/checkbox.component'
import TableHeader from './tableHeader.component'
import Pagination from './tablePagination.component'
import Options from '../options/options.component'

const DataTable = styled.table`
	width: 100%;
	border-spacing: 0;
	th,
	td {
		margin: 0;
		padding: 20px 24px;
		:last-child {
			border-right: 0;
		}
	}
`

const TableRow = styled.tr<{
	isSelectionStart?: boolean
	isSelectionEnd?: boolean
	isSelected: boolean
}>`
	td {
		background-color: ${({theme, isSelected}) =>
			isSelected ? theme.colors.neutral4Hover : theme.colors.white};
	}
	td:first-child {
		border-top-left-radius: ${({isSelectionStart}) => isSelectionStart && '8px'};
		border-bottom-left-radius: ${({isSelectionEnd}) => isSelectionEnd && '8px'};
	}
	td:last-child {
		border-top-right-radius: ${({isSelectionStart}) => isSelectionStart && '8px'};
		border-bottom-right-radius: ${({isSelectionEnd}) => isSelectionEnd && '8px'};
	}
`

const TableRowHeader = styled.tr`
	margin: 24px;
	padding: 24px;
	color: ${({theme}) => theme.colors.neutral2};
	th:first-child {
		border-top-left-radius: 8px;
		border-bottom-left-radius: 8px;
	}
	th:last-child {
		border-top-right-radius: 8px;
		border-bottom-right-radius: 8px;
	}
	th {
		background-color: ${({theme}) => theme.colors.neutral4Hover};
	}
`

const TableBody = styled.tbody`
	:before {
		content: '-';
		color: ${({theme}) => theme.colors.white};
		display: block;
		line-height: 24px;
	}
`

type TableProps = {
	columns: Array<Column<{[x: string]: unknown}>>
	data: Array<{[x: string]: unknown}>
}

const Table = ({columns, data}: TableProps) => {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		selectedFlatRows,
		nextPage,
		previousPage,
		canPreviousPage,
		canNextPage,
	} = useTable({columns, data}, useSortBy, useRowSelect, hooks => {
		hooks.visibleColumns.push(columns => [
			{
				id: 'selection',
				Header: ({getToggleAllRowsSelectedProps}: any) => (
					<Checkbox type='checkbox' {...getToggleAllRowsSelectedProps()} />
				),
				Cell: ({row}: any) => (
					<Checkbox type='checkbox' {...row.getToggleRowSelectedProps()} />
				),
			},
			...columns,
			{
				id: 'action',
				Cell: ({row}: any) => <Options />,
			},
		])
	})

	const isSelectionStart = (index: number): boolean =>
		!selectedFlatRows.includes(rows[index - 1])
	const isSelectionEnd = (index: number): boolean =>
		!selectedFlatRows.includes(rows[index + 1])

	return (
		<div>
			<DataTable {...getTableProps()}>
				<thead>
					{headerGroups.map(headerGroup => (
						// eslint-disable-next-line react/jsx-key
						<TableRowHeader {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map(column => {
								const {style, onClick} = column.getSortByToggleProps()
								return (
									// eslint-disable-next-line react/jsx-key
									<TableHeader
										headerProps={column.getHeaderProps()}
										label={column.render('Header')}
										isSortable={!(column.id === 'selection' || column.id === 'action')}
										isSorted={column.isSorted}
										isSortedDesc={column.isSortedDesc}
										cursor={style?.cursor}
										onClick={onClick}
									/>
								)
							})}
						</TableRowHeader>
					))}
				</thead>
				<TableBody {...getTableBodyProps()}>
					{rows.map((row, rowIndex) => {
						prepareRow(row)
						return (
							// eslint-disable-next-line react/jsx-key
							<TableRow
								{...row.getRowProps()}
								isSelected={selectedFlatRows.includes(row)}
								isSelectionEnd={isSelectionEnd(rowIndex)}
								isSelectionStart={isSelectionStart(rowIndex)}
							>
								{row.cells.map(cell => (
									// eslint-disable-next-line react/jsx-key
									<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
								))}
							</TableRow>
						)
					})}
				</TableBody>
			</DataTable>
			<Pagination
				previousPage={previousPage}
				nextPage={nextPage}
				canPreviousPage={canPreviousPage}
				canNextPage={canNextPage}
			/>
		</div>
	)
}

export default Table

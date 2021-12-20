import PropTypes from 'prop-types'
import { useTable } from 'react-table'
import NextLink from 'next/link'
import { Link, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'

const DataTable = ({ columns, data }) => {
  const tableInstance = useTable({ columns, data })
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance

  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup, index) => (
          <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
            {headerGroup.headers.map((column, index) => (
              <Th {...column.getHeaderProps()} key={index}>
                {column.render('Header')}
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row)
          return (
            <Tr {...row.getRowProps()} key={index}>
              {row.cells.map((cell, index) => {
                return cell.column.Header === 'Country' ? (
                  <Td {...cell.getCellProps()} key={index}>
                    <NextLink href={`/country/${cell.value}`}>
                      <Link>{cell.render('Cell')}</Link>
                    </NextLink>
                  </Td>
                ) : (
                  <Td {...cell.getCellProps()} key={index}>
                    {cell.render('Cell')}
                  </Td>
                )
              })}
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  )
}

DataTable.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array
}

export default DataTable

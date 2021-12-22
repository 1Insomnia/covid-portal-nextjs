import PropTypes from 'prop-types'
import { useTable } from 'react-table'
import { Table, Thead, Tbody, Tr, Th, Td, Box } from '@chakra-ui/react'

const DataTable = ({ columns, data }) => {
  const tableInstance = useTable({ columns, data })
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance

  return (
    <Box bg="darker" p={4} rounded="xl" w="100%" mt={10}>
      <Table {...getTableProps()} w="100%">
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
                {row.cells.map((cell, index) => (
                  <Td {...cell.getCellProps()} key={index}>
                    {cell.render('Cell')}
                  </Td>
                ))}
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </Box>
  )
}

DataTable.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array
}

export default DataTable

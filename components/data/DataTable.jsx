import PropTypes from 'prop-types'
import { useSortBy, useTable } from 'react-table'

const DataTable = ({ columns, data }) => {
  const tableInstance = useTable({ columns, data }, useSortBy)
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance

  return (
    <div className="overflow-x-auto w-full h-screen-3/4 overflow-y-auto table-wrapper">
      <table {...getTableProps()} className="text-left w-full bg-blue">
        <thead className="block bg-blue-light text-white w-full sticky top-0">
          {headerGroups.map((headerGroup, index) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              key={index}
              className="flex w-full items-center"
            >
              {headerGroup.headers.map((column, index) => (
                <th
                  {...column.getHeaderProps()}
                  key={index}
                  className="py-3 px-6 w-1/5 text-left whitespace-nowrap"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          {...getTableBodyProps()}
          className="flex flex-col items-center justify-between w-full text-sm"
        >
          {rows.map((row, index) => {
            prepareRow(row)
            return (
              <tr
                {...row.getRowProps()}
                key={index}
                className="flex w-full items-center border-b border-gray-200 hover:bg-gray-100"
              >
                {row.cells.map((cell, index) => (
                  <td
                    {...cell.getCellProps()}
                    key={index}
                    className="py-3 px-6 w-1/5 text-left whitespace-nowrap"
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

DataTable.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array
}

export default DataTable

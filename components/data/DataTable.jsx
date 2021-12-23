import PropTypes from 'prop-types'
import { useTable } from 'react-table'

const DataTable = ({ columns, data }) => {
  const tableInstance = useTable({ columns, data })
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance

  return (
    <div className="p-4 overflow-auto">
      <table
        {...getTableProps()}
        className="text-left w-full bg-blue  rounded-xl"
      >
        <thead className="bg-blue-light flex text-white w-full rounded-t-xl">
          {headerGroups.map((headerGroup, index) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              key={index}
              className="flex items-center w-full mb-4"
            >
              {headerGroup.headers.map((column, index) => (
                <th
                  {...column.getHeaderProps()}
                  key={index}
                  className="p-4 w-1/5"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          {...getTableBodyProps()}
          className="flex flex-col items-center justify-between overflow-y-scroll w-full h-screen-1/2"
        >
          {rows.map((row, index) => {
            prepareRow(row)
            return (
              <tr
                {...row.getRowProps()}
                key={index}
                className="flex w-full mb-4 items-center"
              >
                {row.cells.map((cell, index) => (
                  <td
                    {...cell.getCellProps()}
                    key={index}
                    className="p-4 w-1/5"
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

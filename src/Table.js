import React from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Peeps</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const rows = props.peepData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.peep}</td>
        <td>
          <button onClick={() => props.removePeep(index)}>Delete</button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

const Table = (props) => {
    const {peepData, removePeep} = props

    return (
      <table>
        <TableHeader />
        <TableBody peepData={peepData} removePeep={removePeep} />
      </table>
    )
}

export default Table

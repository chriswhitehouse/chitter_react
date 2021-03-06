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
  const rows = props.peepData.slice().reverse().map((row, index) => {
    console.log(row)
    return (
      <tr key={index}>
        <td>{row.body}</td>
        <td>
          <button onClick={() => props.removePeep(props.peepData.length -1 -index)}>Delete</button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

const Table = (props) => {
  const { peepData, removePeep } = props

  return (
    <table>
      <TableHeader />
      <TableBody peepData={peepData} removePeep={removePeep} />
    </table>
  )
}

export default Table

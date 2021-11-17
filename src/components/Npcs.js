import React from 'react'

const Npcs = (props) => {
  return (
    <div>
      <table>
        <caption><strong>NPCs</strong></caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Race</th>
            <th>Alignment</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {props.npcs.map(npc => {
            return (
            <tr key={npc.id}>
              <td>{npc.name}</td>
              <td>{npc.species}</td>
              <td>{npc.alignment}</td>
              <td><button>View</button></td>
            </tr>
          )})}
        </tbody>
      </table>
    </div>
  )
}

export default Npcs

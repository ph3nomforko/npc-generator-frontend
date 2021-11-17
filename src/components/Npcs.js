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
            <th>Occupation</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.occupations.map(occupation => {
            return occupation.npcs.map(npc => {
              return <tr key={npc.id}>
                <td>{npc.name}</td>
                <td>{npc.species}</td>
                <td>{npc.occupation.name}</td>
                <td><button>View</button></td>
              </tr>
            })
          })}
        </tbody>
      </table>
    </div>
  )
}

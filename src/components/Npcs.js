import React from 'react'
import { Link } from 'react-router-dom'

const Npcs = (props) => {

  let npcs = props.npcs.sort((a,b) =>{
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
  })

  return (
    <div>
      <table>
        <caption><strong>NPCs</strong></caption>
        <thead>
          <tr>
            <th style={{textAlign:'left'}}>Name</th>
            <th>Race</th>
            <th>Class</th>
            <th>Alignment</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {npcs.map(npc => { return (
            <tr key={npc.id}>
              <td>{npc.name}</td>
              <td>{npc.species}</td>
              <td>{npc.npc_class}</td>
              <td>{npc.alignment}</td>
              <td>
                <Link to={`/occupations/${npc.occupation.id}/npcs/${npc.id}`}>
                  <button>View</button>
                </Link>
              </td>
            </tr> )})}
        </tbody>
      </table>
        <Link to={`/occupations/${props.match.params.id}/new`}>
          <button>Add an NPC</button>
        </Link>
    </div>
  )
}

export default Npcs

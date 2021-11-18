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
      <table className="highlight">
        <thead>
          <tr>
            <th style={{textAlign:'left'}}>Name</th>
            <th style={{textAlign:'center'}}>Race</th>
            <th style={{textAlign:'center'}}>Class</th>
            <th style={{textAlign:'center'}}>Alignment</th>
            <th style={{textAlign:'center'}}>View NPC</th>
          </tr>
        </thead>
        <tbody>
          {npcs.map(npc => { return (
            <tr key={npc.id}>
              <td>{npc.name}</td>
              <td style={{textAlign:'center'}}>{npc.species}</td>
              <td style={{textAlign:'center'}}>{npc.npc_class}</td>
              <td style={{textAlign:'center'}}>{npc.alignment}</td>
              <td style={{textAlign:'center'}}>
                <Link className="waves-effect waves-light btn-small grey darken-1" to={`/occupations/${npc.occupation.id}/npcs/${npc.id}`}>
                  View
                </Link>
              </td>
            </tr> )})}
        </tbody>
      </table>
      <div className="center-align">
        <h5>Add an NPC</h5>
        <p>Don't see an NPC that fits your idea? Add one for your next session!</p>
        <Link className="waves-effect waves-light btn-small orange darken-4" to={`/occupations/${props.match.params.id}/new`}>
          Add an NPC
        </Link>
      </div>
    </div>
  )
}

export default Npcs

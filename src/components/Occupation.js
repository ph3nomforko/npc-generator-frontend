import React from 'react'
import NpcsContainer from '../containers/NpcsContainer'

const Occupation = props => {

  let occupation = props.occupations.find(({id}) => id === parseInt(props.match.params.id, 10))

  if (occupation) {
    return (
      <div>
        <table>
          <caption>
            <h3>{occupation.name}</h3>
            <strong>NPCs</strong>
          </caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Race</th>
              <th>Alignment</th>
              <th>Appearance</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {occupation.npcs.map(npc => {
              return (
                <tr key={npc.id}>
                  <td>{npc.name}</td>
                  <td style={{textAlign:'center'}}>{npc.alignment}</td>
                  <td style={{textAlign:'center'}}>{npc.appearance}</td>
                  <td style={{textAlign:'center'}}><button>View</button></td>
                </tr>
              )})
            }
          </tbody>
        </table>
        <NpcsContainer />
        <button>Add an NPC</button>
      </div>
    )
  } else {
    return null
  }

}

export default Occupation

import React from 'react';
import { Link } from 'react-router-dom'

const Occupations = props => {

  return (
    <div>
      <table>
        <caption>
          <h3>Occupations</h3>
        </caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>NPC Count</th>
            <th>View NPCs</th>
            <th>Add an NPC</th>
          </tr>
        </thead>
        <tbody>
        {props.occupations.map(occupation => {
          return (
            <tr key={occupation.id}>
              <td>{occupation.name}</td>
              <td style={{textAlign:'center'}}>{occupation.npcs.length}</td>
              <td style={{textAlign:'center'}}>
                <Link to={`/occupations/${occupation.id}`}><button>View</button></Link>
              </td>
              <td style={{textAlign:'center'}}><button>Add</button></td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  )
}

export default Occupations

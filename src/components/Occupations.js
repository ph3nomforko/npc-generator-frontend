import React from 'react';
import { Link } from 'react-router-dom'

const Occupations = props => {

  let occupations = props.occupations.sort((a,b) =>{
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
  })

  return (
    <div className="container">
      <h3 style={{textAlign:'center'}}>Occupations</h3>
      <table className="highlight">
        <thead>
          <tr>
            <th style={{textAlign:'left'}}>Name</th>
            <th style={{textAlign:'center'}}>NPC Count</th>
            <th style={{textAlign:'center'}}>View NPCs</th>
          </tr>
        </thead>
        <tbody>
        {occupations.map(occupation => {
          return (
            <tr key={occupation.id}>
              <td>{occupation.name}</td>
              <td style={{textAlign:'center'}}>{occupation.npcs.length}</td>
              <td style={{textAlign:'center'}}>
                <Link to={`/occupations/${occupation.id}`}><button>View</button></Link>
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>
      <h5>Add an Occupation</h5>
      <p>Don't see an NPC role/occupation that fits your needs? Then create your own and then create its first NPC!</p>
      <Link to={'/occupations/new'}>
        <button>Add an Occupation</button>
      </Link>
    </div>
  )
}

export default Occupations

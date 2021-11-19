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
      <h4 style={{textAlign:'center'}}>NPC Roles and Occupations</h4>
      <p style={{textAlign:'center'}}><b>Find your next NPC through this alphabatized list of their various roles and occupations</b></p>
      <table className="highlight">
        <thead>
          <tr>
            <th style={{textAlign:'left'}}>Name</th>
            <th style={{textAlign:'center'}}>NPC Count</th>
            <th style={{textAlign:'center'}}>View NPCs</th>
            <th style={{textAlign:'center'}}>Quick NPC</th>
          </tr>
        </thead>
        <tbody>
        {occupations.map(occupation => {
          return (
            <tr key={occupation.id}>
              <td>{occupation.name}</td>
              <td style={{textAlign:'center'}}>{occupation.npcs.length}</td>
              <td style={{textAlign:'center'}}>
                <Link className="waves-effect waves-light btn-small grey darken-1" to={`/occupations/${occupation.id}`}>View</Link>
              </td>
              <td style={{textAlign:'center'}}>
                <button className="btn-small grey darken-1">Quick NPC</button>
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>
      <div className="center-align">
        <h5>Add an Occupation</h5>
        <p>Don't see an NPC role/occupation that fits your needs? Then create your own and then create its first NPC!</p>
        <Link className="waves-effect waves-light btn-small orange darken-4" to={'/occupations/new'}>
          Add an Occupation
        </Link>
      </div>
    </div>
  )
}

export default Occupations

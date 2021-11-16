import React from 'react';
import Occupation from './Occupation'
import { Routes, Route, Link } from 'react-router-dom'

const Occupations = props => {

  return (
    <div>
      <table>
        <caption>
          <strong>Occupations</strong><br/>
          <Link to="/occupations/new">
            <button>Add a New Occupation</button>
          </Link>
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
                <Routes>
                  <Route path='/occupations/:id' element={<Occupation occupation={occupation} />} />
                </Routes>
                <Link to="/occupations/:id">
                  <button>View</button>
                </Link>
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

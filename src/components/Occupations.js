import React from 'react';

const Occupations = props => {

  return (
    <div>
      <strong>Occupations</strong>
      {props.occupations.map(occupation => {
        return (
          <li key={occupation.id}>
          {occupation.name} ({occupation.npcs.length})
          <button>View</button>
          <button>Add an NPC</button>
          </li>
        )
      })}
    </div>
  )
}

export default Occupations

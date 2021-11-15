import React from 'react';

const Occupations = props => {
  return (
    <div>
      <strong>Occupations</strong>
      {props.occupations.map(occupation => <li key={occupation.id}>{occupation.name}</li>)}
    </div>
  )
}

export default Occupations

import React from 'react'
import NpcsContainer from '../containers/NpcsContainer'

const Occupation = props => {

  let occupation = props.occupations.find(({id}) => id === parseInt(props.match.params.id, 10))

  if (occupation) {
    return (
      <div>
        <h3>{occupation.name}</h3>
        <NpcsContainer occupation={occupation} />
      </div>
    )
  } else {
    return null
  }

}

export default Occupation

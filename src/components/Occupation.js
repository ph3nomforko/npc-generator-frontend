import React from 'react'
import NpcsContainer from '../containers/NpcsContainer'

const Occupation = props => {

  let occupation = props.occupations.find(({id}) => id === parseInt(props.match.params.id, 10))

  if (occupation) {
    return (
      <div className="container">
        <h4 style={{textAlign:"center"}}>{occupation.name}</h4>
        <NpcsContainer occupation={occupation} />
      </div>
    )
  } else {
    return null
  }

}

export default Occupation

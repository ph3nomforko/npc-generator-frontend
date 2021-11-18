import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = props => {

  return (
    <div>
      <h1 style={{textAlign:'center'}}>NPC Generator</h1>
      <Link to='/occupations' style={{paddingRight: '10px'}}> Occupations </Link>
      <Link to='/occupations/new'> Add an Occupation </Link>
    </div>
  )
}

export default NavBar

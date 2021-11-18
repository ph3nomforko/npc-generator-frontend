import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = props => {

  return (
    <nav>
      <div className="nav-wrapper grey darken-4">
        <a href="/#" className="brand-logo" style={{paddingLeft: '10px'}}>NPC Generator</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to='/occupations' style={{paddingRight: '10px'}}> Occupations </Link></li>
          <li><Link to='/occupations/new'> Add an Occupation </Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar

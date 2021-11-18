import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {

  return (
    <div className="container center-align">
      <h2>Welcome!</h2>
      <h6>This is a quick generator and database for NPCs to use in your next TTRPG</h6>
      <Link className="waves-effect waves-light btn-small orange darken-4" to="/occupations">
        Enter
      </Link>
    </div>
  )

}

export default Welcome

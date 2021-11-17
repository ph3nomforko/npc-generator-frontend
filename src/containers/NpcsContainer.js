import React from 'react'
import NpcInput from '../components/NpcInput'
import Npcs from '../components/Npcs'
import Npc from '../components/Npc'
//import { Route, Switch } from 'react-router-dom'

class NpcsContainer extends React.Component {

  render() {
    return (
      <div>
          <NpcInput occupation={this.props.occupation} />
          <Npcs npcs={this.props.occupation.npcs} />
          <Npc npc={this.props.occupation.npcs} />
      </div>
    )
  }
}

export default NpcsContainer

import React from 'react'
import NpcInput from '../components/NpcInput'
import Npcs from '../components/Npcs'
import Npc from '../components/Npc'
//import { Route, Switch } from 'react-router-dom'

class NpcsContainer extends React.Component {

  render() {
    return (
      <div>
          <Npcs npcs={this.props.occupation.npcs} />
          <Npc npc={this.props.occupation.npcs} />
          <NpcInput occupation={this.props.occupation} />
      </div>
    )
  }
}

export default NpcsContainer

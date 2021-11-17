import React from 'react'
import NpcInput from '../components/NpcInput'
import Npcs from '../components/Npcs'

class NpcsContainer extends React.Component {

  render() {
    return (
      <div>
        A Wild NPC Container
        <Npcs npcs={this.props.occupation.npcs}/>
        <NpcInput />
      </div>
    )
  }
}

export default NpcsContainer

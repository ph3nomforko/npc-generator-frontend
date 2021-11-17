import React from 'react'
import NpcInput from '../components/NpcInput'
import NpcEdit from '../components/NpcEdit'
import Npcs from '../components/Npcs'
import Npc from '../components/Npc'
import { Route, Switch } from 'react-router-dom'

class NpcsContainer extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path='/occupations/:id/new' render={() => <NpcInput occupation={this.props.occupation} />} />
          <Route path='/occupations/:id/npcs/:id' render={(routerProps) => <Npc {...routerProps} npcs={this.props.occupation.npcs} />} />
          <Route path='/occupations/:id/npcs/:id/edit' render={(routerProps) => <NpcEdit {...routerProps} occupation={this.props.occupation} />} />
          <Route path='/occupations/:id/' render={(routerProps) => <Npcs {...routerProps} npcs={this.props.occupation.npcs} />} />
        </Switch>
      </div>
    )
  }
}

export default NpcsContainer

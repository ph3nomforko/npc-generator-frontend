import React from 'react'
import { connect } from 'react-redux'
import { deleteNpc } from '../actions/deleteNpc'
import NpcEdit from '../components/NpcEdit'

const Npc = props => {

  let npc = props.npcs.find(({id}) => id === parseInt(props.match.params.id, 10))

  const handleDelete = event => {
    props.deleteNpc(npc.id, npc.occupation.id)
  }

  if (npc) {
    return (
      <div className="container">
        <h5>{npc.name}</h5>
        <p><b>Race:</b> {npc.species}<br/>
        <b>Class:</b> {npc.npc_class}<br/>
        <b>Alignment:</b> {npc.alignment}<br/>
        <b>Appearance:</b> {npc.appearance}<br/>
        <b>Strong Ability:</b> {npc.strong_ability}<br/>
        <b>Weak Ability:</b> {npc.weak_ability}<br/>
        <b>Behavior:</b> {npc.behavior}<br/>
        <b>Plot Key/Hook:</b> {npc.plot_key}</p>
        <br/><NpcEdit npc={npc} /><br/>
        <button className="waves-effect waves-light btn-small red darken-4" onClick={handleDelete}>Delete NPC</button>
      </div>
    )
  } else {
    return null
  }

}

export default connect(null, {deleteNpc})(Npc)

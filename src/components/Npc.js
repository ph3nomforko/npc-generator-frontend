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
      <div>
        <h4>{npc.name}</h4>
        <p><b>Race:</b> {npc.species}</p>
        <p><b>Class:</b> {npc.npc_class}</p>
        <p><b>Alignment:</b> {npc.alignment}</p>
        <p><b>Appearance:</b> {npc.appearance}</p>
        <p><b>Strong Ability:</b> {npc.strong_ability}</p>
        <p><b>Weak Ability:</b> {npc.weak_ability}</p>
        <p><b>Behavior:</b> {npc.behavior}</p>
        <p><b>Plot Key/Hook:</b> {npc.plot_key}</p>
        <button onClick={handleDelete}>Delete NPC</button>
        <NpcEdit npc={npc} />
      </div>
    )
  } else {
    return null
  }

}

export default connect(null, {deleteNpc})(Npc)

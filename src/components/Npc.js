import React from 'react'
import { connect } from 'react-redux'
import { deleteNpc } from '../actions/deleteNpc'

const Npc = props => {

  let npc = props.npcs.find(({id}) => id === parseInt(props.match.params.id, 10))

  const handleDelete = (event) => {
    console.log(npc)
    props.deleteNpc(npc.id, npc.occupation.id)
  }

  if (npc) {
    return (
      <div>
        <h4>{npc.name}</h4>
        <p><b>Race:</b> {npc.species}</p>
        <p><b>Alignment:</b> {npc.alignment}</p>
        <p><b>Strong Ability:</b> {npc.strong_ability}</p>
        <p><b>Weak Ability:</b> {npc.weak_ability}</p>
        <p><b>Behavior:</b> {npc.behavior}</p>
        <p><b>Plot Key/Hook:</b> {npc.plot_key}</p>
        <button onClick={handleDelete}>Delete NPC</button>
      </div>
    )
  } else {
    return null
  }

}

export default connect(null, {deleteNpc})(Npc)

import React from 'react'

const Npc = props => {

  //let npc = props.npc.find(({id}) => id === parseInt(props.match.params.id, 10))

  if (props.npc) {
    return (
      <div>
        <h3>{props.npc.name}</h3>
      </div>
    )
  } else {
    return null
  }

}

export default Npc

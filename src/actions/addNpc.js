export const addNpc = (npc, occupationId) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/occupations/${occupationId}/npcs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(npc)
    })
    .then(response => response.json())
    .then(occupation => dispatch({type:'NPC_UPDATE', payload: occupation}))
  }

}

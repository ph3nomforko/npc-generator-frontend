export const addNpc = (npc, occupationId) => {

  return (dispatch) => {
    fetch(`http://[::1]:3000/api/v1/occupations/${occupationId}/npcs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(npc)
    })
    .then(response => response.json())
    .then(occupation => dispatch({type:'ADD_NPC', payload: occupation}))
  }

}

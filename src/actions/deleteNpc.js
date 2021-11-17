export const deleteNpc = (npcId, occupationId) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/occupations/${occupationId}/npcs/${npcId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(occupation => dispatch({type: 'DELETE_NPC', payload: occupation}))
  }

}

export const editNpc = (data) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/occupations/${data.occupationId}/npcs/${data.npcId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(occupation => dispatch({type:'NPC_UPDATE', payload: occupation}))
  }

}

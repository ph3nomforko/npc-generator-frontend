// Function to add an occupation to the API from Add Occupation Form

export const addOccupation = formData => {
  return dispatch => {
    fetch('http://[::1]:3000/api/v1/occupations', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(occupation => dispatch({type: 'ADD_OCCUPATION', payload: occupation}))
  }
}

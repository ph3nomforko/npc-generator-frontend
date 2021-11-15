// Functional component to fetch occupations from database.

export const fetchOccupations = () => {
  return (dispatch) => {
    fetch('http://[::1]:3000/api/v1/occupations')
    .then(response => response.json())
    .then(occupations => dispatch({
      type: 'FETCH_OCCUPATIONS',
      payload: occupations
    }))
  }
}

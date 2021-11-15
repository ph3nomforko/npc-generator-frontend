export const fetchOccupations = () => {
  return (dispatch) => {
    fetch('http://[::1]:3000/api/v1/occupations')
    .then(response => response.json())
    .then(data => console.log(data))
  }
}

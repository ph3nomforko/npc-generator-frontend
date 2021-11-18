// Reducer for Occupations
export default function occupationReducer(state = {occupations: []}, action) {

  switch (action.type) {
    case 'FETCH_OCCUPATIONS':
      return {occupations: action.payload}
    case 'ADD_OCCUPATION':
      return {...state, occupations: [...state.occupations, action.payload]}
    case 'NPC_UPDATE':
      return {...state, occupations: state.occupations.map(occupation => {
        if (occupation.id === action.payload.id) {
          return action.payload
        } else {
          return occupation
        }
      })}
    default:
      return state
    }

}

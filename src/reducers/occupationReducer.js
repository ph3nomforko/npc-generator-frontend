// Reducer for Occupations
export default function occupationReducer(state = {occupations: []}, action) {
  debugger
  switch (action.type) {
    case 'FETCH_OCCUPATIONS':
      return {occupations: action.payload}
    case 'ADD_OCCUPATION':
      return {...state, occupations: [...state.occupations, action.payload]}
    case 'ADD_NPC':
      return {}
    default:
      return state
    }
}

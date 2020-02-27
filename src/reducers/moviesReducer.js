import { GET_MOVIE, SEARCH_MOVIES, SET_MOVIES } from '../actions/actionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case SET_MOVIES:
      return [...action.payload]
    case GET_MOVIE:
      return [action.payload]
    case SEARCH_MOVIES:
      return {
        ...state,
        text: action.text
      }
    default:
      return state
  }
}

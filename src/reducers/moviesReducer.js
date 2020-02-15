import { GET_MOVIE, SET_MOVIES } from '../actions/actionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case SET_MOVIES:
      return [...action.payload]
    case GET_MOVIE:
      return [action.payload]
    default:
      return state
  }
}

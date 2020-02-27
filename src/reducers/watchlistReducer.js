import { GET_WATCHLIST } from '../actions/actionTypes'

export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_WATCHLIST:
      return [action.payload]
    default:
      return state
  }
}

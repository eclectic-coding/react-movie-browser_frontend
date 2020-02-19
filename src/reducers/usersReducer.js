import { LOGIN_USER, LOGOUT_USER, GET_USER } from '../actions/actionTypes'

export default function reducer(
  state = {
    currentUser: {}
  },
  action
) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, currentUser: action.payload }
    case LOGOUT_USER:
      return { ...state, currentUser: {} }
    case GET_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state
  }
}

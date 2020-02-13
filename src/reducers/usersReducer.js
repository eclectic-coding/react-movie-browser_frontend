import { LOGIN_USER, LOGOUT_USER } from '../actions/actionTypes'

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
    default:
      return state
  }
}

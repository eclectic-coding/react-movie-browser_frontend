import { combineReducers } from 'redux'
import movies from './moviesReducer'
import users from './usersReducer'

export default combineReducers({
  movies,
  users,
})

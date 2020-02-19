import { combineReducers } from 'redux'
import movies from './moviesReducer'
import users from './usersReducer'
import watchlists from './watchlistReducer'

export default combineReducers({
  movies,
  users,
  watchlists
})

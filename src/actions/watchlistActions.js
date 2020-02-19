import { GET_WATCHLIST } from './actionTypes'

export const getWatchlist = userId => {
  console.log(userId)
  return dispatch => {
    return fetch('http://localhost:3000/watchlists')
      .then(resp => resp.json())
      .then(watchlists => {
        dispatch({ type: GET_WATCHLIST, payload: watchlists })
      })
  }
  // const userId = currentUser.data.id
  // // dispatch({ type: GET_WATCHLIST, payload: state })
  // console.log(userId)
}

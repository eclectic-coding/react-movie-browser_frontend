import { SET_MOVIES, GET_MOVIE, SEARCH_MOVIES, GET_WATCHLIST } from './actionTypes'

export const fetchMovies = () => {
  return dispatch => {
    return fetch('http://localhost:3000/movies')
      .then(resp => resp.json())
      .then(movies => {
        dispatch({ type: SET_MOVIES, payload: movies })
      })
  }
}

export const fetchMovieId = id => {
  return dispatch => {
    return fetch(`http://localhost:3000/movies/${id}`)
      .then(resp => resp.json())
      .then(movies => {
        dispatch({ type: GET_MOVIE, payload: movies })
      })
  }
}

// export const searchMovieTitle = (text = '') => ({
//   type: SEARCH_MOVIES,
//   text
// })

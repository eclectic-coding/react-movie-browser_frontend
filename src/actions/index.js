import { SET_MOVIES } from './actionTypes'

export const fetchMovies = () => {
  return dispatch => {
    return fetch('http://localhost:3000/movies')
      .then(resp => resp.json())
      .then(movies => {
        dispatch({ type: SET_MOVIES, payload: movies })
      })
  }
}

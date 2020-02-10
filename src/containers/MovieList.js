import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../actions/index'

class MovieList extends Component {
  componentDidMount() {
    this.props.fetchMovies()
  }

  render() {
    const movies = this.props.movies.map((movie, index) => (
      <li key={index}>{movie.title}</li>
    ))
    return (
      <div>
        <h1>Hello from the Movie List</h1>
        <p>{movies}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies,
  }
}

export default connect(mapStateToProps, { fetchMovies })(MovieList)

import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux'
import { fetchMovieId } from '../actions/movieActions'
// Components
import MovieDetail from '../components/MovieDetail'
// Styling Components

class MovieShow extends Component {
  componentDidMount() {
    const { match } = this.props
    this.props.fetchMovieId(match.params.id)
  }

  render() {
    const movies = this.props.movies
    const movie = movies.map(movie => (
      <MovieDetail key={movie.id} movie={movie} {...movie} />
    ))

    return <div>{movie}</div>
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps, { fetchMovieId })(MovieShow)

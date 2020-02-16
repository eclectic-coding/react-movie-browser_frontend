import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux'
import { fetchMovieId } from '../actions/movieActions'
// Components
import MovieDetail from '../components/MovieDetail'
import MovieCard from '../components/MovieCard'

class MovieShow extends Component {
  componentDidMount() {
    let paramsId = parseInt(this.props.match.params.id, 10)
    console.log(paramsId)
    this.props.fetchMovieId(paramsId)
  }

  render() {
    const movies = this.props.movies
      .slice(0, 1)
      .map((movie, index) => <MovieDetail key={movie.id} movie={movie} {...movie} />)

    return <div>{movies}</div>
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps, { fetchMovieId })(MovieShow)

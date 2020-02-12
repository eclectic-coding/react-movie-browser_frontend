import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../actions/index'
import MovieCard from '../components/MovieCard'

class MovieList extends Component {
  componentDidMount() {
    this.props.fetchMovies()
  }

  render() {
    const movies = this.props.movies
      .slice(0, 20)
      .map((movie, index) => <MovieCard key={index} movie={movie} {...movie} />)
    console.log(this.props.movies.id)
    return (
      <div className="d-flex flex-wrap justify-content-md-between justify-content-center">
        {movies}
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

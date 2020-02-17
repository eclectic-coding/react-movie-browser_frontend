import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux'
import { fetchMovies } from '../actions/movieActions'
// Components
import MovieCard from '../components/MovieCard'
// Styling Components
import { Container } from 'react-bootstrap'

class MovieList extends Component {
  componentDidMount() {
    this.props.fetchMovies()
  }

  render() {
    const movies = this.props.movies
      .slice(0, 20)
      .map((movie, index) => <MovieCard key={movie.id} movie={movie} {...movie} />)
    return (
      <div className="bg-danger background__cover">
        <Container
          className="d-flex flex-wrap justify-content-md-between justify-content-center"
          style={{ paddingTop: '2rem' }}
        >
          {movies}
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps, { fetchMovies })(MovieList)

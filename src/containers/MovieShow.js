import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux'
import { fetchMovieId } from '../actions/movieActions'
// Components

// Styling Components
import { Container } from 'react-bootstrap'
import MovieDetail from '../components/MovieDetail'

class MovieShow extends Component {
  // componentDidMount() {
  //   console.log(this.props)
  //   const paramsId = parseInt(this.props.match.params.id, 10)
  //   console.log(paramsId)
  //   this.props.fetchMovieId()
  // }

  componentDidMount() {
    const { match } = this.props
    this.props.fetchMovieId(match.params.id)
  }

  render() {
    const movies = this.props.movies
    const movie = movies.map(movie => (
      <MovieDetail key={movie.id} movie={movie} {...movie} />
    ))

    return (
      <Container className="d-flex flex-column" style={{ marginTop: '10rem' }}>
        <h2>Movie Detail Container</h2>
        {movie}
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps, { fetchMovieId })(MovieShow)

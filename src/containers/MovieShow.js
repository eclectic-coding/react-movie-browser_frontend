import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux'
import { fetchMovies } from '../actions/movieActions'
// Styling Components
import { Container } from 'react-bootstrap'
import MovieDetail from '../components/MovieDetail'

class MovieShow extends Component {
  componentDidMount() {
    const paramsId = parseInt(this.props.match.params.id, 10)
    console.log(paramsId)
    this.props.fetchMovies()
  }

  render() {
    console.log(this.props)
    // const movies = this.props.movies
    // console.log(movies)
    // const oneMovie = movies.filter(x => x.id === parseInt(this.props.match.params.id))
    // console.log(oneMovie)
    // const { title } = oneMovie
    // console.log(title)
    const { movies } = this.props
    const movieData = movies[0]
    console.log(movieData)

    return (
      <Container
        className="d-flex flex-wrap justify-content-md-between justify-content-center"
        style={{ marginTop: '10rem' }}
      >
        <h2>Movie Detail Container</h2>
        <div className="text white">
          <ul>
            {/*{movieData.map(movie => (*/}
            {/*  <li key={movie}>{movie}</li>*/}
            {/*))}*/}
          </ul>
        </div>
        <MovieDetail />
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps, { fetchMovies })(MovieShow)

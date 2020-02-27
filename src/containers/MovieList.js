import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux'
import { fetchMovies } from '../actions/movieActions'
// Components
import MovieCard from '../components/MovieCard'
// Styling Components
import {
  Button,
  ButtonGroup,
  Container,
  Form,
  FormControl,
  Pagination
} from 'react-bootstrap'

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
        <Container style={{ paddingTop: '2rem' }}>
          <div className="d-flex flex-wrap justify-content-md-between justify-content-center">
            <ButtonGroup aria-label="Sort movies" className="mb-5 col-4">
              <Button variant="warning" disabled>
                Popular
              </Button>
              <Button variant="outline-warning" disabled>
                Latest
              </Button>
              <Button variant="outline-warning" disabled>
                Top Rated
              </Button>
            </ButtonGroup>

            <FormControl
              disabled
              type="text"
              placeholder="Disabled - Future Search for movie title"
              className="mb-5 col-4"
            />
          </div>
          <div className="d-flex flex-wrap justify-content-md-between justify-content-center">
            {movies}
          </div>

          <div className="d-flex flex-wrap justify-content-center py-5"></div>
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

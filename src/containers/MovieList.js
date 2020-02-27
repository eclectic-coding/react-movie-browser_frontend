import React, { Component } from 'react'
import ReactPaginate from 'react-paginate'
// Redux
import { connect } from 'react-redux'
import { fetchMovies } from '../actions/movieActions'
// Components
import MovieCard from '../components/MovieCard'
// Styling Components
import { Button, ButtonGroup, Container, FormControl } from 'react-bootstrap'

class MovieList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchMovies()
  }

  handleOnPageClick = data => {
    let selected = data.selected + 1
    console.log(selected)
    let offset = Math.ceil(selected * 20)
    console.log(offset)
    console.log(this.props.movies)
    const movies = this.props.movies
      .slice(data.selected * 20, offset)
      .map((movie, index) => <MovieCard key={movie.id} movie={movie} {...movie} />)
    console.log(movies)
  }

  render() {
    // const pageCount = Math.ceil(this.props.movies.length / 20)
    console.log(this.props.pageCount)
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
          <div
            id="movie-container"
            className="d-flex flex-wrap justify-content-md-between justify-content-center"
          >
            {movies}
          </div>

          <div className="d-flex flex-wrap justify-content-center py-5">
            <ReactPaginate
              previousLabel="&larr;"
              nextLabel="&rarr;"
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={this.props.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handleOnPageClick}
              disableInitialCallback={true}
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
            />
          </div>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    movies: state.movies,
    pageCount: Math.ceil(state.movies.length / 20)
  }
}

export default connect(mapStateToProps, { fetchMovies })(MovieList)

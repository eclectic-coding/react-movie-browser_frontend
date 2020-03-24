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

    this.state = {
      stateStart: this.props.initialStart,
      stateOffset: this.props.initialOffset
    }
    // console.log(this.state.stateStart, this.state.stateOffset)
  }

  componentDidMount() {
    this.props.fetchMovies()
  }

  loadMovieGrid = (start, offset) => {
    return this.props.movies
      .slice(start, offset)
      .map((movie, index) => <MovieCard key={movie.id} movie={movie} {...movie} />)
  }

  handleOnPageChange = data => {
    let selected = data.selected + 1
    let newOffset = Math.ceil(selected * 20)
    const moviePocket = document.getElementById('movie-container')
    // moviePocket.remove()
    console.log(selected, newOffset)
    // this.loadMovieGrid(newOffset - 20, newOffset)
  }

  render() {
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
            {/*TODO - Migrate to state*/}
            {this.loadMovieGrid(this.props.initialStart, this.props.initialOffset)}
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
              onPageChange={this.handleOnPageChange}
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
  return {
    movies: state.movies,
    pageCount: Math.ceil(state.movies.length / 20),
    initialStart: 0,
    initialOffset: 20
  }
}

export default connect(mapStateToProps, { fetchMovies })(MovieList)

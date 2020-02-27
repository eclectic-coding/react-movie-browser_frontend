import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux'
import { fetchMovieId } from '../actions/movieActions'
// Components
import MovieDetail from '../components/MovieDetail'
import { Form, FormControl } from 'react-bootstrap'

class MovieShow extends Component {
  componentDidMount() {
    let paramsId = parseInt(this.props.match.params.id, 10)
    this.props.fetchMovieId(paramsId)
  }

  render() {
    const movies = this.props.movies
      .slice(0, 1)
      .map((movie, index) => <MovieDetail key={movie.id} {...movie} />)

    return (
      <div>
        <Form inline>
          <FormControl
            disabled
            type="text"
            placeholder="Future Search Controller"
            className="mr-sm-2"
          />
        </Form>
        {movies}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies,
    currentUser: state.users.currentUser
  }
}

export default connect(mapStateToProps, { fetchMovieId })(MovieShow)

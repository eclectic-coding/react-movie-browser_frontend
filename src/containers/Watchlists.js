import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux'
import { getProfileFetch } from '../actions/authActions'

// Styling Component
import { Container } from 'react-bootstrap'

class Watchlists extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    console.log(this.props)
    return (
      <div className="bg-danger min-vh-100 background__cover">
        <Container>
          <h1 className="list-title list-title-dark mb-5">My Watchlist</h1>
          <div className="d-flex flex-wrap justify-content-md-start justify-content-center">
            Watchlist
          </div>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser
})

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch())
})

export default connect(mapStateToProps, mapDispatchToProps)(Watchlists)

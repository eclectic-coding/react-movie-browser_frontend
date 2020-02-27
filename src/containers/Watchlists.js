import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux'
import { getWatchlist } from '../actions/watchlistActions'

// Styling Component
import { Card, Container, Table } from 'react-bootstrap'

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
            <Card className="p-3 w-100">
              <Card.Text>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Movie Title</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td colSpan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Text>
            </Card>
          </div>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser,
  watchlists: state.watchlists
})

// const mapDispatchToProps = dispatch => ({
//   getProfileFetch: () => dispatch(getProfileFetch())
// })

export default connect(mapStateToProps, { getWatchlist })(Watchlists)

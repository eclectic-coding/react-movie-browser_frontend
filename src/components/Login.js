import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// Redux
import { connect } from 'react-redux'
import { userLoginFetch } from '../actions/authActions'
// Styling Components
import { Button, Card, Form } from 'react-bootstrap'
import bgImg from '../assets/images/bg.jpg'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { history } = this.props
    this.props.userLoginFetch(this.state)
    history.push('/movies')
  }

  render() {
    return (
      <div
        className="min-vh-100"
        style={{
          background: `url(${bgImg}) no-repeat center center fixed`,
          backgroundCover: 'cover !important'
        }}
      >
        <div
          className="min-vh-100 col-sm-9 col-md-7 col-lg-5 mx-auto"
          style={{ paddingTop: '100px' }}
        >
          <Card
            className="m-5 py-5 px-4 bg-dark text-light"
            style={{ width: '25rem', top: '100px' }}
          >
            <form onSubmit={event => this.handleSubmit(event)}>
              <Card.Title
                className="text-center text-warning text-bold"
                style={{ fontSize: '2rem' }}
              >
                Login
              </Card.Title>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  placeholder="Enter Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  autoFocus
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Button variant="warning" className="mr-3" type="submit">
                Login
              </Button>
              <Button variant="warning" className="mr-3" type="submit">
                <Link to="/signup" style={{ color: 'inherit' }}>
                  Create account
                </Link>
              </Button>
              <Button variant="warning" type="submit">
                <Link to="/movies" style={{ color: 'inherit' }}>
                  Cancel
                </Link>
              </Button>
            </form>
          </Card>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//   user
// })

const mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Login)

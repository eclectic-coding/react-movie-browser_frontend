import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userPostFetch } from '../actions/authActions'
import { Button, Card, Form } from 'react-bootstrap'
import bgImg from '../assets/images/bg.jpg'
import { Link } from 'react-router-dom'

class Signup extends Component {
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
    this.props.userPostFetch(this.state)
    history.push('/login')
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
            <form onSubmit={this.handleSubmit}>
              <Card.Title
                className="text-center text-warning text-bold"
                style={{ fontSize: '2rem' }}
              >
                Create Account
              </Card.Title>

              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  placeholder="Enter Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                  autoFocus
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <Button variant="warning" className="mr-3" type="submit">
                Create account
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

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Signup)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userLoginFetch } from '../actions/authActions'
import { Card, Form } from 'react-bootstrap'

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
    history.push('/profile')
  }

  render() {
    console.log(this.props.currentUser)
    return (
      <div className="min-vh-100 col-sm-9 col-md-7 col-lg-5 mx-auto">
        <Card className="m-5 p-5 bg-dark text-light" style={{ width: '25rem' }}>
          <form onSubmit={event => this.handleSubmit(event)}>
            <Card.Title className="text-center">Login</Card.Title>
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
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
            </Form.Group>

            <input type="submit" />
          </form>
        </Card>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Login)

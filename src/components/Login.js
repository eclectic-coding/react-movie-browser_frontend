import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userLoginFetch } from '../actions/authActions'

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
    console.log(this.props)
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <h2>Login</h2>

        <label>Email</label>
        <input
          name="email"
          placeholder="Enter Email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <br />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br />

        <input type="submit" />
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Login)

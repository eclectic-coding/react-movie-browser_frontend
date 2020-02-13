import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { getProfileFetch, logoutUser } from '../actions/authActions'
import { Container } from 'reactstrap'

import Layout from './Layout'
import Home from '../containers/Home'
import MovieList from '../containers/MovieList'
import Signup from './Signup'
import Login from './Login'
import Profile from './Profile'

class App extends Component {
  componentDidMount = () => {
    this.props.getProfileFetch()
  }

  handleClick = event => {
    event.preventDefault()
    localStorage.removeItem('token')
    this.props.logoutUser()
  }

  render() {
    return (
      <Layout>
        <Router>
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/movies" component={MovieList} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/profile" component={Profile} />
            </Switch>

            <button onClick={this.handleClick}>Log Out</button>
          </Container>
        </Router>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser
})

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

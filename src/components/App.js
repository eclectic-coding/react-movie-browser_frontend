import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { getProfileFetch, logoutUser } from '../actions/authActions'
import { Button } from 'react-bootstrap'
import bgImg from '../assets/images/bg.jpg'

import Home from '../containers/Home'
import Menubar from '../components/Menubar'

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
    console.log(this.props)
    return (
      <div
        style={{
          background: `url(${bgImg})`,
          backgroundCover: 'cover !important',
          marginTop: '10rem'
        }}
        className="min-vh-100"
      >
        <Router>
          <Menubar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movies" component={MovieList} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
          </Switch>
          {/*{this.state.users.currentUser.email ? (*/}
          {/*  <Button onClick={this.handleClick}>Log Out</Button>*/}
          {/*) : null}*/}
        </Router>
      </div>
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

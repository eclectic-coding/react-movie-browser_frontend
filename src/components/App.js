import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// Components
import Home from '../containers/Home'
import Menubar from '../components/Menubar'
import MovieList from '../containers/MovieList'
import Signup from './Signup'
import Login from './Login'
import Profile from './Profile'
// Style elements
import bgImg from '../assets/images/bg.jpg'

class App extends Component {
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
        </Router>
      </div>
    )
  }
}

export default App

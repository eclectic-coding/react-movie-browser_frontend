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
import MovieShow from '../containers/MovieShow'

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
            <Route exact path="/movies" component={MovieList} />
            <Route exact path="/movies/:id" render={props => <MovieShow {...props} />} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App

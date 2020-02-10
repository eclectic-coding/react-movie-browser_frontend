import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../containers/Home'
import MovieList from '../containers/MovieList'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        {/*Add navbar*/}
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movies" component={MovieList} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App

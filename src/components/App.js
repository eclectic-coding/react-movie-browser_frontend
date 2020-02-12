import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from 'reactstrap'

// import Menubar from './Menubar'
import Layout from './Layout'
import Home from '../containers/Home'
import MovieList from '../containers/MovieList'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
        <Router>
          <Container styles={{ backgroundColor: 'red' }}>
            {/*<Menubar />*/}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/movies" component={MovieList} />
            </Switch>
          </Container>
        </Router>
      </Layout>
    )
  }
}

export default App

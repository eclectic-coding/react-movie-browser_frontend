import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { getProfileFetch } from '../actions/authActions'
import { Container } from 'reactstrap'

// import Menubar from './Menubar'
import Layout from './Layout'
import Home from '../containers/Home'
import MovieList from '../containers/MovieList'
import Signup from './Signup'
import Login from './Login'

class App extends Component {
  componentDidMount = () => {
    this.props.getProfileFetch()
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
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
            </Switch>
          </Container>
        </Router>
      </Layout>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch())
})

export default connect(null, mapDispatchToProps)(App)

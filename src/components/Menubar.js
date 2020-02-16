import React from 'react'
import { NavLink as NavLinkRouter } from 'react-router-dom'
// Redux
import { connect } from 'react-redux'
import { getProfileFetch, logoutUser } from '../actions/authActions'
// Styling
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo, faListAlt } from '@fortawesome/free-solid-svg-icons'

class Menubar extends React.Component {
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
      <Navbar className="fixed-top z-10" bg="dark" expand="lg" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <FontAwesomeIcon
              icon={faVideo}
              aria-hidden="false"
              className="text-warning brand-icon"
            />
            <Navbar.Brand className="mx-4 pb-2 text-warning text-bold justify-content-center">
              Movie Portal
            </Navbar.Brand>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form inline>
              <FormControl
                disabled
                type="text"
                placeholder="Future Search Controller"
                className="mr-sm-2"
              />
            </Form>
          </Navbar.Collapse>
          <Nav variant="light" className="mr-auto">
            <Nav.Link to="/movies" className="text-white mx-3">
              <FontAwesomeIcon icon={faListAlt} className="mr-2" />
              Movies
            </Nav.Link>
            {this.props.currentUser.data ? (
              <Nav.Link to="/movies" className="text-white mx-3">
                <FontAwesomeIcon
                  icon={faListAlt}
                  className="mr-2 font-weight-light text-gray-300"
                />
                MY WATCHLIST
              </Nav.Link>
            ) : null}
          </Nav>
          <Nav.Item>
            {this.props.currentUser.data ? (
              <NavLinkRouter to="/" exact>
                <Button
                  onClick={this.handleClick}
                  className="btn-round btn-sign btn-warning"
                >
                  Log Out
                </Button>
              </NavLinkRouter>
            ) : (
              <NavLinkRouter to="/login" exact>
                <Button className="btn-round btn-sign btn-warning">SIGN IN</Button>
              </NavLinkRouter>
            )}
          </Nav.Item>
        </Container>
      </Navbar>
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

export default connect(mapStateToProps, mapDispatchToProps)(Menubar)

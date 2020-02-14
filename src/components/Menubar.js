import React from 'react'
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavLink
} from 'react-bootstrap'
import { NavLink as NavLinkRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'

const Menubar = () => {
  return (
    <Navbar className="fixed-top" bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <FontAwesomeIcon
            icon={faVideo}
            aria-hidden="false"
            className="text-warning brand-icon"
          />
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
        <Nav.Item>
          <NavLinkRouter to="/login" exact>
            <Button color="danger" className="btn-round btn-sign">
              SIGN IN
            </Button>
          </NavLinkRouter>
          )}
        </Nav.Item>
      </Container>
    </Navbar>
  )
}

export default Menubar

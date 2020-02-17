import React from 'react'
import { Link } from 'react-router-dom'

// Styling Components
import { Button, Container } from 'react-bootstrap'
import bgImg from '../assets/images/home_bg.jpg'

const Home = () => {
  return (
    <div
      className="min-vh-100"
      style={{
        background: `url(${bgImg}) no-repeat center center fixed`,
        backgroundCover: 'cover !important'
      }}
    >
      <Container style={{ paddingTop: '100px' }}>
        <div className="banner">
          <div className="banner-text">
            <h1 className="text-warning">Movie Portal</h1>
            <h3>Your personal entertainment portal.</h3>
            <Button variant="warning" className="mt-3">
              <Link to="/movies" style={{ color: 'inherit' }}>
                Find a movie
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home

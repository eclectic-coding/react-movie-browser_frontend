import React, { Component } from 'react'
// Styling Components
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

class WatchlistButton extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Button variant="success">
          <FontAwesomeIcon icon={faBookmark} className="mr-2" />
          Add to my Watchlist
        </Button>
      </div>
    )
  }
}

export default WatchlistButton

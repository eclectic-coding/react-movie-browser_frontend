import React, { Component } from 'react'
// Styling Components
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { getWatchlist } from '../actions/watchlistActions'

class WatchlistButton extends Component {
  componentDidMount() {
    const { currentUser, watchList } = this.props
    // const userId = currentUser.data.id
    // if (userId && !watchList) {
    //   console.log('Good job - IF')
    // }
  }
  handleWatchlistClick = e => {
    const { movie, currentUser } = this.props
    if (!currentUser.data) {
      console.log(`Nice click you NOBODY`)
    }
  }

  renderTooltip(props) {
    return <Tooltip {...props}>Please sign in to add movie to watchlist</Tooltip>
  }

  render() {
    return (
      <div>
        {this.props.currentUser.data ? (
          <Button
            variant="success"
            id="watchlist-btn"
            onClick={e => this.handleWatchlistClick(e)}
          >
            <FontAwesomeIcon icon={faBookmark} className="mr-2" />
            Add to my Watchlist
          </Button>
        ) : (
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={this.renderTooltip}
          >
            <Button
              variant="success"
              id="watchlist-btn"
              onClick={e => this.handleWatchlistClick(e)}
            >
              <FontAwesomeIcon icon={faBookmark} className="mr-2" />
              Add to my Watchlist
            </Button>
          </OverlayTrigger>
        )}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getWatchlist: userId => dispatch(getWatchlist(userId))
})

const mapStateToProps = state => {
  return {
    currentUser: state.users.currentUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchlistButton)

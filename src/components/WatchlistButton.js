import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux'
import { getWatchlist } from '../actions/watchlistActions'

// Styling Components
import { Button, OverlayTrigger, Spinner, Tooltip } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

class WatchlistButton extends Component {
  componentDidMount() {
    const { currentUser, watchList, getWatchlist } = this.props
  }
  handleWatchlistClick = e => {
    const { movie, currentUser, watchlists } = this.props
    let userId
    if (currentUser === undefined) {
      console.log('Rut Roh')
    } else {
      userId = currentUser.data.id
    }
    this.props.getWatchlist(userId)
  }

  renderTooltip(props) {
    return <Tooltip {...props}>Please sign in to add movie to watchlist</Tooltip>
  }

  render() {
    const { movie, currentUser, watchlists } = this.props
    let userId
    if (currentUser === undefined) {
      return
    } else {
      userId = currentUser.data.id
    }

    // const isInWatchList = userId && watchlists.data.find(item => item.id === movie.id)

    console.log(movie)

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
    currentUser: state.users.currentUser,
    watchlists: state.watchlists
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchlistButton)

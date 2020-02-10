import React, { Component } from 'react'
import { Button } from 'reactstrap'

class MovieShow extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    // const { title } = this.state.movie
    return (
      <div>
        <h1>Hello</h1>
        <Button color="primary">Hello Button</Button>
        {/*<p>Title: {title}</p>*/}
      </div>
    )
  }
}

export default MovieShow

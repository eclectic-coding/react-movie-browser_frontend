import React from 'react'

const MovieDetail = ({ title, average_vote }) => {
  return (
    <div>
      <h2>Title: {title}</h2>
      <p>Average: {average_vote}</p>
    </div>
  )
}

export default MovieDetail

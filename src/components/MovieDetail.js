import React from 'react'

const MovieDetail = ({
  title,
  tagline,
  average_vote,
  overview,
  genre_ids,
  budget,
  runtime,
  release_date,
  backdrop_path,
  poster_path
}) => {
  return (
    <div className="text-black">
      <div className="text-black">Title: {title}</div>
      <div className="text-black">Tag: {tagline}</div>
      <div className="text-black">Average: {average_vote}</div>
      <div className="text-black">Overview: {overview}</div>
      <div className="text-black">Genres: {genre_ids}</div>
      <div className="text-black">Release: {release_date}</div>
      <div className="text-black">Duration: {runtime}</div>
      <div className="text-black">Budget: {budget}</div>
      <div className="text-black">Backdrop: {backdrop_path}</div>
      <div className="text-black">Poster: {poster_path}</div>
    </div>
  )
}

export default MovieDetail

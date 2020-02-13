import React from 'react'
import { Card, CardImg, CardTitle, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'

import genreMap from '../data/movieGenres'
import { MOVIE_DB_IMAGE_URL } from '../data/apiMovies'
import noPhoto from '../assets/images/noimage.png'

const MovieCard = ({ id, title, genre_ids, poster_path, average_vote }) => {
  let genresStr = ''
  if (genre_ids) {
    genresStr = genre_ids
      .map(id => {
        const item = genreMap.genres.find(item => item.id === id)
        return item ? item.name : null
      })
      .join(', ')
  }
  console.log(genresStr)
  return (
    <div>
      <Card className="movie-card">
        <CardImg
          top
          width="100%"
          src={poster_path ? `${MOVIE_DB_IMAGE_URL.medium}${poster_path}` : noPhoto}
          alt={title}
        />
        <CardBody>
          <Link to={`/movies/${id}`}>
            {average_vote > 0 && <span className="card-rating">{average_vote}</span>}
            <CardTitle className="mb-1 mr-4">{title}</CardTitle>
            {genresStr && <p className="small mb-0">{genresStr}</p>}
          </Link>
        </CardBody>
      </Card>
    </div>
  )
}

export default MovieCard

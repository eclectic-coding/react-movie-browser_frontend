import React from 'react'
import genreMap from '../data/movieGenres'
// Styling Components
import { Badge, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faHistory, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'
import { MOVIE_DB_IMAGE_URL } from '../data/apiMovies'
import WatchlistButton from './WatchlistButton'

const MovieDetail = ({
  id,
  title,
  average_vote,
  backdrop_path,
  budget,
  overview,
  poster_path,
  release_date,
  genre_ids,
  runtime,
  tagline
}) => {
  const getDurationStr = mins => {
    let h = Math.floor(mins / 60)
    let m = mins % 60
    m = m < 10 ? '0' + m : m
    return `${h}h ${m}m`
  }

  let genresArr = []
  if (genre_ids) {
    genresArr = genre_ids.map(gid => {
      const item = genreMap.genres.find(item => item.id === gid)
      genresArr.push(item.name)
      return genresArr
    })
  }

  return (
    <div
      className="movie-backdrop w-100 h-100 position-fixed"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0, .5)), url("${MOVIE_DB_IMAGE_URL.large +
          backdrop_path}")`
      }}
    >
      <Container className="d-flex flex-column">
        <div className="movie">
          <img
            src={`${MOVIE_DB_IMAGE_URL.medium + poster_path}`}
            alt={title}
            className="movie__img"
          />

          <div className="movie__info d-flex flex-column justify-content-between p-3 align-items-start">
            <h2>{title}</h2>
            {tagline && <h6 className="movie__tagline">{tagline}</h6>}

            <div className="movie__control">
              <div title="Rating" className="movie__rating">
                {average_vote}
              </div>
              <WatchlistButton movie={id} />
            </div>
            <p className="my-5" style={{ fontSize: '1.2rem' }}>
              {overview}
            </p>

            <div>
              <span className="mr-2">Genres:</span>
              {genresArr[0].map(item => (
                <Badge variant="warning" className="mb-1" key={item}>
                  {item}
                </Badge>
              ))}
            </div>

            <div className="movie__stat d-flex justify-content-between align-items center">
              {release_date && (
                <div>
                  <FontAwesomeIcon icon={faClock} className="mr-2" />
                  Release date: {release_date.toLocaleString()}
                </div>
              )}
              <div>
                <FontAwesomeIcon icon={faHistory} className="mr-2" />
                Duration:
                {getDurationStr(runtime)}
              </div>
              <div>
                <FontAwesomeIcon icon={faMoneyBillAlt} className="mr-2" />
                Budget: ${budget.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default MovieDetail

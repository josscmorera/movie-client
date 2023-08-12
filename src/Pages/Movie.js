import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovie } from '../Services/movie'
import { IMAGE_BACKDROP_TMDB_URL } from '../Utils/urls'

export default function Movie() {
  const [movie, setMovie] = useState(null)

  const {id} = useParams()


  useEffect(() => {
    const callMovie = async () => {
      const movie = await getMovie(id)
      setMovie(movie)
    }
    callMovie()
  }, [id])

  return (
    <div>

    <img src={`${IMAGE_BACKDROP_TMDB_URL}${movie?.backdropImage}`} alt={movie?.title} width={'100%'} />
    <h1>{movie?.title}</h1>
    <p>{movie?.overview}</p>
    </div>
  )
}

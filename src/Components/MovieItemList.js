import React from 'react'
import '../Styles/MovieItem.css'
import { IMAGE_TMDB_URL } from '../Utils/urls'
import { Link } from 'react-router-dom'
import { formatDate } from '../Utils/functions'

 const MovieItemList = ({ movie }) => {
  return( 
    <div className=''>
      <img src={ `${IMAGE_TMDB_URL}/${movie.posterImage}`} alt={movie.title}  width={80} height={120}  />
      <span>{movie.title}</span>
      <span>{ formatDate(movie.releaseDate)}</span>
      <span>{movie.overview && movie.overview.substring(0,50)}...</span>
      <Link to={`/admin/movie/${movie._id}`} >
        <button>Edit</button>
      </Link>
    </div>
  )
}

export default MovieItemList;
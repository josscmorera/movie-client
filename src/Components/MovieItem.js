import React from 'react'
import '../Styles/MovieItem.css'
import { IMAGE_TMDB_URL } from '../Utils/urls'
import { Link } from 'react-router-dom'

 const MovieItem = ({ movie }) => {
  return( 
    <Link to={`/movie/${movie._id}`} >
    <div className='Movie-item-container'>
      <img src={ `${IMAGE_TMDB_URL}/${movie.posterImage}`} alt={movie.title}  className='Movie-item-img'  />
      <span className='Movie-item-title' >{movie.title}</span>
    </div>
    </Link>
  )
}

export default MovieItem;
import React from 'react';
import '../Styles/Movies.css';
import MovieItem from '../Components/MovieItem';
import { useOutletContext } from 'react-router-dom';

const Movies = () => {

  const {movies} = useOutletContext()

  return <div className='Movies-container' >
    {
      movies.map((movie, index) => {
        return <MovieItem key={index} movie={movie} />
      })
    }
  </div>
}

export default Movies;

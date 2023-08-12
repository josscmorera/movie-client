import React, { useEffect, useState } from 'react';
import '../Styles/Movies.css';
import { getMovies } from '../Services/movie';
import MovieItem from '../Components/MovieItem';

export default function Movies () {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    const callMovies = async () => {
      const movies = await getMovies()
      setMovies(movies)
    }
    callMovies()
  }, [])

  return <div className='Movies-container' >
    {
      movies.map((movie, index) => {
        return <MovieItem key={index} movie={movie} />
      })
    }
  </div>
}

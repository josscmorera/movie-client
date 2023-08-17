import React from 'react';
import '../Styles/Movies.css';
import { useOutletContext } from 'react-router-dom';
import MovieItemList from '../Components/MovieItemList';

const AdminMovies = () => {

  const {movies} = useOutletContext()

  return <div className='Movies-container' >
    <ul>
    {
      movies.map((movie, index) => {
        return <MovieItemList key={index} movie={movie} />
      })
    }
    </ul>
  </div>
}

export default AdminMovies;

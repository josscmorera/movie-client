import React, { useEffect, useState } from 'react'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'
import {getMovie, updateMovie } from '../Services/movie'

import Loader from '../Components/Loader'
import LoaderPage from '../Components/LoaderPage'
import Input from '../Components/Input'
import { formatDate } from '../Utils/functions'

const MovieForm = () => {
  const navigate = useNavigate()
  const [movie, setMovie] = useState(null)
  const [ldMovie, setLdMovie] = useState(true)
  const [ldSave, setLdSave] = useState(false)

  const { movies, setMovies } = useOutletContext()

  const {id} = useParams()

  const callMovie = async () => {
    const movie = await getMovie(id)
    setMovie(movie)
    setLdMovie(false)
  }

  useEffect(() => {
    callMovie()
  }, [id])

  if (ldMovie) {
    return <LoaderPage />
  }

  const handleCahngeValue = (e) => {
    const { value, name } = e.target
    setMovie({
      ...movie,
      [name]: value
    })
  }

  const handleSave = async () => {
    setLdSave(true)
    const newMovie = await updateMovie(movie._id, movie)
    if (!newMovie) {
      alert('Error to save')
      return
    }
    setMovie(newMovie)
    const index = movies.findIndex((movie) => movie._id === newMovie._id)
    if (index !== -1) {
      movies[index] = newMovie
      setMovies([...movies])
    }
    setLdMovie(false)
    navigate(`/admin`)
  }


  return (
    <div>

    <Input type="text" value={movie?.title} name="title" onChange={handleCahngeValue} label={"Title"}  />
    <Input type="text" value={movie?.trailer} name="trailer" onChange={handleCahngeValue} label={"Trailer"}  />
    <Input type="text" value={movie?.backdropImage} name="backdropImage" onChange={handleCahngeValue} label={"Backdrop Image"}  />
    <Input type="text" value={movie?.posterImage} name="posterImage" onChange={handleCahngeValue} label={"Poster Image"}  />
    <Input type="date" value={formatDate(movie?.releaseDate, 'input')} name="releaseDate" onChange={handleCahngeValue} label={"Release Date"}  />
    <Input type="text" value={movie?.runTime} name="runTime" onChange={handleCahngeValue} label={"Run Time"}  />
    <Input type="textarea" value={movie?.overview} name="overview" onChange={handleCahngeValue} label={"Overview"}  />
   
    <button onClick={handleSave} disabled={ldSave} >
      { ldSave && <Loader /> } Save
    </button>
    </div>
  )
}

export default MovieForm
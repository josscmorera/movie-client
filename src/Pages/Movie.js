import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import { getMovie } from '../Services/movie'
import { IMAGE_BACKDROP_TMDB_URL } from '../Utils/urls'
import { formatDate, minutesToHours } from '../Utils/functions'
import YoutubeEmbed from '../Components/YoutubeEmbed'
import CommentItem from '../Components/CommentItem'

export default function Movie() {
  const [movie, setMovie] = useState(null)
  const [comment, setComment] = useState('')
  const { user } = useOutletContext();

  const {id} = useParams()

  const callMovie = async () => {
    const movie = await getMovie(id)
    setMovie(movie)
  }

  useEffect(() => {
    callMovie()
  }, [id])

  return (
    <div>

    <img src={`${IMAGE_BACKDROP_TMDB_URL}${movie?.backdropImage}`} alt={movie?.title} width={'100%'} />
    <h1>{movie?.title}</h1>
    <p>{movie?.rating || 0} ⭐</p>
    <ul>
      {movie?.genres.map((genre, index) => {
        return <li key={index}>{genre.name}</li>
      })}
    </ul>
    <p>{formatDate(movie?.releaseDate)}</p>
    <p>{minutesToHours(movie?.runTime)} minutes</p>
    <p>{movie?.overview}</p>
    <YoutubeEmbed embedId={movie?.trailer} />

    {
      user &&  (
      <div>
        <h3>Agregar Calificación</h3>
        <form>
          <input type="number" min="0" max="5" />
          <button>Enviar</button>
        </form>
      </div>
      )

    }

    <h2>Comentarios</h2>
    {
      movie?.comments.length === 0 && <p>No hay comentarios</p>
    }
    {
      movie?.comments.map((comment, index) => <CommentItem key={index} comment={comment} />)
    }
    {
      user &&  (
      <div>
      <h3>Agregar comentario</h3>
      <form>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button>Enviar</button>
      </form>
    </div>
      )
      
    }
    </div>
  )
}

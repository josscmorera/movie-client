import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import { addComment, addRating, getMovie, removeComment, updateComment, updateRating } from '../Services/movie'
import { IMAGE_BACKDROP_TMDB_URL } from '../Utils/urls'
import { formatDate, minutesToHours } from '../Utils/functions'
import YoutubeEmbed from '../Components/YoutubeEmbed'
import CommentItem from '../Components/CommentItem'
import StarRating from '../Components/StartRating'
import LikeButton from '../Components/LikeButton'
import { addFavorite, removeFavorite } from '../Services/user'
import Loader from '../Components/Loader'
import LoaderPage from '../Components/LoaderPage'

const Movie = () => {
  const [movie, setMovie] = useState(null)
  const [comment, setComment] = useState('')
  const { user, setUser } = useOutletContext();
  const [commentEdit, setCommentEdit] = useState(null)

  const [ldMovie, setLdMovie] = useState(true)
  const [ldComment, setLdComment] = useState(false)
  const [ldRating, setLdRating] = useState(false)
  const [ldFavorite, setLdFavorite] = useState(false)
  const [ldCommentDelete, setLdCommentDelete] = useState(false)

  const {id} = useParams()

  const callMovie = async () => {
    const movie = await getMovie(id)
    setMovie(movie)
    setLdMovie(false)
  }

  useEffect(() => {
    callMovie()
  }, [id])

  const userRating = movie?.ratings.find((rating) => rating.userId === user?._id)

  const handleRating = async (rating) => {
    setLdRating(true)
    let newMovie
    if (!userRating) {
       newMovie = await addRating(movie._id, rating)
    } else {
       newMovie = await updateRating(movie._id, rating)
    }
    if (!newMovie) {
      alert('Error to rate')
      return
    }
    setMovie(newMovie)
    setLdRating(false)
  }

  const handleSetEdit = (comment) => {
    setCommentEdit(comment)
    setComment(comment.comment)
  }

  const handleComment = async () => {
    setLdComment(true)
    let newMovie
    if (commentEdit) {
      newMovie = await updateComment(movie._id, commentEdit._id, comment)
    } else {
      newMovie = await addComment(movie._id,  comment)
    }
    if (!newMovie) {
      alert('Error to comment')
      return
    }
    setMovie(newMovie)
    setComment('')
    setCommentEdit(null)
    setLdComment(false)
  }

  const handleDelete = async (commentId) => {
    setLdCommentDelete(true)
    const newMovie = await removeComment(movie._id, commentId)
    if (!newMovie) {
      alert('Error to delete')
      return
    }
    setMovie(newMovie)
    setLdCommentDelete(false)
  }

  const likedUser = user?.favorites.find((favorite) => favorite === movie?._id)

  const handleLikeDislike = async () => {
    setLdFavorite(true)
    let newUser
    if (!likedUser) {
      newUser = await addFavorite(movie._id)
    } else {
      newUser = await removeFavorite(movie._id)
    }
    if (!newUser) {
      alert('Error to like/dislike')
      return
    }
    setUser(newUser)
    setLdFavorite(false)
  }


  if (ldMovie) {
    return <LoaderPage />
  }


  return (
    <div>

    <img src={`${IMAGE_BACKDROP_TMDB_URL}${movie?.backdropImage}`} alt={movie?.title} width={'100%'} />
    <h1>{movie?.title}</h1>
    {
      user && (
        <LikeButton likedUser={likedUser} changeLike={handleLikeDislike} loading={ldFavorite}  />
      )
    }
    <p>{ldRating ? <Loader />  : movie?.rating || 0} ⭐</p>
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
        <h3>Add Rating</h3>
          <StarRating userRating={userRating} saveRating={handleRating}  />
      </div>
      )

    }

    <h2>Comments</h2>
    {
      user &&  (
      <div>
      <h3>{commentEdit ? 'Edit' : 'Add'} comment</h3>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handleComment} disabled={ldComment}  > {ldComment ? <Loader />  : 'Save'} </button>
    </div>
      )
      
    }
    <div>
      {
        movie?.comments.length === 0 && <p>there are no comments</p>
      }
      {
        movie?.comments.map((comment, index) => <CommentItem key={index} comment={comment} user={user} setEdit={handleSetEdit} onDelete={handleDelete} ldDelete={ldCommentDelete}   />)
      }

    </div>
    
    </div>
  )
}

export default Movie
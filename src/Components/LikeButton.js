import React, { useEffect, useState } from 'react';
import '../Styles/LikeButton.css';
import Loader from './Loader';

const LikeButton = ({ likedUser, changeLike, loading }) => {
  const [liked, setLiked] = useState(false); 

  const handleLikeClick = () => {
    setLiked(!liked);
    changeLike(!liked);
  };

  useEffect(() => {
    if (likedUser) {
      setLiked(true);
    }
  }, [likedUser]); 

  return (
    <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLikeClick} disabled={loading} >
      {loading ?  <Loader /> : <div><span className="heart">{  liked ? '❤️' : '♡'}</span> { liked ? 'Dislike' : 'Like' }</div> }
    </button>
  );
};

export default LikeButton;
import React, { useEffect, useState } from 'react';
import '../Styles/StarRating.css'

const StarRating = ({ userRating, saveRating }) => {
  const [rating, setRating] = useState(0); 

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating); 
    saveRating(selectedRating);
  };

  useEffect(() => {
    if (userRating) {
      setRating(userRating.rating);
    }
  }, [userRating]);

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${star <= rating ? 'filled' : ''}`}
          onClick={() => handleStarClick(star)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;
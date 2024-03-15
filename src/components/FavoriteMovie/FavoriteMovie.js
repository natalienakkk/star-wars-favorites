import React from 'react';
import './FavoriteMovie.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'; // for empty star
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'; // for filled star

// The FavoriteMovie component handles the display and interaction of the favorite star icon.
function FavoriteMovie({ movie, isFavorite, handleFavorite }) {
  return (
    <div
      onClick={() => handleFavorite(movie)}
    >
      <div className="star-icon-container">
        {isFavorite ? (
          <FontAwesomeIcon icon={fasStar} className="filled-star" />
        ) : (
          <FontAwesomeIcon icon={farStar} className="empty-star" />
        )}
      </div>
    </div>
  );
}

export default FavoriteMovie;

// MovieCard.js
import React from 'react';
import './MovieImage.css'
import FavoriteMovie from "@/components/FavoriteMovie/FavoriteMovie";

// The MovieImage component renders the individual movie poster, title, and favorite star icon.
function MovieImage({  movie, isFavorite, handleFavorite }) {
  return (
    <div className="movie-image">
        <FavoriteMovie movie={movie} isFavorite={isFavorite} handleFavorite={() => handleFavorite(movie)} />
      <img src={movie.image} alt={movie.title} />
      <div className="movie-title">{movie.title}</div>
    </div>
  );
}

export default MovieImage;

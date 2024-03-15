import React from 'react';
import MovieImage from "@/components/MovieImage/MovieImage";
import FavoriteMovie from "@/components/FavoriteMovie/FavoriteMovie";
import './MovieList.css';


// The MovieList component manages the display of the list of movies.
function MovieList({movies , setMovie , favorites , handleFavorite}) {
  return (
    <div className="movie-list">
      {movies.map((movie) => {
        const isFavorite = favorites.some(fav => fav.title === movie.title);
        return ( // The container that wraps around the list of movie cards.
          <div key={movie.title} onMouseEnter={() => setMovie(movie.image)}>
            <FavoriteMovie
              movie={movie}
              isFavorite={isFavorite}
              handleFavorite={() => handleFavorite(movie)}
            />
            <MovieImage
              movie={movie}
              isFavorite={isFavorite}
              handleFavorite={() => handleFavorite(movie)}
            />

          </div>
        );
      })}
    </div>
  );
}


export default MovieList;

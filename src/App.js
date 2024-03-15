import React, { useState, useEffect } from 'react';
import MovieList from '@/components/MovieList/MovieList';
import LargeImagePreview from '@/components/LargeImagePreview/LargeImagePreview';
import './App.css';

// The App component where the state of favorites and selectedMovie is managed.
function App() {
  const [favorites, setFavorites] = useState([]); // State to keep track of favorite movies.
  const [selectedMovie, setSelectedMovie] = useState(null); // State to track the currently selected/hovered movie for large preview.
  // Predefined list of movies to be displayed.
  const movies = [
  {title: 'The Phantom Menace', image:'/images/ThePhantomMenace.jpg' },
  {title: 'A New Hope', image: '/images/ANewHope.jpg' },
  {title: 'Attack of the Clones', image:'/images/AttackoftheClones.jpg' },
  {title: 'Revenge of the Sith', image:'/images/RevengeoftheSith.jpg'},
  {title: 'The Empire Strikes Back', image:'/images/TheEmpireStrikesBack.jpg' },
  {title: 'Return of the Jedi', image:'/images/ReturnoftheJedi.jpeg' }
];

  // Effect hook to store favorites in localStorage whenever the favorites state changes.
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Effect hook to retrieve favorites from localStorage on component mount.
  useEffect(() => {
  // Get the favorites from localStorage and parse them or set to an empty array if nothing is stored
  const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  setFavorites(savedFavorites);
}, []);


  // Function to handle adding/removing movies from favorites.
  const handleFavorite = (movie) => {
    setFavorites(currentFavorites => {
      const isAlreadyFavorite = currentFavorites.some(fav => fav.title === movie.title);
      if (isAlreadyFavorite) {
        return currentFavorites.filter(fav => fav.title !== movie.title);
      } else {
        return [...currentFavorites, movie];
      }
    });
  };

  // Function to set the selected movie.
  function handleMovieSelect(selectedImage) {
    const movie = movies.find(m => m.image === selectedImage);
    setSelectedMovie(movie);
    console.log(selectedMovie);
  }

  return (
    <div className="App">
      {!selectedMovie && <LargeImagePreview image = {movies[0].image} title={movies[0].title}/>}
      {selectedMovie && <LargeImagePreview image={selectedMovie.image} title={selectedMovie.title} isFavorite = {favorites.some(fav => fav.title === selectedMovie.title)} handleFavorite={handleFavorite} />}
      <MovieList movies={movies}  setMovie={handleMovieSelect} favorites ={favorites} handleFavorite={handleFavorite}/>
    </div>
  );

}

export default App;

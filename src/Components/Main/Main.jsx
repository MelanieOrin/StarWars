import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Main.css';
import MovieRow from '../MovieRow/MovieRow.jsx';
import data from '../data/data.json';


const Main = () => {

  const storedFilms = () => localStorage.getItem('storageData') ? JSON.parse(localStorage.getItem('storageData')) : [];

  const [movieResponse, setMovieResponse] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [favoriteMovies, setFavoriteMovies] = useState(storedFilms)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/films/");
        console.log(response.data.results)
        setMovieResponse(response.data.results)
        setIsLoading(false);
      } catch (error) {
        setMovieResponse(data);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
      console.log(movieResponse)
      const responseTitles = movieResponse.map(el => ({ title: el.title }));
      const newFilms = responseTitles.filter(item1 => !favoriteMovies.some(item2 => (item2.title === item1.title)))
      if (newFilms.length > 0) {
        const newFilmsFav = newFilms.map(m => ({ ...m, favorite: false, previousFav: false }))
        const mergedData = responseTitles.map(item => ({ ...item, ...newFilmsFav.find(({ title }) => title === item.title) }));
        setFavoriteMovies(mergedData);
      }
      else { setFavoriteMovies(storedFilms) };
  }, [movieResponse]);


  useEffect(() => {
    console.log(favoriteMovies)
    console.log(localStorage)
    localStorage.setItem('storageData', JSON.stringify(favoriteMovies))
  }, [favoriteMovies]);


  const mergeMovieData = (movieResponse, favoriteMovies) => {
    return movieResponse.map(item => ({ ...item, ...favoriteMovies.find(({ title }) => title === item.title) }));
  };


  return (
    <div className="main">
      {isLoading && <h2 className="loadingColor">Loading... </h2>}
      {!isLoading &&
        <div>
          {[...mergeMovieData(movieResponse, favoriteMovies)].map(item => (
            <MovieRow key={item.title} movie={item} favoriteMovies={favoriteMovies} setFavoriteMovies={setFavoriteMovies} />
          ))}
        </div>}
    </div>
  );
};

export default Main;
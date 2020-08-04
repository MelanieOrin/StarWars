import React from 'react';
import './MovieRow.css';
import MovieInfo from '../MovieInfo/MovieInfo.jsx';
import Favorites from '../Favorites/Favorites.jsx';
import PreviousFav from '../PreviousFav/PreviousFav.jsx';

const MovieRow = ({ movie, favoriteMovies, setFavoriteMovies }) => {

    const handleClick = () => {
        console.log(favoriteMovies)
        const isFavorite = favoriteMovies.map(item =>
            (item.title === movie.title ? { ...item, favorite: !item.favorite, previousFav: true } : item));
        setFavoriteMovies(isFavorite)
    }

    return (
        <div className="movieRow">
            <MovieInfo name={movie.title} data={movie} />
            <div className="heartContainer">
                <Favorites name={movie.title} favorite={movie.favorite} handleClick={handleClick} />
                <PreviousFav name={movie.title} favorite={movie.favorite} previousFav={movie.previousFav} />
            </div>
        </div>
    );
};

export default MovieRow
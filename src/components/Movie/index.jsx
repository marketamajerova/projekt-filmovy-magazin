import React from 'react';
import { useParams } from 'react-router-dom';
import movies from '../../movie-database';

const Movie = () => {

    const { movieId } = useParams();
    const movieData = movies.find((movie) => movie.id === Number(movieId));

    return (
        <div className='movie'>
            <img src={movieData.poster}></img>
            <h2>{movieData.title}</h2>
            <p>{movieData.storyline}</p>
        </div>
    )
}

export default Movie;
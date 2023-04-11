import React, { Children } from 'react';
import './style.css';
import movies from '../../movie-database';
import { Link } from 'react-router-dom';

const MovieList = () => {

    return (
            <ul className='movie-list'>
                {movies.map((movie) => <Link to ={`movies/${movie.id}`}> {movie.title} </Link>)}
            </ul>
    )
}

export default MovieList;
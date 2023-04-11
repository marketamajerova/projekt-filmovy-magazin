import React from 'react';
import { Outlet } from 'react-router-dom';
import MovieList from '../MovieList';
import './style.css';

const Movies = () => {
    return (
        <>
            <h2>Movies</h2>
            <div className='movies-container'>
                {/* <h2>Movies</h2> */}
                <MovieList />
                <Outlet /> 
            </div>
        </>
    )
}

export default Movies;
import React,{useState} from 'react';

const MovieList = ({movie}) => {
    
    return(
        <div className='movie_list'>
            <div className='movie_no'>{movie.no}</div>
            <div className='movie_title'>{movie.title}</div>
            <div className='movie_year'>{movie.year}</div>
        </div>
    )
}

export default MovieList;
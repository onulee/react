import React,{useState} from 'react';

const Movies = ({movie}) => {
    return(
       <div className='s-list'>
          <div className='s-no'>{movie.no}</div>
          <div className='s-title'>{movie.title}</div>
          <div className='s-year'>{movie.year}</div>
       </div>
    )
}

export default Movies;
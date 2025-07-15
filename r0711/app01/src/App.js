import logo from './logo.svg';
import a1 from './images/a1.jpg';
import './App.css';
import './css/Style.css';
import React,{useState} from 'react';
import Counter from './comp/Counter';
import MovieList from './comp/MovieList';

function App() {

  //반복문 for(X) -> map
  const movies = [
    {no:1,title:'쥬라기공원 1',year:2001},
    {no:2,title:'아이언맨 2',year:2002},
    {no:3,title:'아이언맨 3',year:2003},
    {no:4,title:'아이언맨 4',year:2004},
    {no:5,title:'아이언맨 5',year:2005},
  ]

  // map함수
  const movieList = movies.map((movie)=>{
      return (
        <MovieList movie={movie} key={movie.no} />
      )
  }) 

  return (
    <div className="App">
      <img src='/images/a1.jpg' />
      <h2 className='top_title'>영화리스트</h2>
      {movieList}
     
    </div>
  );
}

export default App;

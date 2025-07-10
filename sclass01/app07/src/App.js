import './App.css';
import Movies from './components/Movies';
import Nav from './components/Nav';
import MoviesForm from './components/MoviesForm';
import { useEffect, useState } from 'react';

function App() {
  // 초기데이터
  const [movies,setMovies] = useState([
    {no:1,title:'아이언맨 1',year:2022},
    {no:2,title:'아이언맨 2',year:2023},
    {no:3,title:'아이언맨 3',year:2024},
  ])

  const [count,setCount] = useState(movies.length);
  console.log("count 개수 : ",count);

  const movie_list = movies.map(movie=>{
    return (
      <Movies movie={movie} key={movie.no} />
    );
  })

  const addMovie = (movie) => {
    
    setMovies([...movies,movie]);
    alert('저장되었습니다.');
    console.log(movies);
    console.log('개수 : '+count);
  }

  useEffect(()=>{
    
  },[])

  return (
    <div className='app_main'>
      {/* 네비게이션================== */}
      <Nav/>
      {/* 영화등록================== */}
      <h2 className='titMain'>영화등록</h2>
      {/* form================ */}
      <MoviesForm addMovie={addMovie} count={count} setCount={setCount} />

      {/* 영화리스트===================== */}
      <h2 className='titMain'>영화리스트</h2>
      {/* 카드 */}
      <>
        {movie_list}
      </>
      
      
    </div>
  );
}

export default App;

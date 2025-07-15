import './App.css';
import Movies from './components/Movies';
import Nav from './components/Nav';
import MoviesForm from './components/MoviesForm';
import { useEffect, useState,useRef } from 'react';

function App() {

  // 초기데이터
  const [movies,setMovies] = useState([
    {no:1,title:'아이언맨 1',year:2022},
    {no:2,title:'아이언맨 2',year:2023},
    {no:3,title:'아이언맨 3',year:2024},
  ])

  const [count,setCount] = useState(movies.length);
  const [temp,setTemp] = useState(true);
  const [m1,setM1] = useState();

   // temp변경
  const tempChange = () => {
    setTemp(!temp);
    console.log('temp : ',temp);
  }

  // 3. 영화정보 삭제
  const removeMovie = (no) => {
    setMovies(
      movies.filter(movie =>{
        return movie.no != no
      })
    );
    alert(no+'번 삭제 되었습니다.');
  }

  // 4. 영화 수정버튼 클릭시
  const upFormMovie = (no) => {
    setM1(movies.filter(movie =>{
        return movie.no == no
      })
    );
  }

  // 4-2. 영화수정저장
  const updateMovie = (m) =>{
    setMovies(
      movies.map((movie)=>movie.no==m.no?({...movie,...m}):movie)
    )
    alert('수정 되었습니다.');
    console.log(movies);
  }
  
  // 1. 영화리스트 출력
  const movie_list = 
  movies.length?
  movies.map(movie=>{
    return (
      <Movies temp={temp} tempChange={tempChange} 
      upFormMovie={upFormMovie}
      movie={movie} removeMovie={removeMovie}  key={movie.no} />
    );
  })
  :
  <div className="card text-center .fs-1">
    <div className="card-body">
      데이터가 없습니다.          
    </div>
  </div>
  ;

  // 2. 영화등록저장
  const addMovie = (movie) => {
    setMovies([...movies,movie]);
    alert('저장되었습니다.');
    console.log(movies);
    console.log('개수 : '+count);
  }

  return (
    <div className='app_main'>
      {/* 네비게이션================== */}
      <Nav/>
      {/* 영화등록 form================ */}
      <MoviesForm addMovie={addMovie} temp={temp} tempChange={tempChange}
          m1={m1} updateMovie={updateMovie}
           count={count} setCount={setCount} />
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

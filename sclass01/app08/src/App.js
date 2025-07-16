import logo from './logo.svg';
import $ from 'jquery';
import './App.css';
import './css/Style.css';
import React,{ useState } from 'react';
import Movies from './comp/Movies';

function App() {

  // 
  const [movies,setMovies] = useState([
    {no:1,title:'쥬라기공원1',year:2000},
    {no:2,title:'해리포터1',year:2001},
    {no:3,title:'아이언맨1',year:2002},
  ]);

  const [mno,setMno] = useState('');
  const [mtitle,setMtitle] = useState('');
  const [myear,setMyear] = useState('');

  //map함수 - key가 있어야 함.(없으면 에러)
  const movie_list = movies.map((movie)=>{
       return(
         <Movies movie={movie} key={movie.no}  />
       );
  });

  // 등록버튼
  const saveBtn = () => {
    $('.no').val();
    alert($('.no').val()+'번 영화정보가 등록되었습니다.');
    setMovies(
      [...movies,{no:mno,title:mtitle,year:myear}]
    )

    //리셋
    setMno('');
    setMtitle('');
    setMyear('');

  }
  



  return (
    <div className="App">
       <div className='s-form'>
        <h2>영화등록</h2>
        <label>번호</label>
        <input type='text' className='no'  onChange={(e)=>setMno(e.target.value)} placeholder='번호를 입력하세요' /><br/>
        <label>영화제목</label>
        <input type='text'  value={mtitle} onChange={(e)=>setMtitle(e.target.value)} placeholder='영화제목을 입력하세요' /><br/>
        <label>년도</label>
        <input type='text'  value={myear} onChange={(e)=>setMyear(e.target.value)}  placeholder='년도를 입력하세요' /><br/>
        <button class='s-btn' onClick={saveBtn}>영화등록</button>
       </div>
       {movie_list}
       
       
    </div>
  );
}

export default App;
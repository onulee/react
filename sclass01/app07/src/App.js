import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [now_dayTime,setNow_dayTime] = useState('');

  const movies = [
    {no:1,title:'아이언맨 1',year:2022},
    {no:2,title:'아이언맨 2',year:2023},
    {no:3,title:'아이언맨 3',year:2024},
  ]

  const movie_list = movies.map(movie=>{
    return (
      <div className="card text-center">
        <div className="card-header">
          번호 : {movie.no}
        </div>
        <div className="card-body">
          <h5 className="card-title">제목 : {movie.title}</h5>
          <p className="card-text">제작년도 : {movie.year}년</p>
          <a href="#" className="btn btn-primary">수정</a>
          <a href="#" className="btn btn-primary">삭제</a>
        </div>
        <div className="card-footer text-body-secondary">
          {now_dayTime}
        </div>
      </div>
    );
  })

  useEffect(()=>{
    todayInsert();
  })

  const todayInsert = () =>{
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const nowDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    console.log("현재날짜 : ",nowDate);
    setNow_dayTime(nowDate);
    return nowDate;
  }

  return (
    <div className='app_main'>
      {/* 네비게이션================== */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">메인페이지</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">영화등록</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">영화검색</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">커뮤니티</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">관리자</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* 영화등록================== */}
      <h2 className='titMain'>영화등록</h2>
      {/* form================ */}
      <div className="row">
        <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">영화제목</label>
        <div className="col-sm-10">
          <input type="email" className="form-control form-control-lg" id="colFormLabelLg" placeholder="영화제목을 입력하세요." />
        </div>
      </div>
      <div className="row">
        <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">제작년도</label>
        <div className="col-sm-10">
          <input type="email" className="form-control form-control-lg" id="colFormLabelLg" placeholder="제작년도를 입력하세요." />
        </div>
      </div>
      <div className='app_btn'>
        <button type="button" className="btn btn-success">확인</button>
        <button type="button" className="btn btn-warning">취소</button>
      </div>


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

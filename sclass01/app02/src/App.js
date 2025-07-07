import React,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/style.css';

function App() {

  const [count,setCount] = useState(0);
  let cnt = 0; 

  // 스타일 적용
  const style = {
    border: '1px solid black',
    backgroundColor:'yellow',
    width:'200px',
    height:'40px',
    margin:'0 auto',
    lineHeight:'40px',
  }

  //함수선언
  const countBtn = () =>{
    //alert('카운터 증가');
    // 리엑트 변수 선언
    setCount(count+1);
    console.log("숫자 증가 : ",count);

    // 자바스크립트 변수 선언해서 1증가
    // cnt++;
    // console.log("숫자 증가 : ",cnt);
    }
  //함수선언
  const downBtn = () =>{
    //alert('카운터 증가');
    // 리엑트 변수 선언
    setCount(count-1);
    console.log("숫자 감소 : ",count);
  }

  return (
     <div className="App">
      <h2>메인메뉴</h2>
      <div style={style}>표시 : {count}</div>
      <br/>
      <button className='btn' onClick={countBtn}>증가</button>
      <button className='btn' onClick={downBtn}>감소</button>
    </div>
  );
}

export default App;

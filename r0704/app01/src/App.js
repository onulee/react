import logo from './logo.svg';
import './App.css';
import './css/style.css';

function App() {

  // javascript 변수선언 : var-변수(예전),let-변수(현재),const-상수
  // app.js에서 css적용문법
  const style = {
    color:'#000',
    fontSize : '40px',
    //backgroundColor:'green',
    //textAlign:'center',
  }

  let count = 10;

  const btn = function(){
    alert('경고창 열기');
  }

  return (
    // html소스 부분 -- 빈공백태그 <></>
    <>
      <div className="App">
        <h2 style = {style}>메인페이지</h2> 
        <div className='d01'>숫자 : {count}</div>
        <br/>
        <button id='btn' onClick={btn}>확인</button>
      </div>
    </>
    
  );
}

export default App;

import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './css/Style.css';

function App() {
  // let count = 100;  // 일반변수선언 - var,let,const
  const [count,setCount] = useState(200); //useState변수선언 
  const [num,setNum] = useState(0);

  //숫자증가 함수
  const upBtn = () => {
    setCount(count+1);
    console.log("숫자확인 : ",count);
  }
  //숫자감소 함수
  const downBtn = () => {
    setCount(count-1);
    console.log('숫자확인 : ',count);
  }

  const confirmBtn = () => {
    alert('확인버튼');
    console.log()
    setCount(num); //useState값을 변경하려면 set을 사용한다.
  }

  return (
    <div className="App">
       <h2 >메인페이지</h2>
       <div className='d01' id='id01'>count숫자 : {count}</div>
       <div>
       <div className='d01' >num : {num}</div>
        <label>숫자입력</label>
        <input type='text' className='num' value={num} onChange={(event)=>{setNum(event.target.value)}} />
        <br/>
        <br/>
        <button onClick={confirmBtn}>확인</button>
        <br/>
       </div>
       <button onClick={upBtn}>숫자증가</button>
       <button onClick={downBtn}>숫자감소</button>
    </div>
  );
}

export default App;

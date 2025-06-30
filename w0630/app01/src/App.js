import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(0);
  const [id,setId] = useState('');
  const [pw,setPw] = useState('');

  const countBtn = () => {
    setCount(count+1);
  }
  const count2Btn = () => {
    setCount(count-1);
  }

  const EnterInput = (event) => {
    if(event.keyCode == 13){
      console.log('enter키 입력');
      loginBtn();
    }
  }

  const loginBtn = (event) => {
    alert('로그인 확인합니다.');
  }

  return (
    <div className="App">
      <h2>영화리스트</h2>
      <form>
        <input type='text' name='id' onKeyUp={EnterInput} onChange={(event)=>{setId(event.target.value)} }  /><br/>
        <input type='text' name='pw' onKeyUp={EnterInput} onChange={(event)=>{setPw(event.target.value)} }/><br/>
        <button type='button' onClick={loginBtn}>로그인</button>
      </form>
      <div className='box'>{count}</div>
      <br/>
      <button onClick={countBtn}>숫자증가</button>
      &nbsp;
      <button onClick={count2Btn}>숫자감소</button>
      <br/>
      <br/>
      <img className='img01' src='/images/1.jpg'/>
    </div>
  );
}


export default App;

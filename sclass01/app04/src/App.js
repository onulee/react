import React,{ useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/style.css';
import Counter from './comp/counter';

function App() {
  
 
  const [inputName,setInputName] = useState('') 
  const [sendName,setSendName] = useState('') 
  useEffect(()=>{
    console.log('렌더링 진행');
  },[sendName])
  useEffect(()=>{
    console.log('처음만 실행하기 ===>')
  },[])
  const sendBtn = () =>{
    alert('버튼이름 전송');
    setSendName(inputName);
  }
  const keyDownBtn = (e) => {
    console.log(inputName);
    if (e.keyCode == 13){
      console.log('엔터키 입력');
      sendBtn();
    }
  }

  return (
     <div className="App">
        <h2>메인메뉴</h2>
        <input type='text' placeholder='버튼이름을 입력하세요.' 
        value={inputName}
        onKeyUp={keyDownBtn}
        onChange={(e)=>{setInputName(e.target.value)}}
        />
        <button onClick={sendBtn}>버튼이름전송</button>
        <br/>
        <br/>
        <Counter btnName='숫자증가' />
        <Counter btnName={sendName}/>
        <Counter />
      
    </div>
  );
}

export default App;

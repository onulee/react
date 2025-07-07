import React,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/style.css';
import Counter,{testCount} from './comp/counter';



function App() {
  
   const [count,setCount] = useState(0);

  return (
     <div className="App">
        <h2>메인메뉴</h2>
        <div className='div01'>표시 : {testCount} </div>
         <Counter count = {count} setCount={setCount}/>
      
      
      
      
      {/* <h2>메인메뉴</h2>
      <div className='div01'>표시 : {count}</div>
      <div className='div01'>표시 : {count2}</div>
      <br/>
      <button className='btn' onClick={countBtn}>증가 {count}</button>
      <button className='btn' onClick={countBtn2}>증가2 {count2}</button>
      <button className='btn' onClick={downBtn}>감소</button> */}
    </div>
  );
}

export default App;

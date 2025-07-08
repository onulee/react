import './App.css';
import './css/Style.css';
import React,{useState,useEffect} from 'react';

function App() {

   const [id,setId] = useState('');
   const [pw,setPw] = useState('');
   const [cid,setCid] = useState('');
   const [cpw,setCpw] = useState('');
   const loginBtn = () =>{
    alert('로그인을 진행합니다.');
    setCid(id);
    setCpw(pw);
   }

   const keyup = (e) => {
    if (e.keyCode == 13){
      console.log('키동작확인');
      loginBtn();
    }
   }

   return (
    <div className="App">
      <h2>메인페이지</h2>
      <div className='c01'>아이디 : {cid}</div>
      <div className='c01'>패스워드 : {cpw}</div>
      <input type='text' placeholder='아이디를 입력하세요.' value={id} onChange={(e)=>setId(e.target.value)}  /><br/>
      <input type='text' placeholder='패스워드를 입력하세요.' onKeyUp={keyup}  value={pw} onChange={(e)=>setPw(e.target.value)} />
      <br/>
      <button onClick={loginBtn}>확인</button>
    </div>
  );




  // // html에 데이터를 자동으로 전달해주는 변수
  // const [count,setCount] = useState(100);
  // const [num,setNum] = useState(0);
  
  // // react 리로딩 될때 실행되는 함수
  // useEffect(()=>{
  //   console.log('로딩이 되고 있습니다.',count);
  // },[num]);

  // // 최초 한번만 useEffect()실행
  // useEffect(()=>{
  //   console.log("처음 한번만 실행!!!!!!");
  // },[]);


  // const numUp = () =>{
  //   //alert("숫자증가");
  //   setCount(count+1);
  //   //setCount(count+Number(num));
  //   //setNum(0);
  // }
  // return (
  //   <div className="App">
  //     <h2>메인페이지</h2>
  //     <div>숫자 : {count}</div>
  //     <input type='text' value={num} onChange={(e)=>{setNum(e.target.value)}} />
  //     <button onClick={numUp}>숫자증가</button>
  //   </div>
  // );
}

export default App;

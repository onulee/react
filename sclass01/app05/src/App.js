import { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const [txt,setTxt] = useState('기능을 해제합니다');
  const [temp,setTemp] = useState(false);
  const chgTxt = () => {
    //alert('확인');
    console.log("temp1 : ",temp);
    setTemp(!temp);
    console.log("temp2 : ",temp);
  }
  const renderTxt = (temp)?'기능을 적용합니다':'기능을 해제합니다';
  
  useEffect(()=>{
    console.log("useEffect temp : ",temp);
  },[temp]);
  return (
    <div className="App">
      <h2>메인페이지</h2>  
      <div>{renderTxt}</div>
      <button onClick={chgTxt}>변경</button>
      
      <button>확인</button>    
    </div>
  );
}

export default App;

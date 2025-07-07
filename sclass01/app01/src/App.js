import './App.css';
import './css/style.css';

function App() {

  // 스타일 적용
  const style = {
    color:'red',
    border: '1px solid black',
    backgroundColor:'yellow',
    textAlign:'left',
    width:'200px',
    height:'40px',
    margin:'0 auto',
    lineHeight:'40px',
  }

  return (
    <div className="App">
      <h2>메인메뉴</h2>
      <div style={style}>표시 : 0</div>
      <br/>
      <button className='btn'>확인</button>
    </div>
  );
}

export default App;

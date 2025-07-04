import logo from './logo.svg';
import './App.css';
import './css/style.css';

function App() {
  const btn = () => {
    alert('로그인 진행합니다.');
  }

  return (
    <div className="App">
       <h2>로그인</h2>
       <form>
        <label>아이디</label>
        <input type='text' /><br/>
        <label>패스워드</label>
        <input type='text' /><br/><br/>
       </form>
       <button onClick={btn} >로그인</button>
    </div>
  );
}

export default App;

import './App.css';
import './css/Style.css';
import React,{useState} from 'react';
import Counter from './comp/Counter';
import Form from './comp/Form';
import Table from './comp/Table';

function App() {

  return (
    <div className="App">
      <h2>메인페이지</h2>

      <div className='d_form'>
        <Form/>
      </div>
      <div className='t_shape'>
        <Table/>
        <Table/>

      </div>



      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  );
}

export default App;

import React,{useState} from 'react';

const Form = () => {

    return(
        
        <form>
          <label>아이디</label>
          <input type='text' /><br/>
          <label>패스워드</label>
          <input type='text' /><br/>
          <button>로그인</button>
        </form>
    );

}

export default Form;
import React,{useState} from 'react';

const Counter = () => {

    //useState변수
    const [count,setCount] = useState(0);
    //함수선언
    const nBtn = () =>{
        //alert('버튼클릭');
        setCount(count+2);
    }

    return (
        <button onClick={nBtn}>
            버튼 {count}
        </button>
    );
   
}

export default Counter;
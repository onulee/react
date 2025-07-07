import React,{useState} from 'react'
import '../css/style.css'

let testCount  = 10;
const Counter = ({count,setCount}) => {

   
    //함수선언
    const countBtn = () =>{
        setCount(count+1);
        console.log("숫자 증가 : ",count);
    }
    
    //함수선언
    const downBtn = (count) =>{
        setCount(count-1);
        console.log("숫자 감소 : ",count);
    }

    return (
        <>
          <button className='btn' onClick={countBtn}>증가 {count}</button>
        </>
    )
}

export {testCount}
export default Counter;
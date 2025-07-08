import React,{useState} from 'react'
import '../css/style.css'

const Counter = ({btnName}) => {

    const [count,setCount] = useState(0);
    let cName = btnName? btnName:'count'
    
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
          <button className='btn' onClick={countBtn}>{cName} {count}</button>
        </>
    )
}

export default Counter;
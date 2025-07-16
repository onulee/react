import React,{useState} from 'react';

const Counter = ({btnName}) =>{

    const[count,setCount] = useState(0);
    let cName = btnName?btnName:'없음';

    const upBtn = () => {
        //alert('증가');
        setCount(count+1);
    }

    return(
       <>
          <button onClick={upBtn}>{cName} {count}</button>
       </>
    );
}

export default Counter;
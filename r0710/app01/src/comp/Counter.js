import React,{useState} from 'react';

const Counter = ({btnName,id,num}) => {

    let makeName = btnName||'이름없음';
    console.log('prop btnName : ',btnName);
    console.log('prop id : ',id);
    console.log('prop num : ',num);
    

    const [count,setCount] = useState(0);
    const countUp = () => {
        //alert('버튼 확인');
        setCount(count+1);
    }

    return(
        <>
          <button onClick={countUp}>{makeName} {count}</button>
        </>
    );
}

export default Counter;
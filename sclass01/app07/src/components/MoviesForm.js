import React,{useState, useEffect,useRef} from 'react';

const MoviesForm = ({addMovie,updateMovie,tempChange,m1,temp,count,setCount}) =>{

    const [no,setNo] = useState('');
    const [title,setTitle] = useState('');
    const [year,setYear] = useState('');
    const inputRef = useRef(); //input요소를 참조정의

    useEffect(()=>{
      inputRef.current.focus(); 
      console.log("MoviesForm temp : ",temp);   
    },[])

    useEffect(()=>{
      console.log('m1 : ',m1);  
      if (m1){
          setNo(m1[0].no); 
          setTitle(m1[0].title); 
          setYear(m1[0].year); 
      }
    },[m1])


    //영화정보 취소버튼
    const prevBtn = () => {
        alert('수정을 취소합니다.');
        tempChange();
        inputDelete();
    }

    //영화정보 수정버튼
    const upsaveBtn = () => {
        alert('수정한 내용을 저장합니다.');
        updateMovie({no:no,title:title,year:year});
        tempChange();
        inputDelete();
    }

    //영화정보 저장버튼
    const confirmBtn = () =>{
        alert('영화정보를 저장합니다.');
        console.log('title,year : ',title,year);
        addMovie({no:count+1,title:title,year:year});
        setCount(count+1);
        
        inputDelete();
    }

    //영화정보 입력취소버튼
    const cancelBtn = () =>{
        alert('입력을 취소합니다.');
        inputDelete();
    }

    const inputDelete = () => {
        setTitle('');
        setYear('');
    }
              

    return (
        <>
           {
           temp?
            (
            <>
                <h2 className='titMain'>영화등록</h2>
                <div className="row">
                    <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">영화제목</label>
                    <div className="col-sm-10">
                    <input ref={inputRef} type="text" value={title} 
                    onChange={(e)=>setTitle(e.target.value)} 
                    className="form-control form-control-lg" id="colFormLabelLg" placeholder="영화제목을 입력하세요." />
                    </div>
                </div>
                <div className="row">
                    <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">제작년도</label>
                    <div className="col-sm-10">
                    <input type="text" value={year} 
                    onChange={(e)=>setYear(e.target.value)}
                    className="form-control form-control-lg" id="colFormLabelLg" placeholder="제작년도를 입력하세요." />
                    </div>
                </div>
                <div className="app_btn">
                    <button type="button" onClick={confirmBtn} className="btn btn-success">저장</button>
                    <button type="button" onClick={cancelBtn} className="btn btn-warning">취소</button>
                </div> 
            </>
            ):(
            <>
                <h2 className='titMain'>영화수정</h2>    
                <div className="row">
                    <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">영화제목</label>
                    <div className="col-sm-10">
                    <input ref={inputRef} type="text" value={title} 
                    onChange={(e)=>setTitle(e.target.value)} 
                    className="form-control form-control-lg" id="colFormLabelLg" placeholder="영화제목을 입력하세요." />
                    </div>
                </div>
                <div className="row">
                    <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">제작년도</label>
                    <div className="col-sm-10">
                    <input type="text" value={year} 
                    onChange={(e)=>setYear(e.target.value)}
                    className="form-control form-control-lg" id="colFormLabelLg" placeholder="제작년도를 입력하세요." />
                    </div>
                </div>
                <div className='app_btn'>
                    <button type="button" onClick={upsaveBtn} className="btn btn-success">수정</button>
                    <button type="button" onClick={prevBtn} className="btn btn-warning">이전</button>
                </div>
            </>
            )
           } 

        </>
    );
}

export default MoviesForm;
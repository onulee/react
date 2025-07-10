import React,{useState} from 'react';

const MoviesForm = ({addMovie,count,setCount}) =>{

    const [no,setNo] = useState('');
    const [title,setTitle] = useState('');
    const [year,setYear] = useState('');

    const confirmBtn = () =>{
        alert('영화정보를 저장합니다.');
        console.log('title,year : ',title,year);
        addMovie({no:count+1,title:title,year:year});
        setCount(count+1);
        
        inputDelete();
    }
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
            <div className="row">
                <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">영화제목</label>
                <div className="col-sm-10">
                <input type="text" value={title} 
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
                <button type="button" onClick={confirmBtn} className="btn btn-success">저장</button>
                <button type="button" onClick={cancelBtn} className="btn btn-warning">취소</button>
            </div>

        </>
    );
}

export default MoviesForm;
import React,{useState} from 'react';

const Movies = ({tempChange,temp,upFormMovie,movie,removeMovie}) => {

    const [now_dayTime,setNow_dayTime] = useState('');
    let updateTemp = false;
    const todayInsert = () =>{
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');

        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const nowDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        console.log("현재날짜 : ",nowDate);
        setNow_dayTime(nowDate);
        return nowDate;
    }


    //영화정보 수정버튼
    const updateBtn = () => {
        if (temp){
            alert('수정을 진행합니다.');
            tempChange();  // form화면수정
            upFormMovie(movie.no); // 수정할 데이터 전달
            console.log('수정할 no : ', movie.no);
            console.log('수정할 temp : ', temp);
        }else{
            alert('수정화면에서 이전버튼을 클릭하셔야 다른 수정이 가능합니다.');
        }
    }

    //영화정보 삭제버튼
    const deleteBtn = () =>{
       console.log("번호 : ",movie.no); 
       if(window.confirm('삭제하시겠습니까?')){
            removeMovie(movie.no);
       }
    }
    
    return (
        <div className="card text-center">
            <div className="card-header">
                번호 : {movie.no}
            </div>
            <div className="card-body">
                <h5 className="card-title">제목 : {movie.title}</h5>
                <p className="card-text">제작년도 : {movie.year}년</p>
                <a onClick={updateBtn} className="btn btn-primary">수정</a>
                <a onClick={deleteBtn} className="btn btn-primary">삭제</a>
            </div>
            <div className="card-footer text-body-secondary">
                {now_dayTime}
            </div>
        </div>
    )
}

export default Movies;
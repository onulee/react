import React,{useState} from 'react';


   

const Movies = ({movie}) => {

    const [now_dayTime,setNow_dayTime] = useState('');
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
    
    return (
        <div className="card text-center">
            <div className="card-header">
                번호 : {movie.no}
            </div>
            <div className="card-body">
                <h5 className="card-title">제목 : {movie.title}</h5>
                <p className="card-text">제작년도 : {movie.year}년</p>
                <a href="#" className="btn btn-primary">수정</a>
                <a href="#" className="btn btn-primary">삭제</a>
            </div>
            <div className="card-footer text-body-secondary">
                {now_dayTime}
            </div>
        </div>
    )
}

export default Movies;
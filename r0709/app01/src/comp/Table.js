import React,{useState} from 'react';

const Table = () => {

    return (
        <table>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>아이디</th>
          </tr>
          <tr>
            <td>1</td>
            <td>홍길동</td>
            <td>aaa</td>
          </tr>
          <tr>
            <td>2</td>
            <td>유관순</td>
            <td>bbb</td>
          </tr>
        </table>
    )
}

export default Table;
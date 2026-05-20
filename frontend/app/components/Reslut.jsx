import React from "react";

function Reslut({ info, onClick }) {
  return (
    <>
      <div>결과</div>
      <p>정답 개수 : {info.current}</p>
      <p>오답 개수 : {info.wrong}</p>
      <button onClick={onClick}>종료</button>
    </>
  );
}

export default Reslut;

import React from "react";
import "../css/QuizResult.css";

// 결과 화면 — 정답/오답 개수 표시, 종료 버튼
// score: useQuiz에서 전달받은 { current, wrong }
function Result({ score, onClick }) {
  return (
    <div className="card quiz-result">
      <p className="card-label">결과</p>
      <p className="result-score">정답 {score.current} / 5</p>
      <div className="result-detail">
        <p>정답 <span className="result-correct">{score.current}개</span></p>
        <p>오답 <span className="result-wrong">{score.wrong}개</span></p>
      </div>
      <button className="btn-end" onClick={onClick}>종료</button>
    </div>
  );
}

export default Result;

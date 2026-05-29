import React from "react";
import QuizButton from "./QuizButton.jsx"; // 보기 버튼 (정답/오답 색상 처리)
import "../css/QuizQuestion.css";

// 문제 카드 UI — 문제 텍스트, 보기 버튼, 해설, 다음문제 버튼
function QuizQuestion({ question, answered, selectedIndex, onAnswer, onNext, onEnd, isLast }) {
  return (
    <div className="card">
      <div>
        <p className="card-label">문제</p>
        <p className="card-question">{question.question}</p>
      </div>
      {/* selectedIndex, correctIndex를 넘겨 정답/오답 색상 처리 */}
      <QuizButton
        choices={question.choices}
        onAnswer={onAnswer}
        disabled={answered}
        selectedIndex={selectedIndex}
        correctIndex={question.answer}
      />
      <div className="card-answer-buttons">
        <button className="btn-stop" onClick={onEnd}>
          중단하기
        </button>
        {answered && (
          <button className="btn-next" onClick={onNext}>
            {isLast ? "결과확인" : "다음문제"}
          </button>
        )}
      </div>
      {answered && (
        <div className="card-answer">
          <p className="card-explanation">{question.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default QuizQuestion;

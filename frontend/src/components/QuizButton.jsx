import React from "react";
import "../css/QuizButton.css";

// 보기 버튼 목록 — 답변 선택 후 정답/오답에 따라 색상 변경
// selectedIndex: 사용자가 선택한 보기 인덱스
// correctIndex: 정답 인덱스
function QuizButton({ choices, onAnswer, disabled, selectedIndex, correctIndex }) {
  const getClassName = index => {
    if (!disabled) return "";
    if (index === correctIndex) return "btn-correct";  // 정답 → 파스텔 그린
    if (index === selectedIndex) return "btn-wrong";   // 선택한 오답 → 파스텔 핑크
    return "";
  };

  return (
    <div className="quiz-button">
      <ul>
        {choices.map((choice, index) => (
          <li key={index}>
            <button
              className={getClassName(index)}
              onClick={() => onAnswer(index)}
              disabled={disabled}
            >
              {choice}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizButton;

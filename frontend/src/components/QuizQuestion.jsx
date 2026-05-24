import React from "react";
import QuizButton from "./QuizButton.jsx";

function QuizQuestion({ question, answered, info, onAnswer, onNext, isLast }) {
  return (
    <>
      <div>
        <h1>문제</h1>
        <p>{question.question}</p>
      </div>
      <div>
        <QuizButton
          choices={question.choices}
          onAnswer={onAnswer}
          disabled={answered}
        />
      </div>

      {answered && (
        <div>
          <p>{info.isCorrect ? "정답입니다." : "오답입니다."}</p>
          <p>{question.explanation}</p>
          <button onClick={onNext}>{isLast ? "결과확인" : "다음문제"}</button>
        </div>
      )}
    </>
  );
}

export default QuizQuestion;

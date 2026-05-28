import React from "react";
import QuizQuestion from "./QuizQuestion.jsx"; // 문제 카드 UI
import Result from "./QuizResult.jsx";         // 결과 화면
import useQuestions from "../hooks/useQuestions.js"; // API fetch + 랜덤 5문제
import useQuiz from "../hooks/useQuiz.js";           // 퀴즈 진행 로직

// 로딩 / 진행 중 / 결과 화면 분기 담당
function QuizContainer({ start }) {
  const { questions, loading } = useQuestions();
  const { currentQuestion, score, selectedIndex, answered, isEnd, isLast, handleAnswer, handleNext, handleEnd } =
    useQuiz(questions, () => start(false));

  if (loading) return <p>문제를 불러오는 중...</p>;

  if (isEnd) {
    return <Result score={score} onClick={handleEnd} />;
  }

  return (
    <QuizQuestion
      question={currentQuestion}
      answered={answered}
      selectedIndex={selectedIndex}
      onAnswer={handleAnswer}
      onNext={handleNext}
      isLast={isLast}
    />
  );
}

export default QuizContainer;

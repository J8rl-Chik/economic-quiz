import React, { useState } from "react";
import QuizQuestion from "./QuizQuestion.jsx";
import Result from "./QuizResult.jsx";
import useQuestions from "../hooks/useQuestions.js";

function QuizContainer({ start }) {
  const { questions, loading } = useQuestions();
  const [currentQ, setCurrentQ] = useState(0);
  const [info, setInfo] = useState({ current: 0, wrong: 0, isCorrect: null });
  const [answered, setAnswered] = useState(false);

  if (loading) return <p>문제를 불러오는 중...</p>;

  const isEnd = currentQ >= questions.length;
  const currentQuestion = questions[currentQ];

  const chk_answer = index => {
    const chk = index === currentQuestion.answer;

    setInfo(prev => ({
      current: chk ? prev.current + 1 : prev.current,
      wrong: chk ? prev.wrong : prev.wrong + 1,
      isCorrect: chk,
    }));

    setAnswered(prev => !prev);
  };

  const handleNext = () => {
    setCurrentQ(prev => prev + 1);
    setAnswered(prev => !prev);
  };

  const handleEnd = () => {
    setCurrentQ(0);
    setInfo({ current: 0, wrong: 0, isCorrect: null });
    setAnswered(false);
    start(false);
  };

  if (isEnd) {
    return <Result info={info} onClick={handleEnd} />;
  }

  return (
    <QuizQuestion
      question={currentQuestion}
      answered={answered}
      info={info}
      onAnswer={chk_answer}
      onNext={handleNext}
      isLast={currentQ === questions.length - 1}
    />
  );
}

export default QuizContainer;

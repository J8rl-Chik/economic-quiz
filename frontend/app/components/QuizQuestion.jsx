import React from "react";
import question from "../data/questions.js";
import { useState } from "react";
import Ox from "./Ox.jsx";
import Multiple from "./Multiple.jsx";
import Result from "./Reslut.jsx";

function QuizQuestion({ start }) {
  const [currentQ, setCurrentQ] = useState(0);

  const [info, setInfo] = useState({ current: 0, wrong: 0, isCorrect: null });

  const [answered, setAnswered] = useState(false);

  const QuizQuestion = question[currentQ];

  const isEnd = currentQ >= question.length;

  const chk_answer = (index) => {
    const chk = index + 1 === QuizQuestion.answer;

    setInfo((prev) => ({
      current: chk ? prev.current + 1 : prev.current,
      wrong: chk ? prev.wrong : prev.wrong + 1,
      isCorrect: chk ? true : false,
    }));

    setAnswered((prev) => !prev);
  };

  const handleNext = () => {
    setCurrentQ((prev) => prev + 1);
    setAnswered((prev) => !prev);
  };

  const handleEnd = () => {
    setCurrentQ(0);
    setInfo({ current: 0, wrong: 0, isCorrect: null });
    setAnswered(false);
    start(false);
  };

  if (isEnd) {
    // 모든 문제를 다 푼 경우
    return <Result info={info} onClick={handleEnd} />;
  }

  return (
    <>
      <div>
        <h1>문제</h1>
        <p>{QuizQuestion.question}</p>
      </div>
      <div>
        {QuizQuestion.type == "ox" ? (
          <Ox choices={QuizQuestion.choices} onAnswer={chk_answer} />
        ) : (
          <Multiple choices={QuizQuestion.choices} onAnswer={chk_answer} />
        )}
      </div>

      {answered && (
        <div>
          <p>{info.isCorrect ? "정답입니다." : "오답입니다."}</p>
          <p>{QuizQuestion.description}</p>
          <button onClick={handleNext}>
            {currentQ === question.length - 1 ? "결과확인" : "다음문제"}
          </button>
        </div>
      )}
    </>
  );
}

export default QuizQuestion;

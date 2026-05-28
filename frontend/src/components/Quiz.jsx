import React, { useState } from "react";
import QuizContainer from "./QuizContainer.jsx";
import QuizList from "./QuizList.jsx";
import useQuestions from "../hooks/useQuestions.js";
import "../css/Quiz.css";

function Quiz() {
  const [start, setStart] = useState(false);
  const [showList, setShowList] = useState(false);
  const { questions, loading } = useQuestions();

  if (start) {
    return <QuizContainer onExit={() => setStart(false)} questions={questions} />;
  }

  if (showList) {
    return <QuizList questions={questions} onBack={() => setShowList(false)} />;
  }

  return (
    <div className="quiz">
      <h1>경제 퀴즈</h1>
      <div className="quiz-buttons">
        <button className="btn-start" onClick={() => setStart(true)}>
          퀴즈 시작
        </button>
        <button
          className="btn-quizList"
          onClick={() => setShowList(true)}
          disabled={loading}
        >
          {loading ? "불러오는 중..." : "문제 출력"}
        </button>
      </div>
    </div>
  );
}

export default Quiz;

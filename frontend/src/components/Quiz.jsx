import React, { useState } from "react";
import QuizContainer from "./QuizContainer.jsx"; // 퀴즈 진행 화면
import useQuestions from "../hooks/useQuestions.js"; // API fetch + 랜덤 5문제
import "../css/Quiz.css";

// 시작 화면 — 퀴즈 시작 버튼, 문제 목록 출력 버튼
function Quiz() {
  const [start, setStart] = useState(false);
  const [showList, setShowList] = useState(false); // 문제 목록 표시 여부
  const { questions, loading } = useQuestions();

  // 퀴즈 시작 시 QuizContainer로 전환
  if (start) {
    return <QuizContainer start={setStart} />;
  }

  return (
    <div className="quiz">
      <h1>경제 퀴즈</h1>
      <div className="quiz-buttons">
        <button className="btn-start" onClick={() => setStart(true)}>퀴즈 시작</button>
        <button className="btn-quizList" onClick={() => setShowList(prev => !prev)} disabled={loading}>
          {loading ? "불러오는 중..." : "문제 출력"}
        </button>
      </div>
      {showList && questions && (
        <ul>
          {questions.map(q => (
            <li key={q.id}>
              <strong>{q.id}. [{q.type}]</strong> {q.question}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Quiz;

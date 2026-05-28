import React from "react";

function QuizList({ questions, onBack }) {
  return (
    <div>
      <button onClick={onBack}>← 돌아가기</button>
      <ul>
        {questions.map(q => (
          <li key={q.id}>
            <strong>
              {q.id}. [{q.type}]
            </strong>{" "}
            {q.question}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizList;

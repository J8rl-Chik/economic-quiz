import React, { useState } from "react";
import QuizContainer from "./QuizContainer.jsx";

function Quiz() {
  const [start, setStart] = useState(false);

  if (!start) {
    return (
      <>
        <h1>경제 퀴즈</h1>
        <button onClick={() => setStart(true)}>퀴즈 시작</button>
      </>
    );
  }

  return <QuizContainer start={setStart} />;
}

export default Quiz;

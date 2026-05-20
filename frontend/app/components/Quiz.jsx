"use client";

import { useState } from "react";
import QuizQuestion from "./QuizQuestion";

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
  if (start) {
    return <QuizQuestion start={setStart} />;
  }
}

export default Quiz;

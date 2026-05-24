import React from "react";

function QuizButton({ choices, onAnswer, disabled }) {
  return (
    <div>
      <ul>
        {choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            disabled={disabled}
          >
            {choice}
          </button>
        ))}
      </ul>
    </div>
  );
}

export default QuizButton;

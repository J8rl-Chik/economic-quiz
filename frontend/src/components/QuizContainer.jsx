import useQuiz from '../hooks/useQuiz.js';
import QuizAnswer from './QuizAnswer.jsx';
import QuizQuestion from './QuizQuestion.jsx';
import Result from './QuizResult.jsx';

function QuizContainer({onExit, questions}) {
  const {
    currentQuestion,
    score,
    selectedIndex,
    answered,
    isCorrect,
    showAnswer,
    isEnd,
    isLast,
    handleAnswer,
    handleNext
  } = useQuiz(questions);

  if (isEnd) {
    return <Result score={score} onClick={onExit} />;
  }

  if (showAnswer) {
    return (
      <QuizAnswer
        isCorrect={isCorrect}
        correctAnswer={currentQuestion.choices[currentQuestion.answer]}
        explanation={currentQuestion.explanation}
        isLast={isLast}
        onNext={handleNext}
        onEnd={onExit}
      />
    );
  }

  return (
    <QuizQuestion
      question={currentQuestion}
      answered={answered}
      selectedIndex={selectedIndex}
      onAnswer={handleAnswer}
      onEnd={onExit}
    />
  );
}

export default QuizContainer;

import {CardLabel, CardQuestion, CardWrapper} from '../styles/QuizQuestion.styles.js';
import QuizButton from './QuizButton.jsx';

function QuizQuestion({question, answered, selectedIndex, onAnswer, onEnd}) {
  return (
    <CardWrapper>
      <div>
        <CardLabel>문제</CardLabel>
        <CardQuestion>{question.question}</CardQuestion>
      </div>

      <QuizButton
        choices={question.choices}
        onAnswer={onAnswer}
        disabled={answered}
        selectedIndex={selectedIndex}
        correctIndex={question.answer}
      />
    </CardWrapper>
  );
}

export default QuizQuestion;

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
        onAnswer={onAnswer}
        disabled={answered}
        selectedIndex={selectedIndex}
        choices={question.choices}
        correctIndex={question.answer}
      />
    </CardWrapper>
  );
}

export default QuizQuestion;

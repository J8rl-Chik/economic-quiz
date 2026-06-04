import {CardLabel, CardQuestion, CardWrapper} from '../styles/QuizQuestion.styles.js';
import QuizButton from './QuizButton.jsx';

function Quiz({quiz}) {
  return (
    <CardWrapper>
      <div>
        <CardLabel>문제</CardLabel>
        <CardQuestion>{quiz.question}</CardQuestion>
      </div>

      <QuizButton
        choices={quiz.choices}
        correctIndex={quiz.answer}
        // onAnswer={onAnswer}
        // disabled={answered}
        // selectedIndex={selectedIndex}
      />
    </CardWrapper>
  );
}

export default Quiz;

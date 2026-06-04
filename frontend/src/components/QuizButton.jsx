import {ChoiceButton, ChoiceList} from '../styles/QuizButton.styles.js';

function QuizButton({choices, onAnswer, disabled, selectedIndex, correctIndex}) {
  const getClassName = index => {
    if (!disabled) return '';
    if (index === correctIndex) return 'btn-correct';
    if (index === selectedIndex) return 'btn-wrong';
    return '';
  };

  return (
    <ChoiceList component="ul">
      {choices.map((choice, index) => (
        <li key={index}>
          <ChoiceButton
            component="button"
            className={getClassName(index)}
            onClick={() => onAnswer(index)}
            disabled={disabled}
          >
            {choice}
          </ChoiceButton>
        </li>
      ))}
    </ChoiceList>
  );
}

export default QuizButton;

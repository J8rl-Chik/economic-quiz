import {CircularProgress, Typography} from '@mui/material';
import {useState} from 'react';

import useQuestions from '../hooks/useQuizzes.js';
import {ListButton, QuizButtonGroup, QuizWrapper, StartButton} from '../styles/Quiz.styles.js';
import QuizContainer from './QuizContainer.jsx';
import QuizList from './QuizList.jsx';

function EconomicQuiz() {
  const [isStart, isSetStart] = useState(false);

  if (isStart) {
    return <QuizContainer onExit={() => isSetStart(false)} />;
  }

  return (
    <QuizWrapper>
      <Typography variant="h5" fontWeight="bold" mb={4} color="#1a3a5c">
        경제 퀴즈
      </Typography>

      <QuizButtonGroup>
        <StartButton variant="contained" size="large" onClick={() => isSetStart(true)}>
          퀴즈 시작
        </StartButton>
      </QuizButtonGroup>
    </QuizWrapper>
  );
}

export default EconomicQuiz;

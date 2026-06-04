import {useState} from 'react';

import useQuiz from '../hooks/useQuiz.js';
import useQuizzes from '../hooks/useQuizzes.js';
import Quiz from './Quiz.jsx';
import QuizAnswer from './QuizAnswer.jsx';
import Result from './QuizResult.jsx';

function QuizContainer({onExit}) {
  const {quizzes, isLoading, setIsLoading} = useQuizzes();
  const [quizIndex, setQuizIndex] = useState(0);

  if (isLoading) {
    setIsLoading(false);

    return <div>Loading...</div>;
  }

  if (quizzes.length !== 0) {
    return <Quiz quiz={quizzes[quizIndex]} />;
  }
}

export default QuizContainer;

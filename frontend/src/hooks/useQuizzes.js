import {useEffect, useState} from 'react';

// 마운트 시 백엔드에서 랜덤 5문제를 fetch해서 반환
function useQuizzes() {
  const [quizzes, setQuizzes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/quizzes?random=true&count=5')
      .then(res => res.json())
      .then(data => {
        setQuizzes(data);
      });
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [quizzes]);

  return {quizzes, isLoading, setIsLoading};
}

export default useQuizzes;

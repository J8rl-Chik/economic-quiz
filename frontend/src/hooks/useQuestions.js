import {useEffect, useState} from 'react';

// GET /quizzes?random=true&count=5 호출 → 백엔드에서 랜덤 5문제 반환
function useQuestions() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/quizzes?random=true&count=5') // Vite의 프록시 설정 덕분에 '/api'로 시작하는 요청이 백엔드로 전달됩니다.
      .then(res => res.json())
      .then(data => {
        setQuestions(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('문제 불러오기 실패:', err);
        setLoading(false);
      });
  }, []);

  return {questions, loading};
}

export default useQuestions;

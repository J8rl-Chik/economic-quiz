import { useState, useEffect } from "react";

// GET /quizzes?random=true&count=5 호출 → 백엔드에서 랜덤 5문제 반환
function useQuestions() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/quizzes?random=true&count=5")
      .then(res => res.json())
      .then(data => {
        setQuestions(data);
        setLoading(false);
      });
  }, []);

  return { questions, loading };
}

export default useQuestions;

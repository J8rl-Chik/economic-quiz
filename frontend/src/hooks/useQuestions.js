import { useState, useEffect } from "react";

// GET /api/questions 호출 → 전체 문제를 받아 랜덤 5문제 추출
function useQuestions() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/questions")
      .then(res => res.json())
      .then(data => {
        const shuffled = [...data].sort(() => Math.random() - 0.5);
        setQuestions(shuffled.slice(0, 5));
        setLoading(false);
      });
  }, []);

  return { questions, loading };
}

export default useQuestions;

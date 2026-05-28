import { useState } from "react";

// 퀴즈 진행 로직 담당 — QuizContainer에서 사용
// questions: useQuestions에서 받은 5문제
// onEnd: 퀴즈 종료 시 호출할 콜백 (시작 화면으로 복귀)
function useQuiz(questions, onEnd) {
  const [currentQ, setCurrentQ] = useState(0);       // 현재 문제 인덱스
  const [score, setScore] = useState({ current: 0, wrong: 0 }); // 결과 화면용 점수
  const [selectedIndex, setSelectedIndex] = useState(null);     // 버튼 색상 처리용
  const [answered, setAnswered] = useState(false);   // 답변 선택 여부

  const isEnd = currentQ >= questions.length;
  const currentQuestion = questions[currentQ];
  const isLast = currentQ === questions.length - 1;

  const handleAnswer = index => {
    const isCorrect = index === currentQuestion.answer;
    setScore(prev => ({
      current: isCorrect ? prev.current + 1 : prev.current,
      wrong: isCorrect ? prev.wrong : prev.wrong + 1,
    }));
    setSelectedIndex(index);
    setAnswered(true);
  };

  const handleNext = () => {
    setCurrentQ(prev => prev + 1);
    setSelectedIndex(null);
    setAnswered(false);
  };

  const handleEnd = () => {
    setCurrentQ(0);
    setScore({ current: 0, wrong: 0 });
    setSelectedIndex(null);
    setAnswered(false);
    onEnd();
  };

  return { currentQuestion, score, selectedIndex, answered, isEnd, isLast, handleAnswer, handleNext, handleEnd };
}

export default useQuiz;

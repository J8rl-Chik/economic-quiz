import {Box, Button, LinearProgress, styled} from '@mui/material';

import {IconCircleBase, PrimaryButton} from './common.styles.js';

// ──────────────────────────────────────────────
// QuizQuestion 화면 (문제 + 선택지 + 제출 버튼)
// ──────────────────────────────────────────────

// 문제 화면 전체를 감싸는 레이아웃 컨테이너
// boxSizing: 'border-box' — padding을 포함해 높이를 계산 (100dvh 초과 방지)
export const CardWrapper = styled(Box)({
  minHeight: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#f0f4ff',
  boxSizing: 'border-box'
});

// 상단 진행 정보 행 — "문제 N / 5" 텍스트와 "종료" 버튼을 양 끝에 배치
export const ProgressHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px 20px 8px'
});

// 헤더 우측의 "종료" 텍스트 버튼
// padding: 0, minWidth: 'auto' — MUI Button 기본 여백/최소 너비 제거
export const EndTextButton = styled(Button)({
  fontSize: '0.875rem',
  color: '#555',
  textTransform: 'none',
  padding: 0,
  minWidth: 'auto',
  '&:hover': {
    backgroundColor: 'transparent',
    color: '#222'
  }
});

// 문제 진행률을 시각화하는 가로 프로그레스 바
// '& .MuiLinearProgress-bar' — MUI 내부 클래스에 직접 접근해 바 색상 변경
export const StyledLinearProgress = styled(LinearProgress)({
  height: '3px',
  backgroundColor: '#e0e0e0',
  '& .MuiLinearProgress-bar': {
    backgroundColor: '#3a5bd9'
  }
});

// 문제 텍스트와 선택지 버튼을 감싸는 흰색 카드
// flexGrow: 1 — 남은 공간을 채워 제출 버튼이 항상 하단으로 밀리도록 함
export const QuestionCard = styled(Box)({
  margin: '16px',
  backgroundColor: 'white',
  borderRadius: '20px',
  padding: '24px',
  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
  flexGrow: 1
});

// 제출 버튼을 하단에 고정하는 래퍼
// position: 'sticky' + bottom: 0 — 스크롤 시에도 화면 하단에 고정
export const SubmitButtonWrapper = styled(Box)({
  position: 'sticky',
  bottom: 0,
  padding: '12px 16px 24px',
  backgroundColor: '#f0f4ff'
});

// 제출 버튼
export const SubmitButton = styled(PrimaryButton)({
  width: '100%'
});

// ──────────────────────────────────────────────
// QuizAnswer 화면 (정답/오답 결과 + 해설 + 다음 버튼)
// ──────────────────────────────────────────────

// 해설 화면 전체를 감싸는 레이아웃 컨테이너
// height: '100dvh' + overflow: 'hidden' — 화면 높이를 고정하고, 내부 스크롤은 ExplanationCard에서만 발생하도록 함
// padding: '32px 16px 0' — 하단 padding을 0으로 설정해 AnswerButtons의 sticky가 정확히 바닥에 붙도록 함
export const CardAnswerButtons = styled(Box)({
  height: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#f0f4ff',
  padding: '32px 16px 0',
  gap: '16px',
  boxSizing: 'border-box',
  overflow: 'hidden'
});

// 정답/오답 결과를 표시하는 카드
// isCorrect prop에 따라 배경색이 동적으로 변경됨 (초록 계열 / 빨간 계열)
// position: 'sticky' + top: 0 — 화면 상단에 고정
// flexShrink: 0 — ExplanationCard가 줄어들어도 이 카드의 높이는 유지
export const AnswerResult = styled(Box)(({isCorrect}) => ({
  backgroundColor: isCorrect ? '#f0faf4' : '#fff5f5',
  borderRadius: '20px',
  padding: '28px 20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  position: 'sticky',
  top: 0,
  flexShrink: 0
}));

// 정답/오답 아이콘을 감싸는 원형 배경
// IconCircleBase에 isCorrect prop으로 배경색을 동적 적용
export const AnswerIconCircle = styled(IconCircleBase)(({isCorrect}) => ({
  backgroundColor: isCorrect ? '#e0f5e9' : '#ffe0e0',
  marginBottom: '4px'
}));

// "정답입니다!" / "오답입니다" 텍스트 — isCorrect에 따라 색상 변경
export const AnswerResultText = styled(Box)(({isCorrect}) => ({
  fontSize: '1.375rem',
  fontWeight: 'bold',
  color: isCorrect ? '#1a7a3d' : '#d93a3a'
}));

// 해설 내용을 감싸는 흰색 카드
// flexGrow: 1 — 해설이 짧아도 남은 공간을 채워 버튼이 항상 하단으로 밀리도록 함
// minHeight: 0 — flex item이 내용 길이만큼 늘어나지 않고 부모 높이에 맞춰지도록 함 (overflow 동작의 전제조건)
// overflowY: 'auto' — 해설이 길 경우 카드 내부에서만 스크롤
export const ExplanationCard = styled(Box)({
  backgroundColor: 'white',
  borderRadius: '16px',
  padding: '20px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  flexGrow: 1,
  minHeight: 0,
  overflowY: 'auto'
});

// 종료/다음 버튼을 감싸는 행 컨테이너
// position: 'sticky' + bottom: 0 — 스크롤이 생겨도 버튼은 항상 화면 하단에 고정
// marginTop: 'auto' — 해설이 짧을 때도 버튼이 하단으로 밀림
export const AnswerButtons = styled(Box)({
  display: 'flex',
  gap: '12px',
  position: 'sticky',
  bottom: 0,
  backgroundColor: '#f0f4ff',
  padding: '12px 0 24px',
  marginTop: 'auto'
});

// 종료 버튼 — flex: 1로 NextButton과 동일한 너비
export const StopButton = styled(Button)({
  flex: 1,
  padding: '16px 0',
  borderRadius: '14px',
  backgroundColor: '#e8eaef',
  color: '#444',
  fontWeight: 'bold',
  fontSize: '1rem',
  textTransform: 'none',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#d8dae0',
    boxShadow: 'none'
  }
});

// 다음 문제 / 결과 보기 버튼
export const NextButton = styled(PrimaryButton)({
  flex: 1
});

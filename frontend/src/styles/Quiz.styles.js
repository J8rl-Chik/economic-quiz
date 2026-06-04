import {styled} from '@mui/material';
import {Box, Button} from '@mui/material';

export const QuizWrapper = styled(Box)(({theme}) => ({
  minHeight: '100dvh', // 모바일 주소창 높이 제외한 실제 뷰포트 (vh보다 정확)
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 16px',
  backgroundColor: '#f5f5f5',
  [theme.breakpoints.up('sm')]: {
    padding: '0 32px'
  }
}));

export const QuizButtonGroup = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '100%',
  maxWidth: '400px',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    maxWidth: '600px',
    width: 'auto'
  }
}));

export const StartButton = styled(Button)(({theme}) => ({
  padding: '24px 0',
  borderRadius: '12px',
  backgroundColor: '#aecbfa',
  color: '#1a3a5c',
  fontWeight: 'bold',
  fontSize: '1rem',
  textTransform: 'none',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#97b8f5',
    boxShadow: 'none'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.125rem',
    padding: '20px 40px'
  }
}));

export const ListButton = styled(Button)(({theme}) => ({
  padding: '24px 0',
  borderRadius: '12px',
  backgroundColor: '#b7e1cd',
  color: '#1a3d2b',
  fontWeight: 'bold',
  fontSize: '1rem',
  textTransform: 'none',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#a0d4bc',
    boxShadow: 'none'
  },
  '&:disabled': {
    backgroundColor: '#b7e1cd',
    opacity: 0.5
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.125rem',
    padding: '20px 40px'
  }
}));

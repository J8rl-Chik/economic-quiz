import {styled} from '@mui/material';
import {Box, Button} from '@mui/material';

export const ChoiceList = styled(Box)({
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  width: '100%'
});

export const ChoiceButton = styled(Button)(({theme}) => ({
  width: '100%',
  padding: '14px 20px',
  border: '2px solid #4a90e2',
  borderRadius: '8px',
  backgroundColor: 'white',
  color: '#4a90e2',
  fontSize: '1rem',
  fontWeight: 'normal',
  justifyContent: 'flex-start',
  textTransform: 'none',
  boxShadow: 'none',
  transition: 'background 0.2s, color 0.2s',
  '&:hover': {
    backgroundColor: '#4a90e2',
    color: 'white',
    boxShadow: 'none'
  },
  '&:disabled': {
    opacity: 0.5,
    border: '2px solid #4a90e2',
    color: '#4a90e2'
  },
  '&.btn-correct:disabled': {
    backgroundColor: '#b7e1cd',
    borderColor: '#b7e1cd',
    color: '#1a3d2b',
    opacity: 1
  },
  '&.btn-wrong:disabled': {
    backgroundColor: '#f4b8c1',
    borderColor: '#f4b8c1',
    color: '#5c1a1a',
    opacity: 1
  },
  [theme.breakpoints.up('sm')]: {
    padding: '18px 24px',
    fontSize: '1.125rem'
  }
}));

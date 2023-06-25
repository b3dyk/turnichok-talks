import { CSSSelectorObjectOrCssVariables } from '@mui/system';
import { Theme } from '@mui/material';

export const popup: CSSSelectorObjectOrCssVariables<Theme> = {
  width: '100%',
  fontSize: { xs: '16px', sm: '18px' },
  [`& .MuiInputLabel-root,
    & .MuiInputLabel-root.Mui-focused`]: {
    color: 'secondary.mainText',
    fontSize: 'inherit',
  },
  [`& .MuiInputLabel-root.Mui-error,
    & .MuiInputLabel-root.Mui-focused.Mui-error,
    & .MuiInputLabel-root.MuiFormLabel-filled.Mui-error`]: {
    color: 'error.main',
  },

  '& .MuiOutlinedInput-root': {
    '& fieldset, &.Mui-error fieldset': {
      borderColor: 'secondary.main',
    },
    '&:hover fieldset': {
      borderColor: 'secondary.mainText',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'secondary.mainText',
      borderWidth: 1,
    },
    [`&.Mui-error.Mui-focused fieldset,
      &:hover.Mui-error fieldset`]: {
      borderColor: 'error.main',
    },
    '& input': {
      p: '16px',
      fontSize: { xs: '16px', sm: '18px' },
      color: 'primary.mainText',
      backgroundColor: 'secondary.main',
      borderRadius: '5px',
    },
    '& input:focus': {
      backgroundColor: 'secondary.light',
    },
  },
  '& .MuiFormHelperText-root.Mui-error': {
    position: 'absolute',
    bottom: -3,
    transform: 'translateY(100%)',
  },
};

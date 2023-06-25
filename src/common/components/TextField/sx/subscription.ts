import { CSSSelectorObjectOrCssVariables } from '@mui/system';
import { Theme } from '@mui/material';

export const subscription: CSSSelectorObjectOrCssVariables<Theme> = {
  width: '100%',
  fontSize: { xs: '16px', sm: '18px' },
  [`& .MuiInputLabel-root,
    & .MuiInputLabel-root.Mui-focused`]: {
    color: 'secondary.mainText',
    fontSize: 'inherit',
  },
  '& .MuiInputLabel-root': {
    top: '-8px',
  },
  ' & .MuiInputLabel-root.MuiInputLabel-animated.MuiInputLabel-shrink': {
    display: 'none',
  },
  [`& .MuiInputLabel-root.Mui-error,
    & .MuiInputLabel-root.Mui-focused.Mui-error,
    & .MuiInputLabel-root.MuiFormLabel-filled.Mui-error`]: {
    color: 'secondary.mainText',
    top: '-8px',
  },

  '& .MuiOutlinedInput-root': {
    '& fieldset, &.Mui-error fieldset': {
      borderColor: 'transparent',
      borderWidth: 1,
    },
    '&:hover fieldset, &:hover.Mui-error fieldset,': {
      borderColor: 'transparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
    },
    [`&.Mui-error.Mui-focused fieldset,
            &.Mui-error fieldset`]: {
      borderColor: 'transparent',
    },
    '& input': {
      p: '8px 16px',
      height: '42px',
      fontSize: { xs: '16px', sm: '18px' },
      color: 'primary.mainText',
      backgroundColor: 'secondary.light',
      borderBottomLeftRadius: '4px',
      borderTopLeftRadius: '4px',
      boxSizing: 'border-box',
    },
  },
  '& .MuiFormHelperText-root.Mui-error': {
    position: 'absolute',
    bottom: -3,
    transform: 'translateY(100%)',
  },
};

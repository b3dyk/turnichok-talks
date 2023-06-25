import { SxPropsInterface } from 'src/common/interfaces';
import { ButtonTypes } from '../interfaces';

const primary: SxPropsInterface = {
  display: 'flex',
  minWidth: '185px',
  minHeight: '40px',
  alignItems: 'center',
  justifyContent: 'center',
  py: 1,
  px: 2,
  backgroundColor: 'button.main',
  borderRadius: '5px',
  fontStyle: 'normal',
  fontSize: { xs: '16px', sm: '18px' },
  lineHeight: { xs: '24px', sm: '26px' },
  textTransform: 'inherit',
  color: 'button.mainText',
  transition: 'background 0.7s',
  '&:hover': {
    backgroundColor: 'button.hover',
  },
  '&.Mui-disabled': {
    color: 'button.disabledText',
    backgroundColor: 'button.disabled',
  },
};

const buttonTypes = {
  primary,
};

export const useButton = (variant: ButtonTypes) => buttonTypes[variant];

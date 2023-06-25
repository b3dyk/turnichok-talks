import { TypographyTypes } from './interfaces';
import { SxProps } from '@mui/material';

const variants: Record<string, SxProps> = {
  main: {
    fontFamily: 'Ubuntu',
  },
  primary: {
    justifyContent: 'center',
    padding: '0 0 32px 0',
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '32px',
    lineHeight: '60px',
    color: '#DBDBDB',
    '@media (max-width:1250px)': {
      fontSize: '24px',
      lineHeight: '28px',
      padding: '0 0 30px 0',
    },
  },
  secondary: {
    padding: '0 0 25px 0',
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '46px',
    lineHeight: '53px',
    color: '#FFF',
  },
};

const htmlTypes: Record<string, 'h1' | 'h2' | 'h3'> = {
  main: 'h1',
  primary: 'h2',
  secondary: 'h3',
};

export const useTypography = (variant: TypographyTypes) => ({
  htmlType: htmlTypes[variant],
  styles: variants[variant],
});

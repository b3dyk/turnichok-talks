import TypographyMUI from '@mui/material/Typography';
import { SxProps, Theme } from '@mui/material';
import { ReactNode } from 'react';
import { TypographyTypes } from './interfaces';
import { useTypography } from './useTypography';

interface Props {
  variant: TypographyTypes;
  children: ReactNode;
  sx?: SxProps;
}

export const Typography = ({ variant, children, sx }: Props) => {
  const { htmlType, styles } = useTypography(variant);

  const mergedStyles: any = { ...styles, ...sx };

  return (
    <TypographyMUI variant={htmlType} sx={mergedStyles}>
      {children}
    </TypographyMUI>
  );
};

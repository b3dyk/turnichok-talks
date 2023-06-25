import { Box } from '@mui/material';
import { ReactElement, ReactNode } from 'react';
import { SxPropsInterface } from 'src/common/interfaces';

interface Props {
  children: ReactNode;
  variant: string;
  isActive: boolean;
  sx?: SxPropsInterface;
}

export const HorizontalSlide = ({
  isActive,
  children,
  sx,
  variant,
}: Props): ReactElement => (
  <Box
    sx={{
      transition: 'max-height 0.7s',
      maxHeight: isActive ? '700px' : 0,
      overflow: 'hidden',
      ...sx,
    }}
  >
    <Box
      className={`bfa-slide-root bfa-${variant}-slide`}
      sx={{
        height: '100%',
        ...sx,
      }}
    >
      {children}
    </Box>
  </Box>
);

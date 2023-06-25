import { Box } from '@mui/material';
import { ReactElement, ReactNode } from 'react';
import { SxPropsInterface } from 'src/common/interfaces';

interface Props {
  children: ReactNode;
  variant: string;
  isActive: boolean;
  sx?: SxPropsInterface;
  verticalSlideWidth: string;
}

export const VeriticalSlide = ({
  isActive,
  children,
  sx,
  variant,
  verticalSlideWidth,
}: Props): ReactElement => (
  <Box
    sx={{
      maxWidth: isActive ? `${verticalSlideWidth}px` : 0,
      transition: 'max-width 1s',
      overflow: 'hidden',
      height: '100%',
      ...sx,
    }}
  >
    <Box
      className={`bfa-slide-root bfa-${variant}-slide`}
      sx={{
        maxWidth: `${verticalSlideWidth}px`,
        height: '100%',
        ...sx,
      }}
    >
      {children}
    </Box>
  </Box>
);

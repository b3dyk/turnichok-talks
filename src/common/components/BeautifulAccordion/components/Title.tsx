import { Box } from '@mui/material';
import { ReactElement, ReactNode } from 'react';
import { SxPropsInterface } from 'src/common/interfaces';

interface Props {
  children: ReactNode;
  variant: string;
  sx?: SxPropsInterface;
}

export const Title = ({ children, sx, variant }: Props): ReactElement => (
  <Box
    className={`bfa-title-root bfa-${variant}-title`}
    sx={{
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      userSelect: 'none',

      ...sx,
    }}
  >
    {children}
  </Box>
);

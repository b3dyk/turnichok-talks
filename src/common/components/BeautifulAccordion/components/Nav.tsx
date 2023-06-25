import { Box } from '@mui/material';
import { ReactElement, ReactNode } from 'react';
import { SxPropsInterface } from 'src/common/interfaces';

interface Props {
  children: ReactNode;
  variant: string;
  onClick: (e: any) => void;
  sx?: SxPropsInterface;
}

export const Nav = ({
  children,
  onClick,
  sx,
  variant,
}: Props): ReactElement => (
  <Box
    className={`bfa-nav-root bfa-${variant}-nav`}
    onClick={onClick}
    sx={{
      height: '100%',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:hover': {
        backgroundColor: '#243645',
      },
      ...sx,
    }}
  >
    {children}
  </Box>
);

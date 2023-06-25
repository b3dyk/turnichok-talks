import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const NotFoundImg = ({ children }: Props) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      maxWidth: '100vw',
      margin: '0 auto',
      overflow: 'hidden',
      backgroundImage: {
        xs: 'url("/images/notFound/mobile404.jpg")',
        sm: 'url("/images/notFound/tablet404.jpg")',
        md: 'url("/images/notFound/desktop404.jpg")',
      },
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}
  >
    {children}
  </Box>
);

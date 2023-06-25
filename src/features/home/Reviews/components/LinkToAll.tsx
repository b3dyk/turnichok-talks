import Link from 'next/link';
import { Box } from '@mui/material';

export const LinkToAll = () => (
  <Box
    sx={{
      width: {
        xs: '328px',
        sm: '100%',
        md: '97%',
      },
      color: 'lightPrimary.action',
      marginBottom: '8px',
      textAlign: 'right',
      textDecoration: 'underline',
    }}
  >
    <Link href="/reviews">
      Дивитись всіх
    </Link>
  </Box>
);

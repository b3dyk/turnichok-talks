import { Typography } from '@mui/material';
import Link from 'next/link';

export const PrivacyPolicy = () => (
  <Typography
    component="span"
    sx={{ fontWeight: 400, fontSize: '14px', lineHeight: '150%' }}
  >
    Я погоджуюсь з{' '}
    <Link href='/policy'>
      <Typography
        component='a'
        href='/policy'
        variant='inherit'
        sx={{
          color: 'button.main',
          textDecoration: 'underline',
        }}
      >Політика конфіденційності</Typography>
    </Link>
  </Typography>
);

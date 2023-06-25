import Link from 'next/link';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

interface Props {
  title: string;
  href: string;
}

export const NavListItem = ({ href, title }: Props) => (
  <Link href={href}>
    <Box
      component="a"
      href={href}
      sx={{
        padding: '7px 15px 6px',
        width: '100%',
        '&:hover': {
          backgroundColor: 'secondary.light',
        },
      }}
    >
      <Typography variant="p1">{title}</Typography>
    </Box>
  </Link>
);

import Link from 'next/link';
import { Stack, Typography } from '@mui/material';
import { SxPropsInterface } from 'src/common/interfaces';
import { useLinks } from '../hooks';

interface Props {
  sx?: SxPropsInterface
}

export const FooterLinks = ({ sx }: Props) => {
  const links = useLinks();
  return (
    <Stack
      sx={{
        flexDirection: { sm: 'row' },
        columnGap: 3,
        rowGap: '20px',
        ...sx,
      }}
    >
      {links.map(({ id, text, href }) =>
        <Link key={id} href={href}>
          <Typography component='a' href={href}>{text}</Typography>
        </Link>
      )}
    </Stack>
  );
};

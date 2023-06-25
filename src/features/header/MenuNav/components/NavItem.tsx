import Link from 'next/link';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { useCurrentHrefClass } from 'src/common/hooks/useCurrentHrefClass';

interface Props {
  title: string;
  href: string;
}

export const NavItem = ({ href, title }: Props) => {
  const linkClassName = useCurrentHrefClass(href, 'current');

  return (
    <Box component="li">
      <Link
        href={href}
      >
        <Box
          className={linkClassName}
          sx={{
            position: 'relative',
            padding: '16px 0 13px',
            cursor: 'pointer',
            color: 'secondary.mainText',
            display: 'block',

            '&:hover:before, &.current:before': {
              content: '""',
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              height: 8,
              backgroundColor: 'button.main',
            },
          }}
        >
          <Typography variant='p1'>{title}</Typography>
        </Box>
      </Link>
    </Box>
  );
};

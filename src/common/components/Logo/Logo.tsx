import { Box, BoxProps } from '@mui/material';
import Link from 'next/link';
import { useLogoData } from './hooks';
import { TLogoTypes } from './interface';

interface Props {
  variant: TLogoTypes
}

export const Logo = ({ variant, ...other }: Props & BoxProps) => {
  const data = useLogoData(variant);

  return (
    <Link href={'/'}>
      <Box component="a" href={'/'} sx={{ display: 'flex' }} {...other}>
        <Box
          component="img"
          sx={{ width: data.width, cursor: 'pointer' }}
          alt="logo"
          src={data.src}
        />
      </Box>
    </Link>
  );
};

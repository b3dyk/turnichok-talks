import { IconButton } from '@mui/material';
import Link from 'next/link';
import { Dots } from 'src/common/icons';
import { SxPropsInterface } from 'src/common/interfaces';

interface Props {
  src: string
  sx?: SxPropsInterface
}

export const DotsIconLink = ({ src, sx }: Props) => {
  return (
    <Link href={src}>
      <IconButton
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 0,
          px: 0.5,
          borderRadius: 0,
          width: '28px',
          height: '16px',
          overflow: 'hidden',
          '& .MuiSvgIcon-root': {
            color: 'primary.lightText',
          },
          ...sx,
        }}
        href={src}
      >
        <Dots/>
      </IconButton>
    </Link>
  );
};

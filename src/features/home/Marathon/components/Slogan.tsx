import { Box, Typography } from '@mui/material';
import { SxPropsInterface } from 'src/common/interfaces';

interface Props {
  sx?: SxPropsInterface
}

export const Slogan = ({ sx }: Props) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'flex-end',
      width: '728px',
      height: '360px',
      pt: '145px',
      pr: { sm: '24px', md: '40px', lg: '60px' },
      backgroundImage: 'url("/images/intro/slogan-border.png")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: { sm: '36px 100%', md: '16px 100%', lg: '0 100%' },
      backgroundSize: '728px 360px',
      ...sx,
    }}
  >
    <Typography
      variant='h1'
      component='p'
      sx={{
        maxWidth: '529px',
        textAlign: 'right',
        textTransform: 'uppercase',
      }}
    >
      Саме те айті яке&nbsp;тобі потрібно
    </Typography>
  </Box>
);

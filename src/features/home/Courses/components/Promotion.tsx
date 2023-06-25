import { Box, Typography } from '@mui/material';

export const Promotion = () => (
  <Typography
    variant={'p3'}
    component={'p'}
    sx={{ position: 'absolute', top: '-5px', left: '170px' }}
  >
    8500 &#8372;
    <Box
      component="span"
      sx={{
        position: 'absolute',
        bottom: '50%',
        left: 0,
        right: 0,
        height: '1px',
        backgroundColor: 'button.main',
        transform: 'rotate(20deg)',
      }}
    ></Box>
  </Typography>
);

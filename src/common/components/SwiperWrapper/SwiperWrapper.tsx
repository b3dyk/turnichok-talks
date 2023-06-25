import { ReactElement } from 'react';
import { Swiper } from 'swiper/react';
import { Box } from '@mui/material';
import { SxPropsInterface } from '../../interfaces';

interface Props {
  children: ReactElement<typeof Swiper>
  sx?: SxPropsInterface
}

export const SwiperWrapper = ({ children, sx }: Props) => (
  <Box
    sx={{
      ['& .swiper']: {
        overflow: 'visible',
        px: { md: 4 },
        mb: { xs: 4, sm: 6 },
      },
      ['& .swiper .swiper-pagination']: {
        bottom: { xs: '-32px', sm: '-48px' },
      },
      ...sx,
    }}
  >
    {children}
  </Box>
);

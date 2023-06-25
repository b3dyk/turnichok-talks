import Image from 'next/image';
import { Box, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import img404 from '/public/images/notFound/404-page.png';
import { LinkButton, NotFoundImg } from './components';

export const NotFoundFeature = () => {
  const theme: Theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <NotFoundImg>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Image
          src={img404}
          alt="page is not exist"
          width={isMobile ? 182 : 300}
          height={isMobile ? 80 : 132}
        />
        <Typography
          variant="h2"
          component="h1"
          sx={{
            pt: { xs: '16px', sm: '32px' },
            pb: { xs: '32px', sm: '64px' },
          }}
        >
          Сторінку не знайдено
        </Typography>
        <LinkButton />
      </Box>
    </NotFoundImg>
  );
};

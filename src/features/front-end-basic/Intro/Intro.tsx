import { Box, Container, Typography } from '@mui/material';
import { Callback } from 'src/common/components';

export const Intro = () => {
  return (
    <Box
      sx={{
        height: { xs: '752px', sm: '960px', md: '889px' },
        backgroundImage: {
          xs: 'url("/images/course/intro-360@3x.jpg")',
          sm: 'url("/images/course/intro-992@3x.jpg")',
          md: 'url("/images/course/intro-1200@3x.jpg")',
        },
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        backgroundSize: { xs: '361px 800px', sm: '992px 960px', md: '1920px 980px' },
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          pt: { xs: '172px', sm: '312px', md: '294px' },
          pb: { xs: '94px', sm: '350px', md: '314px' },
        }}
      >
        <Box
          sx={{ maxWidth: { xs: '419px' } }}
        >
          <Typography
            variant='h1'
            component='h1'
            color='primary.lightText'
            sx={{ mb: { xs: 3, sm: 4, md: 5 } }}
          >
            Front-end basic
          </Typography>
          <Typography
            variant='h3'
            component='p'
            color='primary.lightText'
            sx={{ mb: { xs: '283px', sm: 7, md: '98px' } }}
          >
            Найлегший спосіб приєднатись до IT
          </Typography>
          <Callback/>
        </Box>
      </Container>
    </Box>
  );
};

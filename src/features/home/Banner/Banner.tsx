import { Box, Theme, useMediaQuery, useTheme } from '@mui/material';
import { BannerText, Analytics } from './components';

export const Banner = () => {
  const theme: Theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        height: { xs: '929px', sm: '980px', md: '890px' },
        pb: '16px',
        margin: '0 auto',
        overflow: 'hidden',
        backgroundImage: {
          xs: 'url("/images/int/intro-360.jpg")',
          sm: 'url("/images/int/woman-360.png"),url("/images/int/men-360.png"),url("/images/int/intro-990.jpg")',
          md: 'url("/images/int/woman-990.png"),url("/images/int/men-990.png"),url("/images/int/intro-1200.jpg")',
          lg: 'url("/images/int/woman-1200.png"),url("/images/int/men-1200.png"),url("/images/int/intro-1440.jpg")',
          xl: 'url("/images/int/woman-1440.png"),url("/images/int/men-1440.png"),url("/images/int/intro-1940.jpg")',
        },
        backgroundRepeat: 'no-repeat',
        backgroundPosition: {
          xs: 'top 40% right 15%,top 20% left 55%,center top',
          sm: 'top 420px right 15%,top 265px left 55%,center top',
          md: 'top 40% right 15%,top 20% left 55%,center top',
        },
        backgroundSize: {
          xs: '100vw 800px',
          sm: '276px 256px,300px 280px,100vw 1237px',
          md: '301px 280px,306px 280px,100vw 890px',
          lg: '360px 340px,360px 340px,100vw 890px',
        },
      }}
    >
      <BannerText />
      {!isMobile && (
        <Box
          component="img"
          src="./images/int/same.svg"
          sx={{ width: { sm: '520px', md: '676px' }, mb: '40px' }}
        ></Box>
      )}
      <Analytics />
    </Box>
  );
};

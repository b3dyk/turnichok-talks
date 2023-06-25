import { Box, Container } from '@mui/material';
import { useMedia } from 'src/common/hooks';
import { Slogan } from './components';
import { MarathonContent } from './components/MarathonContent';

export const Marathon = () => {
  const { isSmUp } = useMedia();
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        width: '100%',
        minHeight: { xs: '750px', sm: '1039px', md: '932px' },
        pt: { xs: 5, sm: '295px' },
        backgroundImage: {
          xs: 'url("/images/intro/marathon-360@3x.jpg")',
          sm: 'url("/images/intro/marathon-992@3x.jpg")',
          md: 'url("/images/intro/marathon-1200@3x.jpg")',
        },
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center bottom',
        backgroundSize: {
          xs: '992px 622px',
          sm: '1200px 1016px',
          md: '1920px 924px',
        },
      }}
    >
      <Container sx={{ display: 'flex', flexDirection: 'column' }}>
        <MarathonContent sx={{ mb: { xs: 2, sm: '237px', md: '184px' } }} />
        {isSmUp && (
          <Slogan
            sx={{
              position: 'absolute',
              right: 0,
              bottom: { sm: '100px', md: '112px' },
            }}
          />
        )}
      </Container>
    </Box>
  );
};

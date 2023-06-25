import { Box, Container, Typography } from '@mui/material';
import { CertificatesForm } from './components';

export const CertificatesFeature = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        margin: '0 auto',
        overflow: 'hidden',
        backgroundImage: {
          xs: 'url("/images/certificates/bg-360.jpg")',
          sm: 'url("/images/certificates/bg-992.jpg")',
          md: 'url("/images/certificates/bg-1200.jpg")',
        },
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        backgroundSize: 'cover',
      }}
    >
      <Container
        sx={{
          py: { xs: '183px', sm: '112px', md: '104px' },
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          color='primary.mainText'
          sx={{ mb: { xs: 2, sm: 3 } }}
        >
          Перевірка сертифікату
        </Typography>
        <Typography
          variant="p2"
          component="p"
          color='primary.mainText'
          sx={{
            maxWidth: { xs: '280px', sm: '460px' },
            mb: { xs: 4, sm: 5 },
          }}
        >
          Кожен випускник Комп'ютерної школи Same IT отримує сертифікат з унікальним номером, ввівши цей номер ви можете
          перевірити його справжність.
        </Typography>
        <CertificatesForm/>
      </Container>
    </Box>
  );
};

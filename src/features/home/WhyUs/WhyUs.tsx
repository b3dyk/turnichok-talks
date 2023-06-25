import { Box, Container, Typography } from '@mui/material';
import { WhyUsList } from './components';
import { useWhyUs } from './hooks';

export const WhyUs = () => {
  const whyUs = useWhyUs();
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'primary.main',
        py: { xs: '32px', md: '64px' },
        px: 2,
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'flex-start', sm: 'center' },
        }}
      >
        <Typography variant="h2" component="h2" sx={{ pb: '40px' }}>
          Чому варто обрати нас?
        </Typography>
        <WhyUsList whyUs={whyUs} />
      </Container>
    </Box>
  );
};

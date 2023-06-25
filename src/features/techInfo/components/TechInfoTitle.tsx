import { Box, Container, Typography } from '@mui/material';

export const TechInfoTitle = () => (
  <Box
    sx={{
      width: '100%',
      backgroundColor: 'primary.dark',
    }}
  >
    <Container
      sx={{
        py: { xs: '32px', md: '64x' },
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{
          pt: { xs: '32px', md: '64px' },
          maxWidth: '1004px',
        }}
      >
        Попередження про обробку персональних даних та умови використання сайту
      </Typography>
    </Container>
  </Box>
);

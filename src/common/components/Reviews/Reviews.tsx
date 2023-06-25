import { Box, Container } from '@mui/material';
import { Typography } from 'src/common/components';
import { LinkToAll, ReviewsList } from './components';
import { useReviews } from './hooks';

export const Reviews = () => {
  const reviews = useReviews();
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'primary.light',
        py: { xs: '32px', sm: '64px' },
      }}
    >
      <Container
        sx={{
          mb: { sm: '32px' },
          textAlign: { xs: 'left', sm: 'center' },
        }}
      >
        <Typography variant="primary">Відгуки наших користувачів</Typography>
        <LinkToAll />
        <ReviewsList reviews={reviews} />
      </Container>
    </Box>
  );
};

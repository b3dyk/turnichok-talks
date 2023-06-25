import { Box, Container, Typography } from '@mui/material';
import { LeaveReview, Masonry, ReviewItem } from 'src/common/components';
import { useReviews } from './hooks';

export const ReviewsFeature = () => {
  const { reviews, getIsCurrentAnchor } = useReviews();
  return (
    <>
      <Box sx={{ pt: { xs: 5, sm: 10, md: 9 }, pb: { xs: 4, sm: 8 } }}>
        <Container>
          <Typography variant='h1' component='h1' sx={{ mb: 1 }}>Відгуки студентів</Typography>
          <Typography variant='h3' component='p'>Комп'ютерної школи Same IT</Typography>
        </Container>
      </Box>
      <LeaveReview/>
      <Box sx={{ pt: { xs: 4, sm: 8 } }}>
        <Container>
          <Masonry
            columns={{ xs: 1, sm: 2, md: 3 }}
            spacing={3}
          >
            {reviews.map(it => (
              <ReviewItem
                key={it.id}
                tagId={`review-${it.id}`}
                review={it}
                isCurrentAnchor={getIsCurrentAnchor('review-', it)}
                withMedia
                containerSx={{ height: 'auto' }}
              />
            ))}
          </Masonry>
        </Container>
      </Box>
    </>
  );
};

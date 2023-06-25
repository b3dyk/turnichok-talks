import { Box, Container, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Review } from 'src/common/icons/Review';
import { LeaveReviewWrapper, ReviewPopup } from './components';

export const LeaveReview = () => {
  const theme: Theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'primary.light',
        py: { xs: '32px', md: '64px' },
      }}
    >
      <Container>
        <LeaveReviewWrapper variant="external">
          <LeaveReviewWrapper variant="internal">
            {!isMobile && <Review />}
            <Box sx={{ ml: { xs: 0, sm: '40px' } }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  color: 'primary.contrastText',
                  marginBottom: '20px',
                }}
              >
                Закінчили нашу школу?
              </Typography>
              <Typography
                variant="p3"
                component="p"
                sx={{
                  color: 'primary.contrastText',
                }}
              >
                Розкажіть, будь ласка, про своє навчання: що Вам сподобалося, а
                в чому ми можемо стати краще.
              </Typography>
            </Box>
          </LeaveReviewWrapper>
          <ReviewPopup />
        </LeaveReviewWrapper>
      </Container>
    </Box>
  );
};

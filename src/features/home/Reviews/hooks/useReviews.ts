import { Theme, useMediaQuery, useTheme } from '@mui/material';
import { IReviewCard } from 'src/common/interfaces';
import reviewsData from 'src/data/reviews.json';

const reviews = reviewsData as IReviewCard[];

export const useReviews = () => {
  const theme: Theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  if (isTablet) return reviews.slice(0, 14);

  return reviews;
};

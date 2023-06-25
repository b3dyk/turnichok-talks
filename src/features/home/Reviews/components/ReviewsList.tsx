import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from '@mui/material';
import { IReviewCard } from 'src/common/interfaces';
import { ReviewItem, SwiperWrapper } from 'src/common/components';
import { useVariantSwiper } from 'src/common/hooks';

interface Props {
  reviews: IReviewCard[];
}

export const ReviewsList = ({ reviews }: Props) => {
  const { sx, swiperOptions } = useVariantSwiper('reviews');
  return (
    <SwiperWrapper sx={sx}>
      <Swiper
        {...swiperOptions}
        className="mySwiper"
      >
        {reviews.map(review => (
          <SwiperSlide key={review.id}>
            <Link href={`/reviews#review-${review.id}`}>
              <Box component='a' href={`/reviews#review-${review.id}`} sx={{ display: 'block', height: '100%' }}>
                <ReviewItem
                  review={review}
                  reviewTextSx={{
                    display: '-webkit-box',
                    WebkitLineClamp: { xs: '6', sm: '3', md: '4' },
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                />
              </Box>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperWrapper>
  );
};

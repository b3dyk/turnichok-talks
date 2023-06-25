import { Avatar, Box, Typography } from '@mui/material';
import defaultImg from 'public/avatar-default.png';
import { ReviewsRating } from 'src/common/components/ReviewsRating';
import { IReviewCard, SxPropsInterface } from 'src/common/interfaces';
import { VideoPlayer } from 'src/common/components';

interface Props {
  review: IReviewCard;
  withMedia?: boolean;
  tagId?: string;
  isCurrentAnchor?: boolean
  reviewTextSx?: SxPropsInterface;
  containerSx?: SxPropsInterface;
}

export const ReviewItem = (
  {
    review: { imgUrl, name, stars, review, time, reviewImg, video },
    withMedia,
    tagId,
    isCurrentAnchor,
    reviewTextSx,
    containerSx,
  }: Props) => {
  return (
    <Box
      id={tagId}
      sx={{
        height: { xs: '238px', sm: '180px', md: '200px' },
        p: 2,
        borderRadius: 1,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor:  isCurrentAnchor ? 'secondary.mainText' : 'secondary.main',
        backgroundColor: isCurrentAnchor ? 'secondary.light' : 'secondary.main',
        ...containerSx,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
        <Avatar
          src={imgUrl || defaultImg.src}
          alt={name}
          sx={{
            width: '40px',
            height: '40px',
            marginRight: '8px',
          }}
        />
        <Box>
          <ReviewsRating quantity={stars} rating/>
          <Typography
            variant="p3"
            component="h3"
            sx={{
              color: 'primary.lightText',
              m: '8px 0',
              display: 'inline-block',
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              display: 'inline-block',
              fontWeight: '900',
            }}
          >
            &nbsp;&#183;&nbsp;
          </Typography>
          <Typography
            variant="p3"
            component="h3"
            sx={{ display: 'inline-block', color: 'primary.lightText' }}
          >
            {time}
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="p3"
        component="div"
        sx={{
          pl: '44px',
          textAlign: 'left',
          color: 'rgba(255, 255, 255, 0.6)',
          ...reviewTextSx,
        }}
      >
        {review}
        {withMedia && reviewImg &&
          <Box
            component='img'
            src={reviewImg}
            sx={{ display: 'block', maxWidth: '100%', height: 'auto', mt: 1, borderRadius: '10px' }}
          />
        }
        {withMedia && video &&
          <VideoPlayer identifier={video} sx={{ width: '100%', height: '100%', mt: 1 }}/>
        }
      </Typography>
    </Box>
  );
};

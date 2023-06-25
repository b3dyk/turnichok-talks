import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { SxPropsInterface } from '../../interfaces';

interface Props {
  rating?: boolean;
  quantity: number;
  sx?: SxPropsInterface;
}

export const ReviewsRating = ({ quantity, rating, sx }: Props) => (
  <Stack spacing={1} sx={sx}>
    <Rating
      name={rating ? 'half-rating-read' : 'half-rating'}
      defaultValue={quantity}
      precision={1}
      readOnly={rating}
      sx={{
        '& .MuiSvgIcon-root': {
          color: 'button.main',
          fontSize: rating ? '20px' : '52px',
        },
      }}
    />
  </Stack>
);

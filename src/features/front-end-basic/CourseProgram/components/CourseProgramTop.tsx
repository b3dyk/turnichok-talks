import { Box, Typography } from '@mui/material';
import { Button } from 'src/common/components';
import { useMedia } from 'src/common/hooks';
import { SxPropsInterface } from 'src/common/interfaces';

interface Props {
  sx?: SxPropsInterface
}

export const CourseProgramTop = ({ sx }: Props) => {
  const { isSmUp } = useMedia();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 4,
        ...sx,
      }}
    >
      <Box>
        <Typography
          variant='h2'
          component='h2'
          sx={{
            mb: { xs: 2, sm: 1, md: 3 },
            color: 'primary.lightText',
          }}
        >
          Програма занять курсу Front-end Basic
        </Typography>
        <Typography variant='p2' component='p' color='primary.mainText'>
          20 заннять
        </Typography>
      </Box>
      {isSmUp && <Button variant='primary'>Друкувати</Button>}
    </Box>
  );
};

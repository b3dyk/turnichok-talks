import { Box, Typography } from '@mui/material';
import { IWhyItem } from '../interfaces';
import { useMedia } from 'src/common/hooks';

export const WhyItem = ({ text, url }: IWhyItem) => {
  const { isSmUp } = useMedia();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'row', sm: 'column' },
        alignItems: 'center',
        gap: '10px',
        maxWidth: '299px',
      }}
    >
      <Box component='img' src={url} alt='icon' width={isSmUp ? 160 : 70}/>
      <Typography>{text}</Typography>
    </Box>
  );
};

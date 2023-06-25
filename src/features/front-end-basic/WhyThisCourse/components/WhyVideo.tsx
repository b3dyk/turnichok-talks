import { Box, Typography } from '@mui/material';
import { VideoPlayer } from 'src/common/components';

export const WhyVideo = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: { xs: '100%', sm: '622px' },
        height: { xs: '170px', sm: '320px' },
        borderRadius: '10px',
        backgroundColor: 'secondary.main',
      }}
    >
      <Typography
        sx={{
          height: '100%',
          py: 1,
          px: 2,
          transform: 'rotate(180deg)',
          writingMode: 'vertical-rl',
          fontSize: { xs: '17px', sm: '32px' },
          lineHeight: { xs: '21px', sm: '38px' },
          fontWeight: 700,
          textAlign: 'center',
          textTransform: 'uppercase',
        }}
      >
        Огляд курсу Front-end basic
      </Typography>
    <VideoPlayer
      identifier='z3FA2kALScU'
      sx={{
        position: 'relative',
        width: { xs: '260px', sm: '510px' },
        height: '100%',
        borderRadius: '10px',
        overflow: 'hidden',
      }}
    />
    </Box>
  );
};

import { Box, Container, Stack, Typography } from '@mui/material';
import { VideoPlayer, SocialList } from 'src/common/components';
import { BenefitsItem, FoundersInfo } from './components';
import { useBenefits, useSocialList } from './hooks';

export const Founder = () => {
  const benefits = useBenefits();
  const socialList = useSocialList();
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'primary.dark',
        py: { xs: '32px', md: '64px' },
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <FoundersInfo benefits={benefits} socialList={socialList} />
        <VideoPlayer identifier="z3FA2kALScU" />
      </Container>
    </Box>
  );
};

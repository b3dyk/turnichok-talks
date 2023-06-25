import { Box, Container } from '@mui/material';
import { useTechInfo } from './hooks';
import { TechInfo, TechInfoTitle } from './components';

export const TechInfoFeature = () => {
  const techInfo = useTechInfo();
  return (
    <>
      <TechInfoTitle />
      <Box
        sx={{
          width: '100%',
          backgroundColor: 'primary.light',
        }}
      >
        <Container
          sx={{
            py: { xs: '32px', md: '64x' },
          }}
        >
          {techInfo.map(({ id, text }) => (
            <TechInfo key={id} techInfo={text} />
          ))}
        </Container>
      </Box>
    </>
  );
};

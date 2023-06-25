import { Box, Container, Divider } from '@mui/material';
import { FooterBottom, FooterLinks, Subscription } from './components';

export const FooterFeature = () => (
  <Box
    sx={{
      color: 'white',
      background: 'primary.black',
      py: { xs: '16px', sm: '24px' },
    }}
  >
    <Container>
      <Subscription sx={{ mb: { xs: 4, sm: 3 } }}/>
      <FooterLinks sx={{ mb: 3 }}/>
    </Container>
    <Divider sx={{ mb: '50px', backgroundColor: 'primary.lightText' }}/>
    <Container>
      <FooterBottom/>
    </Container>
  </Box>
);

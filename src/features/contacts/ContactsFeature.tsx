import { Container, Stack } from '@mui/material';
import { ContactInfo, ContactTitle, SubscriptionForm } from './components';

export const ContactsFeature = () => (
  <Container
    sx={{
      pt: { xs: '66px', sm: '64px', md: '140px', lg: '85px' },
      pb: { xs: '64px', sm: '127px', md: '122px', lg: '113px' },
    }}
  >
    <ContactTitle/>

    <Stack
      sx={{
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: { md: 'space-between' },
        gap: { xs: 4, sm: '80px', md: '50px' },
        px: { lg: '92px' },
      }}
    >
      <ContactInfo
        sx={{ flexBasis: { sm: '460px', md: '491px' } }}
      />
      <SubscriptionForm
        sx={{ flexBasis: { sm: '403px', md: '595px' } }}
      />
    </Stack>
  </Container>
);

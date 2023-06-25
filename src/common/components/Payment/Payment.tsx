import { Box, Container, Stack } from '@mui/material';
import { PaymentInfo } from './components';
import { usePayment } from './hooks';

export const Payment = () => {
  const paymentInfo = usePayment();
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'primary.light',
        py: { xs: '32px', md: '64px' },
      }}
    >
      <Container>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 4, sm: 7.5, md: 10 }}
          sx={{
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            py: 2,
            px: { xs: 2, sm: 3, md: 1.5, lg: '112px' },
            backgroundColor: 'secondary.main',
            borderRadius: '4px',
          }}
        >
          {paymentInfo.map(paymentDetails => (
            <PaymentInfo
              key={paymentDetails.id}
              paymentDetails={paymentDetails}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

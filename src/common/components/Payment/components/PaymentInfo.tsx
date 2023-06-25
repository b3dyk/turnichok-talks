import { Box, Stack, Typography } from '@mui/material';
import { IPayment } from '../interfaces';
import { usePaymentInfo } from '../hooks';

interface Props {
  paymentDetails: IPayment;
}

export const PaymentInfo = ({
  paymentDetails: { title, text, icon, type },
}: Props) => {
  const sx = usePaymentInfo(type);
  return (
    <Box>
      <Stack
        direction="row"
        spacing={3}
        sx={{
          justifyContent: { xs: 'flex-start', sm: 'center' },
          alignItems: 'center',
          height: '48px',
        }}
      >
        {icon.map(item => (
          <Box key={item} component="img" src={item} alt={title} />
        ))}
      </Stack>
      <Typography
        variant="h3"
        component="h3"
        color="secondary.lightText"
        sx={{ m: '16px 0 8px', whiteSpace: 'nowrap' }}
      >
        {title}
      </Typography>
      <Typography variant="p3" component="p" sx={sx.text}>
        {text}
      </Typography>
    </Box>
  );
};

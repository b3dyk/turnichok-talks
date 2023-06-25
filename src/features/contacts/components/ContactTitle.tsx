import { Stack, Typography } from '@mui/material';

export const ContactTitle = () => (
  <Stack
    gap={1}
    sx={{
      mb: { xs: '24px', sm: '32px', md: '64px' },
    }}
  >
    <Typography
      variant="h2"
      component="h1"
      color='primary.mainText'
      sx={{ textAlign: { xs: 'left', sm: 'center' } }}
    >
      Зв'яжіться з нами
    </Typography>
    <Typography
      variant="p2"
      component="p"
      color='primary.mainText'
      sx={{ textAlign: { xs: 'left', sm: 'center' } }}
    >
      Є запитання чи зауваження? Просто напишіть нам повідомлення!
    </Typography>
  </Stack>
);

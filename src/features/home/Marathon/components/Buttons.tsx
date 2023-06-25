import { Button as MUIButton, Stack, Typography } from '@mui/material';
import { Button } from 'src/common/components';

export const Buttons = () => (
  <Stack gap={1} sx={{ flexDirection: { sm: 'row' } }}>
    <Button variant='primary'>Записатись на марафон</Button>
    <MUIButton
      href='#'
      sx={{
        p: 1,
        color: 'lightPrimary.action',
        textTransform: 'none',
        textDecoration: 'underline',
      }}
    >
      <Typography variant='p3'>Дізнатись більше</Typography>
    </MUIButton>
  </Stack>
);

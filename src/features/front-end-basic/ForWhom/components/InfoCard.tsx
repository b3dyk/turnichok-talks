import { Box, Typography } from '@mui/material';

interface Props {
  title: string
  text: string
}

export const InfoCard = ({ title, text }: Props) => (
  <Box
    sx={{
      gap: { xs: 1, sm: 2 },
      py: { xs: 1, sm: 2 },
      px: 2,
      color: 'primary.black',
      backgroundColor: 'lightPrimary.action',
      borderRadius: { sm: 0.5 },
    }}
  >
    <Typography variant='h3' component='h3' color='inherit' sx={{ maxWidth: '455px' }}>{title}</Typography>
    <Typography variant='p2' component='p' color='inherit' sx={{ maxWidth: '455px' }}>{text}</Typography>
  </Box>
);

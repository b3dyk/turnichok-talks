import { Box, Stack, Typography } from '@mui/material';
import { IContactItem } from '../interface';

type Props = Omit<IContactItem, 'id'>

export const ContactItem = ({ text, Icon }: Props) => (
  <Stack
    direction='row'
    gap={3}
    sx={{
      py: 1,
    }}
  >
    <Box sx={{
      fontSize: '24px',
      '& svg': {
        display: 'block',
      },
    }}><Icon/></Box>
    <Typography variant='p2' component='p' color='inherit'>
      {text}
    </Typography>
  </Stack>
);

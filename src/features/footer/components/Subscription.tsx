import { Box, Typography } from '@mui/material';
import { SubscriptionForm } from '.';
import { SxPropsInterface } from 'src/common/interfaces';

interface Props {
  sx?: SxPropsInterface
}

export const Subscription = ({ sx }: Props) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: { xs: 'transparent', sm: 'secondary.main' },
      borderRadius: '4px',
      p: { xs: '0', sm: '16px', md: '24px' },
      ...sx,
    }}
  >
    <Box
      sx={{
        width: { xs: '328px', sm: '353px', md: '500px' },
        mb: { xs: '32px', sm: '0' },
      }}
    >
      <Typography variant="p2" component="p">
        Підпишіться на розсилку — залишайтеся у курсі трендів IT- ринку, а також
        новин Комп'ютерної школи Same IT
      </Typography>
    </Box>
    <SubscriptionForm />
  </Box>
);

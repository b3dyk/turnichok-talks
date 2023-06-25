import { Box } from '@mui/material';

interface Props {
  index: number
}

export const ItemIndex = ({ index }: Props) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: { xs: '50px', sm: '56px' },
      height: { xs: '50px', sm: '56px' },
      backgroundColor: 'lightPrimary.action',
      borderRadius: '10px',
      fontWeight: 700,
      fontSize: '42px',
      lineHeight: 1,
    }}
  >
    {index}
  </Box>
);
